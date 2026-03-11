import Image from "next/image";
import Link from "next/link";
import ProjectNav from "@/components/ProjectsNav";
import ImageModal from "@/components/ImageModal";
export default function SalesforcePage() {
  return (
    <main className="min-h-screen bg-[#dce8e4] px-8 md:px-16 lg:px-24 py-16 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="text-sm text-gray-600 hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Software Engineering Intern at Salesforce
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT column */}
          <div className="flex-1 space-y-8">
            {/* Meta */}
            <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2 text-gray-800 text-base">
              <p>
                <span className="font-semibold">Time frame:</span> June –
                September 2025
              </p>
              <p>
                <span className="font-semibold">Team:</span> Experience Sites
                Runtime
              </p>
              <p>
                <span className="font-semibold">Project(s):</span> AI-powered
                debugging tools
              </p>
              <p>
                <span className="font-semibold">Languages Used:</span>{" "}
                JavaScript, Python, PHP, Java
              </p>
            </div>

            {/* Key Takeaways — inside left column ✓ */}
            {/* Key Takeaways */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What I Delivered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  bold: "LLM-powered debugging agent",
                  rest: " that accelerated root-cause analysis and fix cycles for production issues.",
                },
                {
                  bold: "Custom MCP tool",
                  rest: " retrieving stack trace metadata, source files, and file ownership mappings automatically.",
                },
                {
                  bold: "Structured debugging reports",
                  rest: " outlining exception details, root causes, impacted files, and remediation strategies.",
                },
                {
                  bold: "~9% reduction in cycle time",
                  rest: " through auto-suggested code fixes in a review-ready format.",
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
            {/* Impact and Learnings */}
            <h2 className="text-2xl font-bold text-gray-900">
              Impact and What I Learned
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "LLM in Production",
                  body: "Learned how to design AI tools that integrate cleanly into real developer workflows rather than existing as standalone prototypes.",
                },
                {
                  title: "Working at Scale",
                  body: "Navigating a large codebase with multiple teams reinforced the importance of code ownership, documentation, and cross-team collaboration.",
                },
                {
                  title: "Measuring Impact",
                  body: "Framing engineering work in terms of measurable outcomes — not just features shipped — was a key shift in how I think about building software.",
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
          </div>{" "}
          {/* ← end of LEFT column */}
          {/* RIGHT column — photos */}
          <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
            <ImageModal
              src="/salesforce-1.jpg"
              alt="Photo 1"
              width={256}
              height={180}
              className="rounded-2xl object-cover w-full"
            />
            <ImageModal
              src="/salesforce-2.jpg"
              alt="Photo 2"
              width={256}
              height={180}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>{" "}
        {/* ← end of flex row */}
      </div>
      <ProjectNav current="/projects/experiences/salesforce" />
    </main>
  );
}
