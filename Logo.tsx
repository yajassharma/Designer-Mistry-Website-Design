import React from 'react';

export const MistriLogo = ({ className = "w-10 h-10", strokeColor = "white" }: { className?: string, strokeColor?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#F97316"/>
    {/* Stylized 'd' and 'm' abstraction based on logo reference */}
    <path d="M35 30H55V70H35C35 70 25 70 25 50C25 30 35 30 35 30Z" stroke={strokeColor} strokeWidth="8"/>
    <path d="M55 30V70" stroke={strokeColor} strokeWidth="8"/>
    <path d="M75 30V70" stroke={strokeColor} strokeWidth="8"/>
  </svg>
);