import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-8"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-zinc-400">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Amedu
            <br />
            <span className="text-zinc-500">Believe.</span>
          </h1>

          <h2 className="mt-8 text-xl font-semibold text-zinc-200 sm:text-2xl">
            Software Developer • Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern, responsive and scalable web applications with
            React, Next.js, TypeScript and modern backend technologies.
          </p>

<div className="mt-10 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-green-400"
  >
    View My Work
    <ArrowUpRight
      size={18}
      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </a>

  <a
    href="/cv.pdf"
    download="Amedu-Believe-Abraham-CV.pdf"
    className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
  >
      <Download size={18} />
    Download CV
  </a>

  <a
    href="#contact"
    className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-green-400/40 hover:bg-white/5"
  >
    Contact Me
  </a>
</div>
          {/* <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-green-400/40 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div> */}

          {/* <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Eromamedu"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/believe-amedu-a3117442b/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              <Linkedin size={22} />
            </a>
          </div> */}

          <div className="mt-8 flex items-center gap-4">
  <a
    href="https://github.com/Eromamedu"
    target="_blank"
    rel="noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-500 transition hover:border-green-400/40 hover:text-green-400"
    aria-label="GitHub"
  >
    GH
  </a>

  <a
    href="https://www.linkedin.com/in/believe-amedu-a3117442b/"
    target="_blank"
    rel="noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-500 transition hover:border-green-400/40 hover:text-green-400"
    aria-label="LinkedIn"
  >
    in
  </a>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <div className="relative mx-auto h-[420px] w-[420px]">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-10 rounded-full border border-green-400/20"
            />

            <div className="absolute inset-20 flex items-center justify-center rounded-full border border-white/10 bg-zinc-950 shadow-2xl shadow-green-500/10">
              <div className="text-center">
                <div className="text-6xl font-black">{"< />"}</div>
                <p className="mt-4 text-sm text-zinc-500">
                  Building the web
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition hover:text-white"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}