import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(
  value: number,
  currency: 'EUR' | 'GBP' | 'USD' = 'EUR',
  locale = 'pt-PT',
): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
