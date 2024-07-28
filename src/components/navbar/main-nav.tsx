import React from "react";
import { projects } from "./links";
import Link from "next/link";

export const MainNav = () => {
  return (
    <div className=" items-center gap-2.5 w-full hidden md:flex">
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground/80 text-primary text-[11px] font-medium"
        >
          {project.title}
        </Link>
      ))}
    </div>
  );
};
