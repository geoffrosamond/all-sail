import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/brochure")({ component: Brochure });

const PDF = "/brochure/star-flyer-sicily-greece-2027.pdf";

function Brochure() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#e6e1d6] text-[#1a3340]">
      <div className="sticky top-0 z-30 border-b border-ink/10 bg-[#f4f1ea]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="text-sm text-[#4d616b]">
            Allsail
          </Link>
          <a href={PDF} download className="h-11 rounded-md bg-[#c45a3c] px-4 text-sm font-medium leading-[2.75rem] text-white">
            Download PDF
          </a>
        </div>
      </div>
      <iframe title="Sicily and Greece 2027 brochure" src={PDF} className="min-h-0 w-full flex-1" />
    </div>
  );
}
