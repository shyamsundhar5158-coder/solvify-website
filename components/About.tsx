export default function About() {
  return (
    <section id="about" className="scroll-mt-6 py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Solvify AI
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Solvify AI helps businesses transform their operations
            with powerful Artificial Intelligence and automation
            solutions.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            We build intelligent systems using Generative AI,
            Machine Learning, and Data Analytics to solve real-world
            business challenges.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to make AI simple, accessible, and
            impactful for organizations of all sizes.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>


        {/* Right Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-semibold mb-6">
            Why Choose Us?
          </h3>

          <ul className="space-y-4">

            <li className="flex gap-3">
              <span>✓</span>
              <span>
                Advanced AI & Generative AI solutions
              </span>
            </li>

            <li className="flex gap-3">
              <span>✓</span>
              <span>
                Business automation and intelligent workflows
              </span>
            </li>

            <li className="flex gap-3">
              <span>✓</span>
              <span>
                Data-driven decision making
              </span>
            </li>

            <li className="flex gap-3">
              <span>✓</span>
              <span>
                Scalable enterprise AI solutions
              </span>
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}
