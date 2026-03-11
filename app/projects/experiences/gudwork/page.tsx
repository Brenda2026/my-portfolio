import Image from "next/image";
import Link from "next/link";
import ProjectNav from "@/components/ProjectsNav";

export default function GudworkPage() {
  return (
    <main className="min-h-screen bg-[#dce8e4] px-8 md:px-16 lg:px-24 py-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-14">
        <Link
          href="/projects"
          className="text-sm text-gray-600 hover:underline inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Software Engineering Intern at Gudwork Inc.
        </h1>

        {/* Meta + Tech Stack */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-[#c8d8d4] rounded-2xl p-6 space-y-2 text-gray-800 text-base flex-1">
            <p>
              <span className="font-semibold">Time frame:</span> May – August
              2024
            </p>
            <p>
              <span className="font-semibold">Team:</span> Engineering (Remote,
              Startup Environment)
            </p>
            <p>
              <span className="font-semibold">Project(s):</span> Backend
              infrastructure and API development
            </p>
          </div>
          <div className="bg-[#c8d8d4] rounded-2xl p-6 space-y-3">
            <p className="font-semibold text-gray-900">Tech Stack</p>
            <div className="flex gap-4 items-center">
              {[
                { src: "/logos/python.png", alt: "Python" },
                { src: "/logos/sql.png", alt: "SQL" },
                { src: "/logos/php.png", alt: "PHP" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-xs text-gray-600">{logo.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I Delivered */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">What I Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                bold: "Designed and managed relational database schemas",
                rest: " to ensure fast, reliable data access across the application.",
              },
              {
                bold: "Built scalable backend services in PHP",
                rest: ", contributing across multiple repositories in a production codebase.",
              },
              {
                bold: "Developed RESTful API endpoints",
                rest: " to enable consistent frontend-backend communication and structured error handling.",
              },
              {
                bold: "Improved system modularity and maintainability",
                rest: ", working directly under the CTO in a fast-paced startup environment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#c8d8d4] rounded-2xl p-5 text-sm text-gray-800 leading-relaxed"
              >
                <span className="font-semibold">{item.bold}</span>
                {item.rest}
              </div>
            ))}
          </div>
        </section>

        {/* Impact and What I Learned */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Impact and What I Learned
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Working at a early-stage startup meant wearing multiple hats, moving
            fast, and making architectural decisions with real consequences.
            This experience shaped how I think about backend systems and
            engineering in resource-constrained environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Startup Engineering",
                body: "Contributing directly to a production codebase under the CTO taught me how to write clean, maintainable code under real business pressure.",
              },
              {
                title: "Backend Fundamentals",
                body: "Designing schemas and building RESTful APIs deepened my understanding of data modeling, system reliability, and API contract design.",
              },
              {
                title: "Remote Collaboration",
                body: "Working remotely in a fast-paced environment reinforced the importance of clear communication, documentation, and async workflows.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ProjectNav current="/projects/experiences/gudwork" />
    </main>
  );
}
