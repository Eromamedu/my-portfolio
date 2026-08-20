import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  GraduationCap,
  ShoppingBag,
  CloudSun,
} from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    description:
      "A full-stack learning platform with authentication, student dashboards, courses, lessons, progress tracking, profiles and a responsive modern interface.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "PostgreSQL",
    ],
    icon: GraduationCap,
    featured: true,
    live: "https://lms-dy95uoyj8-erom.vercel.app/auth/login",
    github: "https://github.com/Eromamedu",
  },
  {
    title: "E-Commerce Application",
    description:
      "A Jumia-inspired e-commerce experience focused on responsive layouts, product interfaces, navigation and modern frontend architecture.",
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    icon: ShoppingBag,
    live: "#",
    github: "https://github.com/Eromamedu",
  },
  {
    title: "Weather Application",
    description:
      "A weather application that consumes an external API to display weather information through a clean and responsive interface.",
    tech: ["React", "JavaScript", "API Integration", "CSS"],
    icon: CloudSun,
    live: "#",
    github: "https://github.com/Eromamedu",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Projects I've built
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            A selection of applications demonstrating my frontend,
            full-stack and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-2 ${
                  project.featured
                    ? "border-green-400/20 bg-gradient-to-br from-green-400/[0.08] to-white/[0.02] lg:col-span-2"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-400/5 blur-3xl transition group-hover:bg-green-400/10" />

                <div className="relative">

                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl border border-white/10 bg-black p-4">
                      <Icon className="text-green-400" size={28} />
                    </div>

                    {project.featured && (
                      <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-400">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="mt-8 text-2xl font-black sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-black px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30"
                    >
                      <FaGithub size={16} />
                      {/* <span className="text-xs font-bold">GH</span> */}
                      GitHub
                    </a>
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}