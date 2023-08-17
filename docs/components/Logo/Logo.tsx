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
<svg id="uuid-e3c9230a-c2a0-4b53-af2a-130f43b15b5e"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.79 96.43">
    <defs>
        
    </defs>
    <path className="uuid-7bf6b50f-26f4-488a-899d-e28dc18364c6" d="m30.97,0C12.72,8.2,0,26.48,0,47.78s12.72,39.59,30.97,47.78c-9-13.73-14.28-30.12-14.28-47.78S21.96,13.73,30.97,0" />
    <path className="uuid-7bf6b50f-26f4-488a-899d-e28dc18364c6" d="m121.83.88c18.25,8.2,30.97,26.48,30.97,47.78s-12.72,39.59-30.97,47.78c9-13.73,14.28-30.12,14.28-47.78s-5.27-34.05-14.28-47.78" />
    <path className="uuid-5017a909-b0a5-49da-a062-a3f3e89a4423" d="m101.15,71.19c-3.65,1.53-9.52,2.58-15.06,2.58-15.87,0-25.28-9.99-25.28-25.87,0-17.76,11.05-26.34,25.16-26.34,6.48,0,11.53,1.42,15.05,2.94l3.77-14.11c-3.18-1.65-10.23-3.53-19.52-3.53-24,0-43.28,14.94-43.28,41.99,0,22.7,14.11,39.87,41.51,39.87,9.52,0,17.05-1.87,20.23-3.42l-2.58-14.1Z" />
</svg>
    </div>
  );
}
