import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectNav from "@/components/ProjectsNav";
import ImageModal from "@/components/ImageModal";
export default function LaTeXOCRPage() {
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
          LaTeX OCR + Renderer Tool
        </h1>

        {/* Meta card */}
        <div className="bg-[#c8d8d4] rounded-2xl p-6 space-y-2 text-gray-800 text-base">
          <p>
            <span className="font-semibold">Time frame:</span> September 2025 –
            December 2025
          </p>
          <p>
            <span className="font-semibold">Course:</span> CS 396 Introduction
            to Web Development
          </p>
          <p>
            <span className="font-semibold">Collaborators:</span> Computer
            Science Major (x2)
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-800 leading-relaxed">
            Students and researchers often struggle to convert handwritten
            mathematical notes into usable digital formats. Existing OCR tools
            frequently fail with complex equations or produce output that
            requires extensive manual cleanup. Our team designed and built a web
            application that converts uploaded PDFs into clean LaTeX code using
            LLM-powered OCR, allowing users to preview compiled documents and
            download production-ready files.
          </p>
          <figure className="space-y-2 pt-2">
            <div className="relative h-80">
              <ImageModal
                src="/latex/overview.png"
                alt="Math Notes to LaTeX upload interface"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              The upload interface — users drop an image of handwritten math and
              receive clean LaTeX code with a rendered preview
            </figcaption>
          </figure>
        </section>

        {/* The Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">The Problem</h2>
          <p className="text-gray-800 leading-relaxed">
            Mathematics workflows remain heavily manual. Students and
            researchers often write equations by hand or scan lecture notes, but
            converting them into LaTeX for assignments or publications requires
            retyping entire documents. Traditional OCR struggles with
            mathematical notation, leading to formatting errors and lost
            structure. Our goal was to design a workflow that reduced friction
            between handwritten math and digital publishing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
              <p className="font-semibold text-gray-900">Without LaTeX OCR</p>
              <ul className="space-y-1 text-sm text-gray-800">
                {[
                  "Manually retyping equations",
                  "Formatting errors from standard OCR",
                  "Hours lost on document cleanup",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
              <p className="font-semibold text-gray-900">With LaTeX OCR</p>
              <ul className="space-y-1 text-sm text-gray-800">
                {[
                  "Upload and convert in seconds",
                  "Accurate mathematical notation",
                  "Download production-ready .tex or .pdf",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Designing the User Workflow */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Designing the User Workflow
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We focused on creating a simple, single-screen workflow that
            minimized cognitive load. Instead of multiple navigation steps,
            users interact with one unified interface containing:
          </p>
          <div className="bg-[#c8d8d4] rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Upload panel",
              "Conversion feedback",
              "LaTeX output",
              "PDF preview",
            ].map((item, i) => (
              <div
                key={i}
                className="text-sm text-gray-800 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-800 leading-relaxed">
            The design prioritizes transparency during processing while allowing
            users to quickly copy or download results. The interface
            communicates system progress through clear states — uploading,
            processing, and completed conversion — reducing uncertainty during
            AI processing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/latex/workflow-1.png"
                  alt="Upload and LaTeX output panel"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Unified interface showing the upload panel and LaTeX output side
                by side
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/latex/workflow-2.png"
                  alt="Converting state"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Processing state communicating conversion progress to reduce
                user uncertainty
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Engineering the Conversion Pipeline */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Engineering the Conversion Pipeline
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The application combines multiple external services into a single
            workflow that transforms a static document into structured LaTeX
            output, deployed via Firebase with optional storage of user
            conversions.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 pt-2">
            {[
              {
                step: "1",
                label: "Upload",
                body: "User uploads a PDF or scanned document through the web interface",
              },
              {
                step: "2",
                label: "OCR",
                body: "Document is sent to an LLM API for mathematical OCR and LaTeX generation",
              },
              {
                step: "3",
                label: "Compile",
                body: "Generated LaTeX is optionally compiled by an external service into a previewable PDF",
              },
              {
                step: "4",
                label: "Download",
                body: "Results are returned to the client for copying or downloading",
              },
            ].map((item, i, arr) => (
              <React.Fragment key={item.step}>
                <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2 flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {item.body}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gray-400 text-2xl shrink-0 rotate-90 md:rotate-0">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <figure className="space-y-2 pt-2">
            <div className="relative h-80">
              <ImageModal
                src="/latex/pipeline-2.png"
                alt="LaTeX output result"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              Generated LaTeX code displayed in the output panel — the end
              result of the multi-stage conversion pipeline
            </figcaption>
          </figure>
        </section>

        {/* Iteration and Engineering Tradeoffs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Iteration and Engineering Decisions
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Early design discussions explored expanding the product beyond OCR
            conversion. The team prioritized a reliable core conversion workflow
            first, then incrementally added features as time allowed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
              <p className="font-semibold text-gray-900">Core Focus First</p>
              <ul className="space-y-1 text-sm text-gray-800">
                {[
                  "Upload reliability",
                  "Output formatting accuracy",
                  "Clear conversion status feedback",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
              <p className="font-semibold text-gray-900">Added Once Stable</p>
              <ul className="space-y-1 text-sm text-gray-800">
                {["PDF summarization", "Video transcription"].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Final Product */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Final Product</h2>
          <p className="text-gray-800 leading-relaxed">
            The final application enables users to convert handwritten or
            scanned math into editable LaTeX with minimal effort, with
            additional tools for document summarization and video transcription
            added once the core workflow was stable.
          </p>
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
            Users can:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Upload documents and math notes",
              "View generated LaTeX code and preview compiled output",
              "Download .tex or .pdf outputs",
              "Generate AI summaries of PDFs and Word documents",
              "Transcribe and summarize video content",
              "Ask questions about uploaded file content",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#c8d8d4] rounded-2xl p-4 text-sm text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/latex/final-2.png"
                  alt="Math Notes to LaTeX interface"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Core LaTeX conversion tool — upload handwritten math notes and
                receive clean, downloadable LaTeX code
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/latex/final-1.png"
                  alt="Document and video summarizer"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Document and video summarizer — added once the core workflow was
                stable, supporting PDF, DOCX, and video formats
              </figcaption>
            </figure>
          </div>
          <p className="text-gray-800 leading-relaxed">
            The result is a streamlined workflow bridging handwritten
            mathematics and professional publishing tools, expanded to support
            broader academic document workflows.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Key Takeaways</h2>
          <p className="text-gray-800 leading-relaxed">
            This project strengthened my understanding of multimodal AI
            pipelines and the challenges of translating unstructured visual
            input into structured technical output. Balancing OCR accuracy with
            responsive user experience required close collaboration between
            system design and frontend development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: "Multimodal AI Pipelines",
                body: "Learned how to connect image input, LLM processing, and structured output into a single cohesive workflow across multiple external services.",
              },
              {
                title: "Iterative Scoping",
                body: "Delivering a reliable core product first and expanding features incrementally kept quality high while still meeting broader project goals.",
              },
              {
                title: "UX and AI Transparency",
                body: "Communicating system state clearly — uploading, processing, done — was as important as the accuracy of the output itself in reducing user uncertainty.",
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
      <ProjectNav current="/projects/latex-ocr" />
    </main>
  );
}
