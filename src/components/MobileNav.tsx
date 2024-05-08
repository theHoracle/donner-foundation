'use client';

import { useAuth } from '@/hooks/use-auth';
import { User } from '@/payload-types';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  user: User | null;
}
const MobileNav = ({ user }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const { signOut } = useAuth();
  // close on click
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  // close nav on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  //   checking 2x
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };
  // remove main scrollbar when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    }
    document.body.classList.remove('overflow-hidden');
  });

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-300"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );
  }
  return (
    <div className="">
      <div className="relative z-40 md:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>
      <div
        ref={mobileNavRef}
        className="fixed overflow-y-scroll w-4/5 overscroll-y-none inset-y-0 right-0 z-40 flex justify-end"
      >
        <div className="w-full h-full flex flex-col items-start max-w-sm overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex h-16 items-center justify-end w-full ">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <div className="mt-">{/* List some categories */}</div>

          <div className="w-full border-t border-gray-200 px-4 py-16">
            {user ? (
              <div className="">
                <div className="flex flex-col bg-zinc-100 rounded-lg w-full py-1 px-2 space-y-0.5 leading-none">
                  <p className="text-muted-foreground text-sm">Signed in as:</p>
                  <p className="font-medium text-base text-black">
                    {user.email}
                  </p>
                </div>
                <div>
                  <Button className="w-full" onClick={signOut}>
                    Log out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex ">
                  <Link
                    href="/sign-up"
                    className={cn(buttonVariants(), 'w-full')}
                  >
                    Sign up
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    href="/sign-in"
                    className={cn(
                      buttonVariants({ variant: 'secondary' }),
                      'w-full',
                    )}
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
