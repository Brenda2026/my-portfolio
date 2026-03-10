import { projects } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#dce8e4] px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="text-sm text-gray-600 hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{project.icon}</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{project.name}</h1>
            <p className="text-gray-600">
              {project.tagline} · {project.date}
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-[#c8d8d4] rounded-full text-sm text-gray-800"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
