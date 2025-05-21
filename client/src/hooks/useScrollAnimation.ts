import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const [elementsLoaded, setElementsLoaded] = useState(false);

  useEffect(() => {
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initialize animations
    if (!elementsLoaded) {
      setElementsLoaded(true);
      animateOnScroll();
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [elementsLoaded]);

  return { registerRef: useRef };
}
