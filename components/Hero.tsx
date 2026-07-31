export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex items-center">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8 py-32">

        {/* Left Side */}
        <div>
          <span className="inline-block bg-cyan-500/10 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full text-sm mb-6">
            🚀 AI Innovation Starts Here
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Empower Your
            <span className="text-cyan-400"> Business </span>
            With AI
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-8">
            Solvify.ai helps businesses build intelligent applications
            using Generative AI, Machine Learning, Data Science,
            Automation, and Cloud Technologies.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="border border-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl transition"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">10+</h2>
              <p className="text-slate-400">AI Solutions</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">24/7</h2>
              <p className="text-slate-400">Support</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">100%</h2>
              <p className="text-slate-400">Commitment</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-9xl">
              🤖
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}