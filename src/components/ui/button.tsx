import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2',
  {
    variants: {
      variant: {
        default: 'btn-primary hover:opacity-90',
        secondary: 'btn-secondary hover:opacity-90',
        outline: 'border border-app text-main hover:bg-surface dark:hover:bg-[hsl(var(--surface-2))]',
        ghost: 'hover:bg-[hsl(var(--surface-2))] dark:hover:bg-[hsl(var(--surface-3))]',
        link: 'underline underline-offset-4 hover:no-underline',
      },
      size: { default: 'h-10 px-4 py-2', sm: 'h-9 rounded-lg px-3', lg: 'h-11 rounded-2xl px-6' },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { asChild?: boolean; }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';
export { Button, buttonVariants };
