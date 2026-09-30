import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { INTENTS } from "@/lib/content";
import { saveEnquiry } from "@/lib/enquiry";

type Prefill = {
  date: string;
  days: string;
  style: string;
  guests: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  prefill: Prefill;
};

export function EnquirySheet({ open, onClose, prefill }: Props) {
  const [sent, setSent] = useState(false);
  const [intent, setIntent] = useState(prefill.style || "skippered");

  if (!open) return null;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    saveEnquiry({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      mobile: String(form.get("mobile") ?? ""),
      intent: String(form.get("intent") ?? intent),
      notes: String(form.get("notes") ?? ""),
      date: prefill.date,
      days: prefill.days,
      style: prefill.style,
      guests: prefill.guests,
      createdAt: new Date().toISOString(),
    });
    setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-xl bg-paper p-6 shadow-soft sm:rounded-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm tracking-wide text-ink-muted">Desk enquiry</p>
            <h2 id="enquiry-title" className="font-display text-3xl font-medium text-ink">
              {sent ? "Received." : "See what’s free"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-11 items-center justify-center rounded-md text-ink"
            aria-label="Close enquiry"
          >
            <X className="size-5" />
          </button>
        </div>

        {sent ? (
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-ink-soft">
              This is a prototype desk, not a live marina calendar. The office will treat this as a note
              — call {""}
              <a href="tel:+61299796266" className="text-water underline-offset-4 hover:underline">
                02 9979 6266
              </a>{" "}
              if the date is tight.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="h-12 rounded-md bg-coral px-6 text-sm font-medium text-paper"
            >
              Back to the water
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <p className="text-sm leading-relaxed text-ink-soft">
              {prefill.date || "Date open"} · {prefill.days || "duration"} · {prefill.style || "how you’ll go"} ·{" "}
              {prefill.guests || "guests"} guests
            </p>
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="Mobile" name="mobile" type="tel" autoComplete="tel" required />
            <label className="block">
              <span className="mb-2 block text-sm text-ink-soft">Intent</span>
              <div className="grid grid-cols-2 gap-2">
                {INTENTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIntent(item.id)}
                    className={
                      intent === item.id
                        ? "h-11 rounded-sm border border-ink bg-ink text-sm text-paper"
                        : "h-11 rounded-sm border border-mist bg-foam text-sm text-ink"
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <input type="hidden" name="intent" value={intent} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-ink-soft">Notes</span>
              <textarea
                name="notes"
                rows={4}
                className="w-full rounded-md border border-mist bg-paper px-3 py-3 text-base text-ink outline-none focus:border-water"
                placeholder="Preferred yacht, skipper, celebration…"
              />
            </label>
            <button
              type="submit"
              className="h-12 w-full rounded-md bg-coral text-sm font-medium text-paper transition-colors hover:bg-coral-deep"
            >
              Send to the desk
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-md border border-mist bg-paper px-3 text-base text-ink outline-none focus:border-water"
      />
    </label>
  );
}
