import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from "@/lib/content";

type Props = {
  onOpen: (panel: "login" | "vouchers" | "calendar") => void;
};

export function SiteFooter({ onOpen }: Props) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.08em]">
            ALL<span className="text-coral">SAIL</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            {ADDRESS}
            <br />
            <a href={`mailto:${EMAIL}`} className="hover:text-paper">
              {EMAIL}
            </a>
            <br />
            <a href={PHONE_HREF} className="hover:text-paper">
              {PHONE}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm">
          <button type="button" className="text-left text-paper/80 hover:text-paper" onClick={() => onOpen("login")}>
            Member login
          </button>
          <button type="button" className="text-left text-paper/80 hover:text-paper" onClick={() => onOpen("vouchers")}>
            Gift vouchers
          </button>
          <button type="button" className="text-left text-paper/80 hover:text-paper" onClick={() => onOpen("calendar")}>
            Calendar
          </button>
        </div>
        <p className="text-sm leading-relaxed text-paper/60 md:text-right">
          We own the boats.
          <br />
          You own the days.
        </p>
      </div>
    </footer>
  );
}
