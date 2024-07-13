import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export const Counter = ({ from, to }: { from: number, to: number }) => {
    const nodeRef = useRef<HTMLParagraphElement>(null);
  
    useEffect(() => {
      const node = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if (node) {
            node.textContent = value.toFixed(0);
          }
        },
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <p ref={nodeRef} />;
  }