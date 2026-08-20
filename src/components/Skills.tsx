import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: [
    // "Node.js",
    // "Express",
    "Supabase",
    "PostgreSQL",
    "REST APIs",
    "Authentication",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "npm",
    "Vercel",
  ],
  "Libraries & Concepts": [
    "React Hooks",
    "Context API",
    "Framer Motion",
    "Lucide React",
    "Responsive Design",
    "Component Architecture",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-zinc-950/50 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            My technical toolkit
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            Technologies and tools I use to design, build, test and deploy
            modern web applications.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-bold">
                {category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-zinc-300 transition hover:border-green-400/30 hover:text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}