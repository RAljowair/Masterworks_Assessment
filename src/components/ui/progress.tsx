"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const progressColor = (value: number) => {
  if (value != null) {
    if (value < 50) {
      return "#FF5A35";
    } else if (value >= 50 && value <= 85) {
      return "#FF991F";
    }
  }
  return "#044DCB";
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
        backgroundColor: `${progressColor(value || 0)}`,
      }}
      className={`h-full w-full flex-1 transition-transform duration-1000`}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
