import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function SilkRoseLogo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 5L5 20L20 35L35 20L20 5Z"
        fill="url(#silk_gradient)"
        strokeWidth="0"
      />
      <path
        d="M20 10L10 20L20 30L30 20L20 10Z"
        fill="white"
        fillOpacity="0.3"
        strokeWidth="0"
      />
      <circle cx="20" cy="20" r="4" fill="white" fillOpacity="0.9" />
      <defs>
        <linearGradient
          id="silk_gradient"
          x1="5"
          y1="5"
          x2="35"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9612d9" />
          <stop offset="1" stopColor="#ff3a5c" />
        </linearGradient>
      </defs>
    </svg>
  );
} 