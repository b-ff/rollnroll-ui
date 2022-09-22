import React, { ReactNode } from "react";
import "./FixedFrame.scss";

export interface FixedFrameProps {
  children: ReactNode;
}

export const FixedFrame = ({ children, ...props }: FixedFrameProps) => {
  return (
    <section {...props} className="fixed-frame">
      <div className="fixed-frame__inner">
        <div className="fixed-frame__fixed">{children}</div>
      </div>
    </section>
  );
};
