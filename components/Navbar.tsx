"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#B4C7CC]">
      <nav className="flex w-full items-center justify-between pl-0 pr-16 h-16 overflow-hidden">
        {/* inset-inline-start: name/brand */}
        <Link href="/" className="leading-tight overflow-hidden">
          <Image
            src="/logos/personal_logo.png"
            alt="Brenda's Logo"
            width={170}
            height={40}
            className="object-contain"
          />
        </Link>
        {/* Right: links */}
        <div className="flex items-center gap-10 text-xl">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-[#111111]"
                    : "text-[#111111]/80 hover:text-[#111111]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
