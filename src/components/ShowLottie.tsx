'use client';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

type Props = {
  path: string;
  className?: string;
};

const ShowLottie = ({ path, className }: Props) => {
  return (
    <div className={cn('max-w-sm md:max-w-md mx-auto aspect-square', className)}>
      <Suspense fallback={<div className="w-full h-full bg-gray-50 animate-pulse rounded-xl" />}>
        <Player autoplay loop src={path} style={{ height: '100%', width: '100%' }} />
      </Suspense>
    </div>
  );
};

export default ShowLottie;
