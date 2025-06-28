export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center">Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Anxiety & Stress Management</h3>
            <p className="mb-4">Learn techniques to manage anxiety and stress through personalized CBT and mindfulness strategies tailored to your needs.</p>
          </div>
          <img
            src="/images/anxiety.jpg"
            alt="Anxiety management"
            className="rounded-lg h-65 w-full object-cover mt-4"
          />
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Relationship Counseling</h3>
            <p className="mb-4">Work through challenges, improve communication, and build stronger relationships—available for both individuals and couples.</p>
          </div>
          <img
            src="/images/relationship.jpg"
            alt="Relationship counseling"
            className="rounded-lg h-65 w-full object-cover mt-4"
          />
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Trauma Recovery</h3>
            <p className="mb-4">Heal from past experiences in a safe, supportive environment using trauma-informed practices that restore a sense of self.</p>
          </div>
          <img
            src="/images/trauma.jpg"
            alt="Trauma recovery"
            className="rounded-lg h-65 w-full object-cover mt-4"
          />
        </div>
      </div>
    </section>
  );
}
