import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-16"
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-400/10 blur-[100px]" />

          <div className="relative">
            <Mail className="mx-auto text-green-400" size={32} />

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Let's Connect
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Have a project
              <br />
              <span className="text-zinc-500">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-400">
              I'm open to software development opportunities,
              collaborations and interesting projects.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="mailto:Amedubelieve@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Send Me an Email
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/believe-amedu-a3117442b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-green-400/30"
              >
                <FaLinkedin size={18} />
                {/* <span className="text-xs font-bold">in</span> */}
                LinkedIn
              </a>

              <a
                href="https://github.com/Eromamedu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-green-400/30"
              >
                <FaGithub size={18} />
                {/* <span className="text-xs font-bold">GH</span> */}
                GitHub
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}