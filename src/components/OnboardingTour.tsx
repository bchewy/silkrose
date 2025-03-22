'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import { FiHelpCircle, FiX, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export interface Step {
  target: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  disableBeacon?: boolean;
}

interface OnboardingTourProps {
  tourId: string;
  steps: Step[];
  showSkipButton?: boolean;
  styles?: any;
}

const OnboardingTour = ({
  tourId,
  steps,
  showSkipButton = true,
  styles = {},
}: OnboardingTourProps) => {
  // Safely get onboarding context with fallbacks
  let onboardingContext;
  try {
    onboardingContext = useOnboarding();
  } catch (e) {
    console.error("OnboardingProvider not found:", e);
    // Return minimal implementation that doesn't break the UI
    return null;
  }
  
  const { shouldShowTour, markTourAsComplete, resetTour } = onboardingContext;
  const [run, setRun] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  console.log(`OnboardingTour ${tourId} - initial render, run: ${run}`);

  // Start the tour if it should be shown (based on tour ID)
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // IMPORTANT: For testing, force tours to show
    const timer = setTimeout(() => {
      try {
        console.log(`Starting tour: ${tourId}`);
        // Force to true for testing - remove this line later
        setRun(true);
      } catch (e) {
        console.error("Error showing tour:", e);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [tourId]);

  // Add window resize listener to update tooltip position
  useEffect(() => {
    if (!run) return;
    
    const handleResize = () => updateTooltipPosition();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [run, currentStep]);
  
  // Function to update tooltip position - pulled out for reuse
  const updateTooltipPosition = () => {
    if (!run || steps.length === 0) return;

    const step = steps[currentStep];
    
    // Handle the center placement specially
    if (step.placement === 'center' || step.target === 'body') {
      if (tooltipRef.current) {
        const tooltipWidth = tooltipRef.current.offsetWidth;
        const tooltipHeight = tooltipRef.current.offsetHeight;
        
        setTooltipPosition({
          left: window.innerWidth / 2 - tooltipWidth / 2,
          top: window.innerHeight / 2 - tooltipHeight / 2
        });
      }
      return;
    }

    // Find the target element
    const targetElement = document.querySelector(step.target);
    if (!targetElement) {
      console.warn(`Target not found: ${step.target}`);
      return;
    }

    const targetRect = targetElement.getBoundingClientRect();
    const placement = step.placement || 'bottom';
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    // Add padding between tooltip and target
    const padding = 15;

    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const tooltipHeight = tooltipRef.current.offsetHeight;

      // Position based on placement
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = targetRect.top + scrollTop - tooltipHeight - padding;
          left = targetRect.left + scrollLeft + targetRect.width / 2 - tooltipWidth / 2;
          break;
        case 'bottom':
          top = targetRect.bottom + scrollTop + padding;
          left = targetRect.left + scrollLeft + targetRect.width / 2 - tooltipWidth / 2;
          break;
        case 'left':
          top = targetRect.top + scrollTop + targetRect.height / 2 - tooltipHeight / 2;
          left = targetRect.left + scrollLeft - tooltipWidth - padding;
          break;
        case 'right':
          top = targetRect.top + scrollTop + targetRect.height / 2 - tooltipHeight / 2;
          left = targetRect.right + scrollLeft + padding;
          break;
      }

      // Adjust if tooltip would go off screen
      if (left < scrollLeft) left = scrollLeft + 10;
      if (left + tooltipWidth > window.innerWidth + scrollLeft) 
        left = window.innerWidth + scrollLeft - tooltipWidth - 10;
      if (top < scrollTop) top = scrollTop + 10;
      if (top + tooltipHeight > window.innerHeight + scrollTop)
        top = window.innerHeight + scrollTop - tooltipHeight - 10;

      setTooltipPosition({ top, left });
    }
  };

  // Position the tooltip based on the target element
  useEffect(() => {
    updateTooltipPosition();
  }, [run, currentStep, steps]);

  // Scroll target element into view
  useEffect(() => {
    if (!run || steps.length === 0) return;
    
    const step = steps[currentStep];
    if (step.placement === 'center' || step.target === 'body') return;

    const targetElement = document.querySelector(step.target);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, [run, currentStep, steps]);

  // Highlight the target element
  useEffect(() => {
    if (!run || steps.length === 0) return;
    
    const step = steps[currentStep];
    if (step.placement === 'center' || step.target === 'body') return;

    const targetElement = document.querySelector(step.target);
    if (!targetElement) return;

    // Add highlight class to target
    targetElement.classList.add('onboarding-highlight');

    return () => {
      targetElement.classList.remove('onboarding-highlight');
    };
  }, [run, currentStep, steps]);

  // Handle next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishTour();
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Finish the tour
  const finishTour = () => {
    setRun(false);
    setCurrentStep(0);
    markTourAsComplete(tourId);
  };

  // Skip the tour
  const skipTour = () => {
    finishTour();
  };

  // Restart the tour
  const restartTour = () => {
    resetTour(tourId);
    setCurrentStep(0);
    setRun(true);
  };

  // Always show the help button for easy access during testing
  if (!run) {
    console.log(`OnboardingTour ${tourId} - showing help button`);
    return (
      <button
        onClick={restartTour}
        className="fixed bottom-4 right-4 p-3 bg-silk-600 text-white rounded-full shadow-lg hover:bg-silk-700 z-50"
        title="Show onboarding guide"
      >
        <FiHelpCircle className="h-5 w-5" />
      </button>
    );
  }

  return (
    <>
      {/* Tour overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40" onClick={skipTour} />
      
      {/* Tour tooltip */}
      <div
        ref={tooltipRef}
        className="fixed bg-gray-800 text-white rounded-lg shadow-lg p-4 z-50 w-80"
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          ...styles
        }}
      >
        {/* Close button */}
        <button
          onClick={skipTour}
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
        >
          <FiX className="h-5 w-5" />
        </button>
        
        {/* Content */}
        <div className="mb-4 pt-2">
          {steps[currentStep]?.content}
        </div>
        
        {/* Progress */}
        <div className="h-1 w-full bg-gray-600 mb-4 rounded-full">
          <div
            className="h-1 bg-silk-400 rounded-full"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        
        {/* Controls */}
        <div className="flex justify-between">
          <div>
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-3 py-1 flex items-center text-silk-600 hover:text-silk-700"
              >
                <FiArrowLeft className="mr-1 h-4 w-4" />
                Back
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {showSkipButton && (
              <button
                onClick={skipTour}
                className="px-3 py-1 text-gray-300 hover:text-white"
              >
                Skip
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="px-4 py-1 bg-silk-500 text-white rounded flex items-center hover:bg-silk-400"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <FiArrowRight className="ml-1 h-4 w-4" />
                </>
              ) : (
                'Finish'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Add global styles for highlight */}
      <style jsx global>{`
        .onboarding-highlight {
          position: relative;
          z-index: 41;
          box-shadow: 0 0 0 4px rgba(150, 18, 217, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default OnboardingTour; 