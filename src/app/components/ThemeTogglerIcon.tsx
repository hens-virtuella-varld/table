import React from 'react';

interface ThemeTogglerIconProps {
  className?: string;
}

export const ThemeTogglerIcon = ({ className }: ThemeTogglerIconProps) => {

  return (
    // SVG icon from: https://www.svgrepo.com/svg/390804/sun-moon-eclipse
    <svg
      fill='#22d3ee'
      height='24'
      width='24'
      version='1.1'
      id='Icons'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      className={className}
    >
      <g>
        <path d='M13,7c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1s1,0.4,1,1v1C14,6.6,13.6,7,13,7z' />
      </g>
      <g>
        <path
          d='M5.9,9.9c-0.3,0-0.5-0.1-0.7-0.3L3.1,7.5c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l2.1,2.1c0.4,0.4,0.4,1,0,1.4
		C6.4,9.8,6.2,9.9,5.9,9.9z'
        />
      </g>
      <g>
        <path d='M3,17H2c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S3.6,17,3,17z' />
      </g>
      <g>
        <path
          d='M3.8,26.2c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.1-2.1c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-2.1,2.1
		C4.3,26.1,4.1,26.2,3.8,26.2z'
        />
      </g>
      <g>
        <path d='M13,28c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C14,27.6,13.6,28,13,28z' />
      </g>
      <g>
        <path d='M22,25c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S27,25,22,25z' />
      </g>
      <path
        d='M11,16c0-3.1,1.3-5.9,3.3-7.9C13.9,8,13.5,8,13,8c-4.4,0-8,3.6-8,8s3.6,8,8,8c0.5,0,0.9,0,1.3-0.1C12.3,21.9,11,19.1,11,16z
	'
      />
    </svg>
  );
};
