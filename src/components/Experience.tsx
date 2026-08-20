import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/5 bg-zinc-950/50 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Background
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Experience & Education
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <BriefcaseBusiness className="text-green-400" size={30} />

            <h3 className="mt-6 text-2xl font-bold">
              Software Development
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Developing practical web applications while continuously
              strengthening frontend, backend and full-stack engineering
              capabilities.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-500">
              <li>• Building responsive React applications</li>
              <li>• Developing full-stack applications with Next.js</li>
              <li>• Working with APIs and databases</li>
              <li>• Implementing authentication and application state</li>
              <li>• Deploying applications with Git and Vercel</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <GraduationCap className="text-green-400" size={30} />

            <h3 className="mt-6 text-2xl font-bold">
              Education
            </h3>

            <p className="mt-4 text-lg font-semibold">
              BSc Zoology
            </p>

            <p className="mt-2 text-zinc-500">
              University of Benin
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Developed strong analytical, research, problem-solving and
              communication skills through academic study and professional
              teaching experience, while transitioning into software
              development.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}