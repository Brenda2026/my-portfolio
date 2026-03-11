export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/hero_image.PNG')",
          backgroundPosition: "center 50%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-start px-4 pb-72">
        <div className="bg-[#c8d8d4] rounded-2xl p-10 flex flex-col gap-4 shadow-lg w-3/5 max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Hey there, I&apos;m <span className="text-[#4a6b5c]">Brenda</span>.
          </h1>
          <p className="text-2xl font-semibold text-gray-900">
            An engineer, designer, problem solver.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I build user-centered products at the intersection of design and
            technology.
          </p>
        </div>
      </div>
    </main>
  );
}
