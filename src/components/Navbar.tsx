import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        <a
          href="#home"
          className="text-xl font-black tracking-tight"
        >
          <span className="text-white">AB</span>
          <span className="text-green-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Eromamedu"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:border-green-400/30 hover:text-green-400"
          >
            <FaGithub size={18} />
            {/* <span className="text-xs font-bold">GH</span> */}
          </a>

          <a
            href="https://www.linkedin.com/in/believe-amedu-a3117442b/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:border-green-400/30 hover:text-green-400"
          >
            {/* <span className="text-xs font-bold">in</span> */}
            <FaLinkedin size={18} />
          </a>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-zinc-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 transition hover:text-green-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}