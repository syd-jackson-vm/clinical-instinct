import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Clinical Instinct — GP-Led Clinical Governance Education for Aged Care",
  description:
    "A 12-month clinical reasoning program for residential aged care staff. Teaching how to think, not just what to do.",
  openGraph: {
    title: "Clinical Instinct",
    description: "GP-led clinical governance education for residential aged care.",
    url: "https://clinicalinstinct.com.au",
    siteName: "Clinical Instinct",
    images: [
      { url: "/og-image.png", width: 1200, height: 630 }
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-center px-6 text-[#1a1a1a]">
      <section className="max-w-2xl text-center">
        {/* CI Monogram / Wordmark */}
        <h1 className="font-serif text-6xl mb-6 tracking-wide font-bold">Clinical Instinct</h1>
        {/* Headline */}
        <h2 className="font-serif text-2xl mb-4 tracking-wider uppercase font-semibold">
          Teaching aged care staff how to think — not just what to do.
        </h2>
        {/* One-liner */}
        <p className="mb-8 text-base font-light">GP-led clinical governance education for residential aged care.</p>
        {/* Email Capture Form */}
        <EmailCapture />
        {/* Footer */}
        <footer className="mt-16 text-sm font-light text-[#3d4a3e]">
          Dr Vasilios (Billy) Stoupas | FRACGP | © 2026 Clinical Instinct
        </footer>
      </section>
    </main>
  );
}

function EmailCapture() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        alert(`Thanks for signing up: ${email}`);
      }}
      className="flex justify-center gap-4 flex-wrap"
      aria-label="Email capture form"
    >
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="p-3 rounded border border-gray-400 min-w-[280px]"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded bg-[#3d4a3e] text-white uppercase font-semibold"
      >
        Be the first to know
      </button>
    </form>
  );
}
