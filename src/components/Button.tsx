import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  sameTab?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  children,
  href,
  className,
  variant = 'primary',
  sameTab,
  onClick,
  type = 'button',
  disabled,
}: Props) => {
  const classes = cn(
    'px-6 py-3 rounded-md transition-all duration-300 font-medium inline-block text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
    variant === 'outline' && 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    variant === 'ghost' && 'text-gray-600 hover:bg-gray-100',
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={sameTab ? '_self' : '_blank'}
        className={classes}
        onClick={(e) => onClick && onClick(e)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={(e) => onClick && onClick(e)} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
