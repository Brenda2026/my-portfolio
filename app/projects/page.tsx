import Link from "next/link";
import { experiences, projects } from "./data";
import Image from "next/image";

function Card({
  icon,
  title,
  subtitle,
  summary,
  href,
}: {
  icon: string;
  title: string;
  subtitle: string;
  summary: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group h-full">
      <div className="bg-[#c8d8d4] rounded-2xl p-6 flex flex-col gap-4 h-full group-hover:bg-[#b8ccc8] transition-all duration-200 cursor-pointer group-hover:shadow-md">
        <div className="flex items-center gap-3">
          <Image
            src={icon}
            alt={title}
            width={160}
            height={160}
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-lg font-medium text-gray-700">{subtitle}</p>
          </div>
        </div>
        <p className="flex-1 space-y-6 text-gray-800 text-lg leading-relaxed">
          {summary}
        </p>
        <div className="flex justify-end">
          <span className="px-4 py-1.5 border border-gray-600 rounded text-sm text-gray-800 hover:bg-white hover:border-white transition-colors">
            More info
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#dce8e4] px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Experiences */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((e) => (
              <Card
                key={e.slug}
                icon={e.icon}
                title={e.company}
                subtitle={e.role}
                summary={e.summary}
                href={`/projects/experiences/${e.slug}`}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card
                key={p.slug}
                icon={p.icon}
                title={p.name}
                subtitle={p.tagline}
                summary={p.summary}
                href={`/projects/${p.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
