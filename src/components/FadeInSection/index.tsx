"use client";

import React, { ReactNode } from "react";
import useFadeInSection from "../../app/hooks/useFadeInSection";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const { isVisible, domRef } = useFadeInSection();
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={{
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
