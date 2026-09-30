import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { CALENDAR } from "@/lib/content";

type Panel = "login" | "vouchers" | "calendar" | null;

type Props = {
  panel: Panel;
  onClose: () => void;
};

export function FooterPanels({ panel, onClose }: Props) {
  const [note, setNote] = useState("");

  if (!panel) return null;

  function onVoucher(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNote("Voucher request parked with the desk.");
  }

  function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNote("Member desk is offline in this preview. Call the office.");
  }

  const title =
    panel === "login" ? "Member login" : panel === "vouchers" ? "Gift vouchers" : "Calendar";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-xl bg-paper p-6 text-ink shadow-soft sm:rounded-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <h2 className="font-display text-3xl font-medium">{title}</h2>
          <button type="button" className="flex size-11 items-center justify-center" onClick={onClose} aria-label="Close">
            <X className="size-5" />
          </button>
        </div>

        {panel === "calendar" ? (
          <ul className="space-y-4">
            {CALENDAR.map((row) => (
              <li key={row.what} className="border-t border-mist pt-4 first:border-0 first:pt-0">
                <p className="text-xs tracking-[0.14em] text-ink-muted">{row.when}</p>
                <p className="mt-1 text-base">{row.what}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {panel === "login" ? (
          <form className="space-y-3" onSubmit={onLogin}>
            <input
              type="email"
              required
              placeholder="Member email"
              className="h-12 w-full rounded-md border border-mist px-3 text-base outline-none focus:border-water"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="h-12 w-full rounded-md border border-mist px-3 text-base outline-none focus:border-water"
            />
            <button type="submit" className="h-12 w-full rounded-md bg-ink text-sm text-paper">
              Continue
            </button>
          </form>
        ) : null}

        {panel === "vouchers" ? (
          <form className="space-y-3" onSubmit={onVoucher}>
            <p className="text-sm leading-relaxed text-ink-soft">
              A day on Pittwater, a course, or a twilight. The desk writes the voucher.
            </p>
            <input
              name="name"
              required
              placeholder="Your name"
              className="h-12 w-full rounded-md border border-mist px-3 text-base outline-none focus:border-water"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="h-12 w-full rounded-md border border-mist px-3 text-base outline-none focus:border-water"
            />
            <button type="submit" className="h-12 w-full rounded-md bg-coral text-sm text-paper">
              Request a voucher
            </button>
          </form>
        ) : null}

        {note ? <p className="mt-4 text-sm text-water">{note}</p> : null}
      </div>
    </div>
  );
}
