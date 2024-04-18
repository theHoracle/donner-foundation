import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import NavbarScrollHandler from "./NavbarScrollHandler";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <NavbarScrollHandler>
      <MaxWidthWrapper>
        <div className="flex h-16 items-center">
          <div className="lg:ml-4  flex">
            <Link href="/">Logo</Link>
          </div>
          <div>
            {/* Hot */}
            {/* Hot */}
          </div>
          <div className="ml-auto flex items-center ">
            {/* sign in / up */}
            {!!!user && (
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Sign In
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  href="/sign-up"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Create account
                </Link>
              </div>
            )}
          </div>
          <div>{/* Mobile nav */}</div>
        </div>
      </MaxWidthWrapper>
    </NavbarScrollHandler>
  );
};

export default Navbar;
