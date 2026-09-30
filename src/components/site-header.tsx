import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PHONE, PHONE_HREF } from "@/lib/content";

type Props = {
  onAvailability: () => void;
};

export function SiteHeader({ onAvailability }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/78 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="shrink-0 leading-none text-ink">
          <span className="font-display text-xl tracking-[0.08em] sm:text-2xl">
            ALL<span className="text-coral">SAIL</span>
          </span>
          <span className="mt-1 block text-[11px] tracking-[0.16em] text-ink-muted">
            Pittwater · Church Point
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={PHONE_HREF} className="text-sm text-ink-soft hover:text-ink">
            {PHONE}
          </a>
          <button
            type="button"
            onClick={onAvailability}
            className="h-11 rounded-md bg-coral px-4 text-sm font-medium text-paper transition-colors hover:bg-coral-deep"
          >
            Check availability
          </button>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/8 bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-base text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="mt-2 block text-sm text-ink-soft">
            {PHONE}
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onAvailability();
            }}
            className="mt-4 h-12 w-full rounded-md bg-coral text-sm font-medium text-paper"
          >
            Check availability
          </button>
        </div>
      ) : null}
    </header>
  );
}
