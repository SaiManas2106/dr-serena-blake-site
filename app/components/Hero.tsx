export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white text-center">
      {/* ✅ Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-1]" />

      {/* ✅ Content */}
      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Compassionate Psychological Care for Growth and Healing
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Supporting your journey with empathy, insight, and mindfulness
        </h2>
        <a
          href="#contact"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
}
