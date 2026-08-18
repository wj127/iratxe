import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
};

const baseClassName =
  'font-ui inline-flex h-cta-height w-full items-center justify-center gap-[10px] rounded-cta bg-brand px-welcome text-cta font-bold text-white transition-colors duration-200 outline-none hover:bg-[#a01b21] focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function Button({ asChild = false, className, children, ...buttonProps }: ButtonProps) {
  const Component = asChild ? Slot : 'button';
  const mergedClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <Component className={mergedClassName} {...buttonProps}>
      {children}
    </Component>
  );
}
