import React from "react";
import { Logo } from "../ui/logo";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <div className="container py-3 max-w-screen-lg">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <MainNav />
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/sel-hamr"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.gitHub className="size-6 md:size-5 fill-current" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/soufiane-elhamri/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.linkedIn className="size-6 md:size-5 fill-current" />
          </Link>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
};
