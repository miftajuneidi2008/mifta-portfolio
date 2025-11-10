import X from "@/assets/icons/social-x.svg";
import LinkedIn from "@/assets/icons/social-linkedin.svg";
import GitHub from "@/assets/icons/github-svgrepo-com.svg";
import { navLink } from "@/helpers/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col justify-center gap-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#42446E]">MiftaDev.</h3>
        <div className="flex flex-wrap items-center gap-3">
          <p>+251920181846</p>
          <p>miftajuneidi2008@gmail.com</p>
          <div className="flex items-center gap-4">
            <X className="h-6 w-6" />
            <LinkedIn className="h-6 w-6" />
            <GitHub className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#141414]/50"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap">
            {navLink.map((links)=>(
           <Link href={links.to} key={links.name} className="text-[#42446E]">{links.name}</Link>
            ))}
        </div>
        <div>
            <p>Designed and Build by Mifta Juneidi</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
