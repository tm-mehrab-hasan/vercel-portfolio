'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const classes = cn(
    'px-8 py-4 rounded-xl transition-all duration-300 font-black uppercase tracking-widest text-sm inline-block text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow relative overflow-hidden group',
    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
    variant === 'outline' && 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-none',
    variant === 'ghost' && 'text-gray-600 hover:bg-gray-100 shadow-none',
    className
  );

  const content = (
    <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative z-10"
    >
        {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={sameTab ? '_self' : '_blank'}
        className={classes}
        onClick={(e) => onClick && onClick(e)}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={(e) => onClick && onClick(e)} type={type} disabled={disabled}>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      {content}
    </button>
  );
};

export default Button;
