import Link from "next/link";
import ProjectNav from "@/components/ProjectsNav";
import ImageModal from "@/components/ImageModal";

export default function PowderPrepPage() {
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
          PowderPrep: Real-Time Gear Recommendation System for Ski Travel
        </h1>

        {/* Meta card */}
        <div className="bg-[#c8d8d4] rounded-2xl p-6 space-y-2 text-gray-800 text-base">
          <p>
            <span className="font-semibold">Time frame:</span> April 2025 – May
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
            PowderPrep is a mobile-first web application designed to help skiers
            and snowboarders prepare for trips by generating personalized
            packing recommendations based on real-time mountain weather
            conditions and a user’s existing gear inventory.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Developed as part of a multidisciplinary design studio, the project
            explored how environmental data, personal ownership constraints, and
            trip context could be translated into actionable decisions through
            software.
          </p>
          <figure className="space-y-2">
            <div className="relative h-72">
              <ImageModal
                src="/powderprep/final-1.png"
                alt="PowderPrep home screen"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center">
              Home screen showing recently viewed resorts and trip planning
              entry point
            </figcaption>
          </figure>
        </section>

        {/*MY ROLE*/}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">My Role</h2>
          <div className="bg-[#c8d8d4] rounded-2xl p-5 space-y-2">
            <p className="text-gray-800 leading-relaxed">
              Software Engineering + System Design
            </p>
            <ul className="list-disc list-inside text-gray-800">
              <li>Developed wardrobe inventory workflows</li>
              <li>Integrated real-time resort weather APIs</li>
              <li>Implemented rule-based packing report generation</li>
              <li>Supported usability testing and iteration cycles</li>
            </ul>
          </div>
        </section>

        {/* Understanding the User Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Understanding the User Problem
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We began by modeling a typical college skier preparing for a trip
            under uncertainty. Early storyboarding sessions revealed that
            existing packing lists failed to account for two key realities:
          </p>
          <ul className="list-disc list-inside text-gray-800">
            <li>
              Dynamic weather conditions that could change rapidly and
              unpredictably.
            </li>
            <li>
              Personal gear inventories that varied widely in quality and warmth
              levels.
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            This reframed the project as an engineering challenge: translating
            environmental data into structured packing decisions tailored to
            individual users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <ImageModal
                src="/powderprep/storyboard-1.png"
                alt="User storyboard 1"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
              <figcaption className="text-xs text-gray-500 text-center">
                Early product framing connected real-time weather data with
                personalized gear recommendations.
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <ImageModal
                src="/powderprep/storyboard-2.png"
                alt="User storyboard 2"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
              <figcaption className="text-xs text-gray-500 text-center">
                Storyboarding helped model a realistic packing scenario,
                highlighting risks such as overpacking, missing essentials, and
                airline baggage costs.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Early Prototype */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Early Prototype</h2>
          <p className="text-gray-800 leading-relaxed">
            Our first working prototype focused on validating whether resort
            weather data and wardrobe inventories could be combined into a
            functioning recommendation workflow. Users could:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Search ski resorts",
              "View weather conditions",
              "Manage a simplified wardrobe",
              "Generate a rule-based packing list",
            ].map((task, i) => (
              <div key={i} className="bg-[#c8d8d4] rounded-2xl p-4 text-center">
                <p className="text-sm text-gray-800">{task}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-800 leading-relaxed">
            While technically functional, recommendations remained generic and
            navigation workflows were unclear during early evaluations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <ImageModal
                src="/powderprep/early-prototype.png"
                alt="Demo script"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
              <figcaption className="text-xs text-gray-500 text-center">
                Demo script outlining early prototype features and user roles
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/powderprep/early-prototype-1.png"
                  alt="Early prototype UI"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Early prototype showing resort search, wardrobe panel, and
                weather-based gear checklist
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Engineering Development and Iteration
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Following early testing, the team shifted toward a data-driven
            recommendation system capable of adapting to both environmental
            conditions and user-owned gear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: "Real-Time Weather Integration",
                body: "Integrated resort snowfall forecasts, wind chill, and temperature ranges so recommendations reflect actual slope conditions.",
              },
              {
                title: "Wardrobe Personalization",
                body: "Redesigned the wardrobe system to log owned gear by layering category and warmth level, with recommendations adjusting dynamically to inventory.",
              },
              {
                title: "Interface Redesign",
                body: "Simplified navigation with a persistent nav bar connecting search, wardrobe, and packing workflows into a single cohesive flow.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/powderprep/iteration.png"
                  alt="Demo script"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Agile backlog tracking progress achieved, work in progress, and
                future demo items
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/powderprep/iteration-2.png"
                  alt="Early prototype UI"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Hourly and 5-day weather forecasts powering real-time gear
                recommendations
              </figcaption>
            </figure>
          </div>
        </section>
        {/* User Testing and Validation */}

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            User Testing and Validation
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We conducted structured testing sessions using realistic trip
            preparation scenarios. Pre- and post-test surveys captured
            confidence levels and perceived usefulness, with feedback directly
            informing interface refinements and report presentation.
          </p>

          <p className="text-sm font-semibold text-gray-600">
            Participants were asked to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Search for a ski resort",
              "Edit wardrobe inventory",
              "Generate a packing report",
              "Review recommendations",
            ].map((task, i) => (
              <div key={i} className="bg-[#c8d8d4] rounded-2xl p-4 text-center">
                <p className="text-sm text-gray-800">{task}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-sm">
            Key finding: users valued personalized recommendations but struggled
            with early navigation flows and checklist clarity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/powderprep/task-scenario.png"
                  alt="User testing task scenario"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Task scenario given to participants during structured usability
                testing
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <div className="relative h-80">
                <ImageModal
                  src="/powderprep/pre-test-survey.png"
                  alt="Pre-test survey questions"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Pre-test survey capturing baseline winter sports experience and
                packing habits
              </figcaption>
            </figure>
          </div>
        </section>
        {/* Final System */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Final System</h2>
          <p className="text-gray-800 leading-relaxed">
            The final system combined real-time resort conditions with
            wardrobe-aware recommendations to support confident trip
            preparation. The application reduced uncertainty by helping users
            pack efficiently while avoiding unnecessary baggage costs.
          </p>
          <p className="text-sm font-semibold text-gray-600">Users could:</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Search resorts by location",
              "Manage owned gear",
              "Generate customized packing reports",
              "Receive contextual recommendations based on forecast",
            ].map((item, i) => (
              <div key={i} className="bg-[#c8d8d4] rounded-2xl p-4 text-center">
                <p className="text-sm text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="space-y-2">
              <div className="relative h-72">
                <ImageModal
                  src="/powderprep/final-1.png"
                  alt="PowderPrep home screen"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Home screen showing recently viewed resorts and trip planning
                entry point
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <div className="relative h-72">
                <ImageModal
                  src="/powderprep/final-2.png"
                  alt="PowderPrep wardrobe screen"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <figcaption className="text-xs text-gray-500 text-center">
                Wardrobe screen for adding gear by category and warmth level,
                with packing report generation
              </figcaption>
            </figure>
          </div>
        </section>

        {/* What This Build Taught Me */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Impact and Key Learnings
          </h2>
          <p className="text-gray-800 leading-relaxed">
            PowderPrep demonstrated how structured environmental data can
            support everyday decision-making through software design. The
            project strengthened my experience building systems that integrate
            external data sources, domain constraints, and user-centered
            workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: "Engineering Feasibility",
                body: "Balancing technical constraints with what users could intuitively understand and act on.",
              },
              {
                title: "Data Translation",
                body: "Turning complex weather and inventory data into clear, personalized recommendations.",
              },
              {
                title: "Iterative Development",
                body: "Rapidly refining the product through structured testing feedback across multiple demo cycles.",
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
      <ProjectNav current="/projects/powderprep" />
    </main>
  );
}
