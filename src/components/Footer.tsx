export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">

        <p>
          © {new Date().getFullYear()} Amedu Believe. All rights reserved.
        </p>

        <p>
          Designed & built with React.
        </p>

      </div>
    </footer>
  );
}