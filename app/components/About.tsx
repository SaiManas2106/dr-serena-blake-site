export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 text-gray-800"
      style={{
        backgroundImage: `url('/images/paper-texture.png')`, // assuming you're now using local
        backgroundColor: '#f9f5f0',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/images/dr-serena.jpg"
          alt="Dr. Serena Blake"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border border-gray-300 shadow-sm"
        />
        <h2 className="text-3xl font-semibold mb-6">About Dr. Serena Blake</h2>
        <p className="text-lg leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
      </div>
    </section>
  );
}
