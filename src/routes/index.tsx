import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AvailabilityBar, type AvailabilityState } from "@/components/availability-bar";
import { EnquirySheet } from "@/components/enquiry-sheet";
import { FooterPanels } from "@/components/footer-panels";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { COURSES, FLEET, MEMBERSHIPS, REGATTAS, TILES } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [availability, setAvailability] = useState<AvailabilityState>({
    date: today,
    days: "weekend",
    style: "skippered",
    guests: "6",
  });
  const [sheetOpen, setSheetOpen] = useState(false);
  const [panel, setPanel] = useState<"login" | "vouchers" | "calendar" | null>(null);

  function openDesk() {
    setSheetOpen(true);
  }

  return (
    <div id="top" className="min-h-dvh bg-paper text-ink">
      <SiteHeader onAvailability={openDesk} />

      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/images/hero-pittwater.jpg"
          alt="Aerial view of Pittwater with turquoise water, forested headlands and yachts at moorings"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-paper sm:text-7xl lg:text-8xl">
            Pittwater.
            <br />
            Unspoilt.
            <br />
            Yours for the day.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90 sm:text-xl">
            Charter, club sailing and training from Church Point — without owning a boat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#charter"
              className="flex h-12 items-center justify-center rounded-md bg-coral px-6 text-sm font-medium text-paper hover:bg-coral-deep"
            >
              Browse the fleet
            </a>
            <a
              href="#club"
              className="flex h-12 items-center justify-center rounded-md border border-paper/40 bg-ink/30 px-6 text-sm font-medium text-paper backdrop-blur-sm"
            >
              Join the club
            </a>
          </div>
          <p className="mt-8 text-sm text-paper/75">6 yachts & cats · Ferry Wharf · Since 1988</p>
        </div>
      </section>

      <AvailabilityBar value={availability} onChange={setAvailability} onSubmit={openDesk} />

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {TILES.map((tile) => (
          <a key={tile.id} href={`#${tile.id}`} className="group relative min-h-80 overflow-hidden rounded-lg">
            <img
              src={tile.image}
              alt={tile.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="relative flex h-full min-h-80 flex-col justify-end p-6 text-paper">
              <h2 className="font-display text-3xl font-medium">{tile.title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/85">{tile.copy}</p>
            </div>
          </a>
        ))}
      </section>

      <section id="charter" className="scroll-mt-24 bg-foam py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs tracking-[0.18em] text-ink-muted">The fleet</p>
          <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">Six boats. One wharf.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Published midweek day rates. Weekends and public holidays sit higher. The desk will say so before you pack a bag.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((boat) => (
              <article key={boat.id} className="overflow-hidden rounded-lg bg-paper shadow-soft">
                <img src={boat.image} alt={`${boat.name}, ${boat.model}`} className="aspect-[3/2] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs tracking-[0.16em] text-ink-muted">{boat.kind}</p>
                  <h3 className="mt-1 font-display text-2xl font-medium">{boat.name}</h3>
                  <p className="text-sm text-ink-soft">{boat.model}</p>
                  <p className="mt-4 text-lg text-ink">{boat.rate}</p>
                  <p className="mt-1 text-sm text-ink-muted">{boat.note}</p>
                  <button
                    type="button"
                    onClick={openDesk}
                    className="mt-5 h-11 w-full rounded-md border border-mist text-sm text-ink hover:border-ink"
                  >
                    Ask about {boat.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="club" className="scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.18em] text-ink-muted">Club</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
            We own the boats, you own the days.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {MEMBERSHIPS.map((tier) => (
              <article key={tier.name} className="rounded-lg border border-mist bg-paper p-7">
                <p className="text-sm text-coral">{tier.tag}</p>
                <h3 className="mt-2 font-display text-3xl font-medium">{tier.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{tier.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="learn" className="scroll-mt-24 bg-ink py-20 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.18em] text-gold">Learn</p>
            <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">
              Australian Sailing keelboat courses that feed Silver.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">
              Start on the water at Church Point. Finish with a membership that already knows your name.
            </p>
            <ul className="mt-8 space-y-5">
              {COURSES.map((course) => (
                <li key={course.name} className="border-t border-paper/15 pt-4">
                  <p className="font-display text-2xl">{course.name}</p>
                  <p className="mt-1 text-sm text-paper/70">{course.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/tile-learn.jpg"
            alt="Adult at the helm with an instructor on Pittwater"
            className="h-full min-h-80 w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <section id="race" className="scroll-mt-24 bg-water py-20 text-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs tracking-[0.18em] text-gold">Race</p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl font-medium sm:text-5xl">
            Leeward defending RMYC Monday twilight.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/80">
            Inshore races are free to members. Bring wet-weather kit and a quiet competitiveness.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {REGATTAS.map((name) => (
              <li key={name} className="rounded-md border border-paper/15 px-5 py-4 text-lg">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="holidays" className="scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="relative min-h-[28rem] overflow-hidden rounded-lg">
            <img
              src="/images/holidays-corfu.jpg"
              alt="Yacht in a turquoise Ionian cove near Corfu"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-7 text-paper">
              <p className="text-xs tracking-[0.18em] text-gold">Holidays</p>
              <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">Corfu, 10–20 June 2026</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-paper/85">
                A resort week that becomes an Ionian cruise. Same people, warmer water.
              </p>
              <button
                type="button"
                onClick={openDesk}
                className="mt-6 h-12 w-fit rounded-md bg-coral px-6 text-sm font-medium text-paper"
              >
                Ask about Corfu
              </button>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-foam">
            <img src="/images/powerboat.jpg" alt="Polycraft powerboat on Pittwater" className="aspect-[3/2] w-full object-cover" />
            <div className="p-6">
              <p className="text-xs tracking-[0.16em] text-ink-muted">Under power</p>
              <h3 className="mt-2 font-display text-3xl font-medium">Polycraft membership</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A centre-console for the days you want the bays without the sails. NSW licence required.
              </p>
              <button
                type="button"
                onClick={openDesk}
                className="mt-6 h-11 rounded-md border border-mist px-4 text-sm"
              >
                Enquire
              </button>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter onOpen={setPanel} />
      <EnquirySheet open={sheetOpen} onClose={() => setSheetOpen(false)} prefill={availability} />
      <FooterPanels panel={panel} onClose={() => setPanel(null)} />
    </div>
  );
}
