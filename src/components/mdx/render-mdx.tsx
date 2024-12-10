"use client";
import React from "react";

import { cn } from "@/helpers/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const RenderMdx = ({ children, className, id }: Props) => {
  return (
    <div id={id} className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export default RenderMdx;
