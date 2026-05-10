'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  url?: string;
  className?: string;
  children?: React.ReactNode;
};

const BrowserFrame = ({ url, className, children }: Props) => {
  return (
    <div className={cn('w-full rounded-t-xl overflow-hidden border border-gray-200 shadow-lg bg-white', className)}>
      {/* Browser Header */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-grow mx-4">
          <div className="bg-white rounded py-1 px-3 text-[10px] text-gray-400 font-mono truncate border border-gray-200">
            {url || 'https://mehrab-hasan.dev'}
          </div>
        </div>
      </div>
      {/* Browser Body */}
      <div className="relative aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;
