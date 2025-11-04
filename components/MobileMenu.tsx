import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navLink } from "@/helpers/data";
import Link from "next/link";
import { Menu } from "lucide-react";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="shadow">
          <SheetTitle className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            {" "}
            Mifta Dev.
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center gap-6">
          {navLink.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className="text-[15px] text-[#666666] hover:font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
