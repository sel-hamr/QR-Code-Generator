import React from "react";
import { Icons } from "./icons";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Icons.logo className="md:size-5 size-6 fill-primary" />
      <span className="md:text-sm font-semibold text-primary">QRcode</span>
    </div>
  );
};
