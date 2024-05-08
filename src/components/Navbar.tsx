import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { cookies } from 'next/headers';
import { getServerSideUser } from '@/lib/payload-utils';
import NavbarScrollHandler from './NavbarScrollHandler';
import MobileNav from './MobileNav';
import NavItems from './NavItems';

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <NavbarScrollHandler>
      <MaxWidthWrapper>
        <div className="flex h-16 items-center">
          <div className="md:ml-4  flex">
            <Link href="/">Logo</Link>
          </div>
          <div className="ml-auto flex items-center md:space-x-6 ">
            <div className="hidden z-50 md:block md:ml-8 md:self-stretch">
              <NavItems />
            </div>
            <span
              className="h-6 w-px bg-gray-200 hidden md:block"
              aria-hidden="true"
            />
            {/* sign in / up */}
            {!!!user && (
              <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  Sign In
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  href="/sign-up"
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  Create account
                </Link>
              </div>
            )}
          </div>
          <div>
            <MobileNav user={user} />
          </div>
        </div>
      </MaxWidthWrapper>
    </NavbarScrollHandler>
  );
};

export default Navbar;
