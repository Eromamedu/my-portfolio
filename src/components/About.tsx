import { motion } from "framer-motion";
import { Code2, Layers3, Rocket, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Building responsive and interactive interfaces with React, TypeScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    text: "Working with databases, authentication, APIs and backend services.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Applications",
    text: "Connecting polished frontend experiences with reliable backend systems.",
  },
  {
    icon: Rocket,
    title: "Product Mindset",
    text: "Focused on creating useful, scalable and user-friendly digital products.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            I don't just write code.
            <span className="text-zinc-500">
              {" "}
              I build experiences.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I'm a software developer passionate about creating modern web
            applications that combine strong engineering with clean,
            intuitive user experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            My development journey has taken me from building smaller
            JavaScript applications to developing full-stack platforms using
            React, Next.js, TypeScript, Tailwind CSS, Supabase and PostgreSQL.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-green-400/20"
              >
                <Icon className="text-green-400" size={28} />

                <h3 className="mt-6 font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}