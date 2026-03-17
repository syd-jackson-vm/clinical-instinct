'use client';

export default function EmailCapture() {
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
