import Image from "next/image";
import Link from "next/link";

export default function TNEDashboardPage() {
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
          TNE.ai Dashboard — AI Model Monitoring Platform
        </h1>

        {/* Meta card */}
        <div className="bg-[#c8d8d4] rounded-2xl p-6 space-y-2 text-gray-800 text-base">
          <p>
            <span className="font-semibold">Time frame:</span> May 2025 – June
            2025
          </p>
          <p>
            <span className="font-semibold">Course:</span> CS 394 Agile Software
            Engineering
          </p>
          <p>
            <span className="font-semibold">Collaborators:</span> Computer
            Science Major (x5)
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-800 leading-relaxed">
            TNE.ai is a web application designed for ML operations teams to
            monitor AI model performance across deployments. The platform
            transforms low-level logs and metrics into actionable insights
            through centralized visualization and analysis.
          </p>
          <figure className="space-y-2 pt-2">
            <div className="relative h-80">
              <Image
                src="/tne/product-box.png"
                alt="TNE.ai product overview"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              TNE.ai product overview — monitoring AI model performance,
              diagnosing errors, and optimizing business-specific needs
            </figcaption>
          </figure>
        </section>

        {/* Understanding the Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Understanding the Problem
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Modern AI engineers rely on multiple disconnected tools to monitor
            latency, system errors, and engagement metrics. When performance
            issues arise, identifying root causes often requires manually
            searching through logs across systems — a slow and fragmented
            process.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Our goal was to design a centralized dashboard that transforms
            scattered low-level metrics into actionable insights, allowing teams
            to diagnose issues quickly and shift from reactive troubleshooting
            to proactive monitoring.
          </p>
          <figure className="space-y-2">
            <div className="relative h-96">
              <Image
                src="/tne/four-panel.png"
                alt="TNE.ai four panel storyboard"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              From fragmented log monitoring to a unified, proactive dashboard —
              the core problem TNE.ai was built to solve
            </figcaption>
          </figure>
        </section>

        {/* From Concept to Product */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Agile Development Across Teams
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Development occurred across multiple teams working simultaneously
            toward a shared product vision. Rotating product owners coordinated
            priorities each week, ensuring alignment between engineering
            progress and client expectations.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Weekly client meetings and tribe-wide Slack communication allowed
            rapid feedback cycles. Agile tracking through burnup charts and
            shared backlogs helped balance feature scope, manage dependencies,
            and maintain steady progress toward demo milestones — enabling
            frequent integration while minimizing merge conflicts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-80">
                <Image
                  src="/tne/multi-team.png"
                  alt="Multi-team development structure"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                How the team structured client communication, product ownership,
                and cross-team coordination
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <div className="relative h-80">
                <Image
                  src="/tne/project-status.png"
                  alt="Project status artifacts"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Release burnup chart and backlog tracking story points completed
                across two iterations
              </figcaption>
            </figure>
          </div>
        </section>
        {/* System Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            System Architecture and Implementation
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The platform processes uploaded JSON log data through a structured
            three-phase pipeline designed to convert raw system activity into
            interpretable performance metrics.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Log data is first parsed and standardized into structured query
            records. The system then aggregates performance indicators such as
            latency distributions, failure rates, and response patterns.
            Finally, the dashboard visualizes trends through interactive charts
            that allow engineers to drill into model behavior across deployments
            — ensuring complex operational data can be interpreted quickly
            without manual log inspection.
          </p>
          <figure className="space-y-2 pt-2">
            <div className="relative h-96">
              <Image
                src="/tne/dashboard-overview.png"
                alt="TNE.ai dashboard overview"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              Dashboard overview showing parsed file metadata, query statistics,
              response times, and flagged warnings from uploaded JSON logs
            </figcaption>
          </figure>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Outcome</h2>
          <p className="text-gray-800 leading-relaxed">
            The final product delivered a unified monitoring experience capable
            of visualizing performance trends across AI systems while enforcing
            standardized data ingestion through structured JSON uploads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Improved navigation and dashboard readability",
              "Standardized data formats for consistent analysis",
              "Stronger collaboration workflows across distributed teams",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#c8d8d4] rounded-2xl p-5 text-sm text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
          <figure className="space-y-2 pt-2">
            <div className="relative h-80">
              <Image
                src="/tne/final-dashboard.png"
                alt="TNE.ai final dashboard"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              Final TNE.ai dashboard — JSON upload entry point for AI model
              performance monitoring
            </figcaption>
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Key Learnings</h2>
          <p className="text-gray-800 leading-relaxed">
            The project emphasized the importance of communication, rapid
            iteration, and balancing technical ambition with delivery timelines
            in a multi-team environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Communication",
                body: "Frequent Slack updates and client meetings kept distributed teams aligned and reduced integration conflicts.",
              },
              {
                title: "Scoping Tradeoffs",
                body: "Dropping LLM-generated recommendations allowed the team to focus on delivering a reliable, polished core product.",
              },
              {
                title: "Iteration Speed",
                body: "Rapid feedback cycles and shared backlogs helped balance feature scope with demo milestones.",
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
          <figure className="space-y-2 pt-2">
            <div className="relative h-80">
              <Image
                src="/tne/final-tribe-slice.png"
                alt="Final tribe slice"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              Final tribe slice showing completed focuses, dropped stories, and
              integration decisions
            </figcaption>
          </figure>
        </section>
      </div>
    </main>
  );
}
