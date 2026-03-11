import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#dce8e4] px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">About Me</h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Text */}
          <div className="flex-1 space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              I&apos;m a <strong>software engineer</strong> and a senior at{" "}
              <strong>Northwestern University</strong>, pursuing a major in{" "}
              <strong>Computer Science</strong>, a minor in{" "}
              <strong>Data Science</strong>, and the{" "}
              <strong>Segal Design Certificate</strong>. I enjoy working on
              problems at the intersection of engineering and design, where
              clarity, usability, and technical soundness all matter.
            </p>
            <p>
              Through coursework, internships, and personal projects, I&apos;ve
              worked on frontend applications, AI-assisted tools, and full-stack
              systems. I&apos;m especially interested in how thoughtful
              interfaces and well-structured code can make complex systems{" "}
              <strong>more accessible and intuitive</strong>. I&apos;m motivated
              by opportunities where I can continue learning, contribute
              meaningfully to a team, and build software that is reliable,
              accessible, and impactful.
            </p>

            <p>
              Outside of work, I enjoy <strong>knitting</strong>, trying out{" "}
              <strong>new recipes</strong>, watching captivating{" "}
              <strong>history</strong> documentaries, and occasionally getting
              lost in a good book.
            </p>
          </div>

          {/* Photo */}
          <div className="w-full md:w-72 lg:w-80 shrink-0">
            <Image
              src="/about.JPG"
              alt="Brenda Mutai"
              width={320}
              height={400}
              className="rounded-2xl object-cover object-top w-full shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
