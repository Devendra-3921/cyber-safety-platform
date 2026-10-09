'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  const primaryClasses = 'bg-teal-700 text-white hover:bg-teal-800 shadow-xs hover:shadow-sm active:translate-y-px';
  const secondaryClasses = 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 shadow-xs active:translate-y-px';

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
