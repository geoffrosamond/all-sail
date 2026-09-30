const KEY = "allsail-enquiries";

export type Enquiry = {
  name: string;
  email: string;
  mobile: string;
  intent: string;
  notes: string;
  date: string;
  days: string;
  style: string;
  guests: string;
  createdAt: string;
};

export function saveEnquiry(entry: Enquiry) {
  const existing = listEnquiries();
  localStorage.setItem(KEY, JSON.stringify([entry, ...existing].slice(0, 20)));
}

export function listEnquiries(): Enquiry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Enquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
