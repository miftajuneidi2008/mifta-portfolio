import MobileMenu from "@/components/MobileMenu";
import { navLink } from "@/helpers/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import X from "@/assets/icons/social-x.svg";
import LinkedIn from "@/assets/icons/social-linkedin.svg";
import GitHub from "@/assets/icons/github-svgrepo-com.svg";

const Navbar = () => {
  return (
    <header className="h-20 w-full shadow">
      <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        <Link
          href={`/`}
          className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
        >
          Mifta Dev.
        </Link>
        <div className="hidden items-center gap-8 md:inline-flex">
          {navLink.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className="text-[15px] text-[#666666] hover:font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <X className="h-6 w-6" />
            <LinkedIn className="h-6 w-6" />
            <GitHub className="h-6 w-6" />
          </div>
        </div>

        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
