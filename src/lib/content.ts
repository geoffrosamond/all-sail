export const NAV = [
  { href: "#charter", label: "Charter" },
  { href: "#club", label: "Club" },
  { href: "#learn", label: "Learn" },
  { href: "#race", label: "Race" },
  { href: "#holidays", label: "Holidays" },
] as const;

export const PHONE = "02 9979 6266";
export const PHONE_HREF = "tel:+61299796266";
export const EMAIL = "info@allsail.com.au";
export const ADDRESS = "Ferry Wharf, Church Point NSW";

export const FLEET = [
  {
    id: "frog",
    name: "The FROG",
    model: "Beneteau Oceanis 39",
    rate: "from $1,300",
    note: "Midweek day rate",
    image: "/images/fleet-frog.jpg",
    kind: "Monohull",
  },
  {
    id: "dancing-star",
    name: "Dancing Star",
    model: "Bavaria Cruiser 40S",
    rate: "from $1,490",
    note: "Midweek day rate",
    image: "/images/fleet-dancing-star.jpg",
    kind: "Monohull",
  },
  {
    id: "leeward",
    name: "Leeward",
    model: "Beneteau First 40",
    rate: "from $1,490",
    note: "Midweek day rate · twilight racer",
    image: "/images/fleet-leeward.jpg",
    kind: "Racer",
  },
  {
    id: "impulso",
    name: "Impulso",
    model: "Lagoon 39",
    rate: "from $1,990",
    note: "Midweek day rate",
    image: "/images/fleet-impulso.jpg",
    kind: "Catamaran",
  },
  {
    id: "giddy-up",
    name: "Giddy Up",
    model: "Lightwave 38",
    rate: "from $1,740",
    note: "Midweek day rate",
    image: "/images/fleet-giddy-up.jpg",
    kind: "Catamaran",
  },
  {
    id: "tekin",
    name: "Tekin",
    model: "Seawind 1000",
    rate: "from $1,340",
    note: "Skippered parties from $1,890 for 4 hours",
    image: "/images/fleet-tekin.jpg",
    kind: "Catamaran",
  },
] as const;

export const TILES = [
  {
    id: "charter",
    title: "Charter a weekend",
    copy: "Friends on a cat trampoline, a quiet bay, and no one asking you to wash the boat.",
    image: "/images/tile-charter.jpg",
  },
  {
    id: "club",
    title: "Sail with the club",
    copy: "Twilight race crew on a First 40 — turn up, take a sheet, stay for the debrief.",
    image: "/images/tile-club.jpg",
  },
  {
    id: "learn",
    title: "Learn to sail",
    copy: "An adult at the helm with an instructor. Australian Sailing courses that feed Silver.",
    image: "/images/tile-learn.jpg",
  },
] as const;

export const MEMBERSHIPS = [
  {
    name: "Silver",
    tag: "Weekend crew",
    copy: "Year-round club sailing and racing. Crew is found. The boats are ready.",
  },
  {
    name: "Gold",
    tag: "24 private nights",
    copy: "Private use of FROG or Dancing Star, plus every Silver privilege.",
  },
  {
    name: "Platinum",
    tag: "12 metre fleet",
    copy: "24 nights across the 12m fleet, including Leeward and Giddy Up.",
  },
] as const;

export const COURSES = [
  { name: "Start Crewing", detail: "First days on a keelboat — lines, safety, language." },
  { name: "Start Helming", detail: "Take the wheel with an instructor beside you." },
  { name: "Start Skippering", detail: "Passage sense, anchoring, and the ticket to Silver." },
] as const;

export const REGATTAS = [
  "Broken Bay Island Series",
  "Pittwater Regatta",
  "Sydney Harbour Regatta",
  "Sail Port Stephens 2026",
] as const;

export const DAYS = [
  { id: "day", label: "Day" },
  { id: "weekend", label: "Weekend" },
  { id: "3", label: "3 days" },
  { id: "5", label: "5 days" },
  { id: "7", label: "7 days" },
] as const;

export const INTENTS = [
  { id: "skippered", label: "Skippered" },
  { id: "bareboat", label: "Bareboat" },
  { id: "power", label: "Under power" },
  { id: "club", label: "Club" },
] as const;

export const CALENDAR = [
  { when: "Mondays, dusk", what: "RMYC twilight — Leeward defending" },
  { when: "Weekends", what: "Club cruising and inshore races" },
  { when: "10–20 June 2026", what: "Corfu resort + Ionian cruise" },
  { when: "2026 season", what: "Broken Bay, Pittwater, Harbour, Port Stephens" },
] as const;
