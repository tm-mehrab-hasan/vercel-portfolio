'use client';
import { Icon as IconifyIcon } from '@iconify/react';
import { cn } from '@/lib/utils';

type Props = {
  icon: string;
  className?: string;
  width?: number | string;
  style?: React.CSSProperties;
};

const Icon = ({ icon, className, width = 24, style }: Props) => {
  return <IconifyIcon icon={icon} className={cn('inline-block', className)} width={width} style={style} />;
};

export default Icon;
