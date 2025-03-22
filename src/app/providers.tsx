'use client';

import React from 'react';
import { OnboardingProvider } from '../context/OnboardingContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OnboardingProvider>
      {children}
    </OnboardingProvider>
  );
} 