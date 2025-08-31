"use client";
import React, { useEffect, useState } from "react";

type Item = { id: string; label: string };
const ITEMS: Item[] = [
  { id: "hero",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "skills",   label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll state (changes background)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy using getBoundingClientRect
  useEffect(() => {
    const NAV_OFFSET = 64; // Adjust to your navbar height

    const computeActive = () => {
      const scrollPosition = window.scrollY + NAV_OFFSET + 1;
      let current = ITEMS[0].id;

      for (const item of ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            current = item.id;
          }
        }
      }

      // At bottom of page, set last section active
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        current = ITEMS[ITEMS.length - 1].id;
      }

      setActive(current);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/70 backdrop-blur border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#hero" className="font-semibold tracking-tight">
            <span className="text-primary">{"<"}</span>
            mehak.dev
            <span className="text-primary">{"/>"}</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2">
            {ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative block px-3 py-2 rounded-md transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                    {/* Underline indicator */}
                    <span
                      className={[
                        "pointer-events-none absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          "md:hidden fixed inset-x-0 top-16 bg-surface/90 backdrop-blur transition-all duration-300 z-40",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">
          {ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative block px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  ].join(" ")}
                  onClick={handleNavClick}
                >
                  {item.label}
                  {/* Underline indicator */}
                  <span
                    className={[
                      "pointer-events-none absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;