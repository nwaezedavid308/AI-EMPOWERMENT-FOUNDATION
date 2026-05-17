import React from 'react';

export const LogoMark = ({ className = "" }: { className?: string }) => (
  <div 
    className={`w-9 h-9 bg-black text-gold rounded-full flex items-center justify-center font-black text-sm shrink-0 border border-gold/20 ${className}`}
  >
    AI
  </div>
);

export const LogoTriangle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L100 25V75L50 100L0 75V25L50 0Z" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
  </svg>
);

export const LogoMiddleSegment = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L80 5V95L50 95L50 5Z" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const LogoRightSliver = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 15C96.6667 38.3333 96.6667 61.6667 90 85C83.3333 61.6667 83.3333 38.3333 90 15Z" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const LogoFull = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
    <LogoTriangle className="absolute inset-0" />
  </svg>
);
