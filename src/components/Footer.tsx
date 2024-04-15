import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const Footer = () => {
  const footerLinks = [
    ["About us", "/about-us"],
    ["Volunteer", "#volunteer"],
    ["Causes", "/causes"],
    ["Projects", "/projects"],
    ["Team", "/team"],
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 text-sm">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center">
          <div className="grid md:grid-cols-3 gap-4 py-20">
            <div className="col-span-1 flex flex-col items-center md:items-start">
              <div className="">LOgo</div>
              <p>
                At donner foundation Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Consequuntur aliquid laboriosam at quidem
                eveniet excepturi dolores odio blanditiis reprehenderit unde!
              </p>
              <div>{/* socials */}</div>
            </div>
            <div className="bg-gray-700 rounded-md px-16 py-10 md:col-span-2 grid grid-cols-2">
              <div className="col-span-1">
                <h4 className="font-semibold text-base tracking-tight leading-tight">
                  Get Involved
                </h4>
                <ul className="mt-2">
                  {footerLinks.map((link, index) => {
                    return (
                      <li key={index} className="hover:text-gray-200 my-1">
                        <Link
                          href={link[1]}
                          className={cn({
                            "text-red-500": link[0] === "Causes",
                          })}
                        >
                          {link[0]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="font-semibold text-base tracking-tight leading-tight">
                  Contact Us
                </h4>
                <ul className="mt-2">
                  <li className="hover:text-gray-200 my-1">
                    <Link href="https://www.google.com/maps/place/Point+Nemo/@-20.6582431,116.9901134,17z/data=!3m1!4b1!4m6!3m5!1s0x2bf60dd1a4451b0d:0xf2fad44f56f5c493!8m2!3d-20.6582431!4d116.9926937!16s%2Fg%2F11gh_gbl4m?entry=ttu">
                      Taurus, Jupiter.
                    </Link>
                  </li>
                  <li className="hover:text-gray-200 my-1">
                    <Link href="mailto:help@donnerfoundation.com">
                      help@donnerfoundation.com
                    </Link>
                  </li>
                  <li className="hover:text-gray-200 my-1">
                    <Link href="tel:+2341234567891">234 123 4567 891</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="h-px w-screen bg-muted-foreground" aria-hidden />
            <p className="text-center py-2">
              Copyrights &copy; Donner Foundation {new Date().getFullYear()}.
              All Rights Reserved
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
