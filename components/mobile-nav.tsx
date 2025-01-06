"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  links: { href: string; label: string }[];
}


const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

 

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Toggle Button */}
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent side="right" className="space-y-4">
        {/* Branding */}
        <MobileLink onOpenChange={setOpen} href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            width="40"
            height="40"
            className="h-10 w-10 rounded-full"
            alt="C.Shock logo"
          />
          <span className="font-bold text-lg">C.Shock</span>
        </MobileLink>

        {/* Links */}
        <div className="flex flex-col gap-3 mt-3">
          {links.map((link) => (
            <MobileLink
              key={link.href}
              href={link.href}
              onOpenChange={setOpen}
              className={cn(
                "text-sm font-medium hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/60"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </MobileLink>
          ))}

          {/* External Links */}
          <Link target="_blank" rel="noreferrer" href="https://github.com/cshocksr3" className="text-sm font-medium hover:text-primary">
            GitHub
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://x.com/cshocksr" className="text-sm font-medium hover:text-primary">
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(
        "text-sm font-medium transition-colors",
        pathname === href ? "text-primary" : "text-foreground/60",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileNav;
