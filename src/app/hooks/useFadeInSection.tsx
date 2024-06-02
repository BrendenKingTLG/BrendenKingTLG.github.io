import { useEffect, useRef, useState, RefObject } from "react";

interface FadeInSectionResult {
  isVisible: boolean;
  domRef: RefObject<HTMLDivElement>;
}

export default function useFadeInSection(): FadeInSectionResult {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return { isVisible, domRef };
}
