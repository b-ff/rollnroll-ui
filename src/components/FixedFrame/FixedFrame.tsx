import React, { ReactNode } from "react";

export interface FixedFrameProps {
  children: ReactNode;
}

export const FixedFrame = ({ children, ...props }: FixedFrameProps) => {
  return <section>{children}</section>;
};
