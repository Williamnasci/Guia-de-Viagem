import { useTheme } from 'next-themes';
import * as React from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (theme ?? resolvedTheme) === 'dark';

  return (
    <button
      aria-label="Alternar tema"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-10 items-center rounded-xl border px-3 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
    >
      {isDark ? '🌙 Escuro' : '☀️ Claro'}
    </button>
  );
}
