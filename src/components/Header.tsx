import Link from 'next/link';
import { SITE } from '@/constants/content';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-app bg-[hsl(var(--surface-1)/0.7)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-main">{SITE.name}</Link>
        <nav className="hidden gap-6 md:flex">
          {SITE.nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="text-sm text-muted hover:text-main transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex"><Link href={SITE.cta.href}>{SITE.cta.label}</Link></Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
