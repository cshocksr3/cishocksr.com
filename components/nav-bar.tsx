"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ModeSwitch from "./theme-toggle";
import MobileNav from "./mobile-nav";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/playground", label: "Playground" },
  ];

  return (
    <nav
      className="relative flex items-center justify-between p-4"
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          width="40"
          height="40"
          className="h-10 w-10 rounded-full"
          alt="C.Shock logo"
        />
        <span className="text-xl font-bold">C.Shock</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href
                ? "text-primary underline underline-offset-4 decoration-primary"
                : "text-foreground/60"
            )}
          >
            {link.label}
          </Link>
        ))}
        <ModeSwitch />
      </div>

      {/* Mobile Navigation */}
      <MobileNav links={links} />
    </nav>
  );
};

export default NavBar;
