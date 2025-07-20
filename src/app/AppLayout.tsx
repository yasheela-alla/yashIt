'use client'
import { useEffect } from 'react';
import { Grid } from '@/components/Grid';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Lenis from "lenis";

export default function AppLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <ThemeProvider>
      <div className={`relative min-h-screen transition-colors duration-300`}>
        <div className="absolute inset-0 z-0">
          <Grid />
        </div>
        <main className="relative z-20">{children}</main>
      </div>
    </ThemeProvider>
  );
}
