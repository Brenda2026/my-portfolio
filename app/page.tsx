export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/hero_image.PNG')",
          backgroundPosition: "center 50%", // tweak the % until it looks right
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#c5d3d8]/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-32 text-gray-900">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Hey there, I’m <span className="text-[#4a6b5c]">Brenda</span>.
        </h1>

        <p className="mt-12 text-3xl sm:text-4xl font-semibold">
          An engineer, designer, problem solver.
        </p>

        <p className="mt-8 text-xl sm:text-2xl max-w-3xl text-gray-900">
          I build user-centered products at the intersection of design and
          technology.
        </p>
      </div>
    </main>
  );
}
