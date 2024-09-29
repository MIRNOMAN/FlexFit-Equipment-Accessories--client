/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

// Hook to handle scroll animations
export const useScrollAnimation = (elementRef: any, animationClass: any) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass); // Add animation class when in view
          } else {
            entry.target.classList.remove(animationClass); // Remove animation class when out of view
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, animationClass]);
};
