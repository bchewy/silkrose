'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OnboardingContextType {
  completedTours: Record<string, boolean>;
  markTourAsComplete: (tourId: string) => void;
  resetTour: (tourId: string) => void;
  shouldShowTour: (tourId: string) => boolean;
  resetAllTours: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// Prefix for local storage to avoid conflicts
const STORAGE_PREFIX = 'silkrose_tour_';

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  // Get completed tours from localStorage or start fresh
  const [completedTours, setCompletedTours] = useState<Record<string, boolean>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load saved tour completion data on mount
  useEffect(() => {
    try {
      // Browser-only code - avoid SSR issues
      if (typeof window !== 'undefined') {
        // For testing, uncommenting this line will reset all tours on page load
        // localStorage.removeItem(`${STORAGE_PREFIX}completed`);

        const savedToursData = localStorage.getItem(`${STORAGE_PREFIX}completed`);
        console.log('Loaded tour data:', savedToursData);
        
        if (savedToursData) {
          setCompletedTours(JSON.parse(savedToursData));
        }
      }
    } catch (e) {
      console.error('Failed to parse tour data:', e);
    }
    
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever completedTours changes
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem(
        `${STORAGE_PREFIX}completed`,
        JSON.stringify(completedTours)
      );
      console.log('Saved tour data:', completedTours);
    }
  }, [completedTours, isInitialized]);

  // Mark a tour as completed
  const markTourAsComplete = (tourId: string) => {
    console.log(`Marking tour ${tourId} as complete`);
    setCompletedTours((prev) => ({
      ...prev,
      [tourId]: true,
    }));
  };

  // Reset a specific tour to show again
  const resetTour = (tourId: string) => {
    console.log(`Resetting tour ${tourId}`);
    setCompletedTours((prev) => {
      const newState = { ...prev };
      delete newState[tourId];
      return newState;
    });
  };

  // Reset all tours
  const resetAllTours = () => {
    console.log('Resetting all tours');
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`${STORAGE_PREFIX}completed`);
    }
    setCompletedTours({});
  };

  // Check if a tour should be shown
  const shouldShowTour = (tourId: string): boolean => {
    return !completedTours[tourId];
  };

  return (
    <OnboardingContext.Provider
      value={{
        completedTours,
        markTourAsComplete,
        resetTour,
        shouldShowTour,
        resetAllTours,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

// Custom hook to use the onboarding context
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}; 