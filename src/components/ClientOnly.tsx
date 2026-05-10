'use client';

import { useEffect, useState } from 'react';

/**
 * Renders children only after the component has mounted on the client.
 * This prevents React hydration mismatches caused by browser extensions
 * (e.g., Browsec VPN) that inject attributes like `bis_skin_checked`
 * into the DOM before React hydrates.
 *
 * On the server, this renders the `fallback` (default: null), so SSR
 * still produces an initial shell. On the client, after the first paint,
 * the real content swaps in seamlessly.
 */
interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
