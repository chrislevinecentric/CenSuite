import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width, height, className = '' }: LogoProps) {
  const style = {
    width,
    height,
    display: 'inline-block'
  };
  return (
    <div
      style={style}
      className={`rsuite-logo logo-animated logo-animated-delay-half-seconds bounce-in ${className} `}
    >
      <svg viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
        <circle cx="72" cy="72" fill="#fff" r="72" />
        <path
          d="m35.77 33.1c-14.55 6.61-24.69 21.36-24.69 38.54s10.14 31.94 24.69 38.54c-7.18-11.07-11.38-24.3-11.38-38.54s4.21-27.47 11.38-38.54"
          fill="#fdb924"
        />
        <path
          d="m108.22 33.81c14.55 6.61 24.69 21.36 24.69 38.54s-10.14 31.94-24.69 38.54c7.18-11.07 11.38-24.3 11.38-38.54s-4.21-27.47-11.38-38.54"
          fill="#fdb924"
        />
        <path
          d="m91.74 90.53c-2.91 1.23-7.59 2.08-12.01 2.08-12.65 0-20.16-8.06-20.16-20.87 0-14.32 8.81-21.25 20.06-21.25 5.16 0 9.19 1.14 12 2.37l3.01-11.39c-2.53-1.33-8.16-2.85-15.57-2.85-19.13 0-34.51 12.05-34.51 33.87 0 18.31 11.25 32.16 33.09 32.16 7.59 0 13.6-1.51 16.13-2.76l-2.06-11.37z"
          fill="#2c1b5d"
        />
      </svg>
    </div>
  );
}
