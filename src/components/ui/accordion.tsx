"use client";

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/helpers/cn';

export type AccordionVariant = "default" | "secondary";

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = useAccordionContext();
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn(accordionVariants.accordionContent({ variant }), className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

export type AccordionContextProps = {
  variant?: AccordionVariant,
  hideTriggerIcon?: boolean
  triggerIcon?: React.ReactNode
}

const AccordionContext = React.createContext<AccordionContextProps | undefined>(undefined);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordionContext must be used within an AccordionProvider");
  }

  return context;
};

type AccordionProviderProps = {
  children: React.ReactNode;
} & AccordionContextProps

export const AccordionProvider: React.FC<AccordionProviderProps> = (
  { children, hideTriggerIcon = false, triggerIcon, ...rest }
) => {
  const value = {
    hideTriggerIcon,
    triggerIcon,
    ...rest
  };

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = useAccordionContext();
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={
        cn(accordionVariants.accordionItem({
          variant
        }),
          className
        )}
      {...props}
    />
  );
});

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant, hideTriggerIcon, triggerIcon } = useAccordionContext();
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          accordionVariants.accordionTrigger({
            variant
          }),
          className
        )}
        {...props}
      >
        {children}
        {!hideTriggerIcon && (
          triggerIcon || <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 " />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Accordion> & AccordionContextProps

export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Accordion>,
  AccordionProps
>(({ hideTriggerIcon, triggerIcon, variant, ...props }, ref) => (
  <AccordionProvider
    hideTriggerIcon={hideTriggerIcon}
    triggerIcon={triggerIcon}
    variant={variant}
  >
    <AccordionPrimitive.Root {...props} ref={ref} />
  </AccordionProvider>
));

export const accordionVariants = {
  accordionItem: cva("", {
    variants: {
      variant: {
        default: "border-b",
        secondary:
          "border border-muted hover:border-primary px-5 bg-muted rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }),
  accordionTrigger: cva(
    "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
    {
      variants: {
        variant: {
          default: "hover:underline",
          secondary: ""
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  ),
  accordionContent: cva("pb-4 pt-0", {
    variants: {
      variant: {
        default: "",
        secondary: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  })
};
