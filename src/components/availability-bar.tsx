import { DAYS, INTENTS } from "@/lib/content";

export type AvailabilityState = {
  date: string;
  days: string;
  style: string;
  guests: string;
};

type Props = {
  value: AvailabilityState;
  onChange: (next: AvailabilityState) => void;
  onSubmit: () => void;
};

export function AvailabilityBar({ value, onChange, onSubmit }: Props) {
  function patch(partial: Partial<AvailabilityState>) {
    onChange({ ...value, ...partial });
  }

  return (
    <section className="bg-ink text-paper" aria-label="Availability">
      <form
        className="mx-auto grid max-w-6xl min-w-0 gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block min-w-0">
            <span className="mb-2 block text-xs tracking-[0.14em] text-paper/60">Date</span>
            <input
              type="date"
              value={value.date}
              onChange={(e) => patch({ date: e.target.value })}
              className="date-field h-12 w-full min-w-0 max-w-full rounded-sm border border-paper/15 bg-surface-dark px-3 text-sm text-paper outline-none"
            />
          </label>
          <fieldset className="min-w-0">
            <legend className="mb-2 text-xs tracking-[0.14em] text-paper/60">Days</legend>
            <div className="flex flex-wrap gap-1.5">
              {DAYS.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => patch({ days: day.id })}
                  className={
                    value.days === day.id
                      ? "h-10 rounded-sm bg-paper px-3 text-xs text-ink"
                      : "h-10 rounded-sm border border-paper/15 px-3 text-xs text-paper/80"
                  }
                >
                  {day.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs tracking-[0.14em] text-paper/60">How you’ll go</legend>
            <div className="flex flex-wrap gap-1.5">
              {INTENTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => patch({ style: item.id })}
                  className={
                    value.style === item.id
                      ? "h-10 rounded-sm bg-paper px-3 text-xs text-ink"
                      : "h-10 rounded-sm border border-paper/15 px-3 text-xs text-paper/80"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="block">
            <span className="mb-2 block text-xs tracking-[0.14em] text-paper/60">Guests</span>
            <input
              type="number"
              min={1}
              max={12}
              value={value.guests}
              onChange={(e) => patch({ guests: e.target.value })}
              className="h-12 w-full rounded-sm border border-paper/15 bg-surface-dark px-3 text-sm text-paper outline-none"
            />
          </label>
        </div>
        <button
          type="submit"
          className="h-12 rounded-md bg-coral px-6 text-sm font-medium text-paper transition-colors hover:bg-coral-deep"
        >
          See what’s free
        </button>
      </form>
    </section>
  );
}
