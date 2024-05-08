'use client';

import { INTERVENTION_CATEGORIES } from '@/config';
import { useOnClickOutside } from '@/hooks/use-onClick-outside';
import { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex h-full gap-4" ref={navRef}>
      {INTERVENTION_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };
        const isOpen = activeIndex === index;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
