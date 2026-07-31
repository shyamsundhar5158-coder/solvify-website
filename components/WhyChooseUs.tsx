import {
  ShieldCheck,
  Zap,
  Users,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap size={42} className="text-cyan-400" />,
      title: "AI-First Innovation",
      description:
        "We leverage the latest Generative AI and Machine Learning technologies to develop intelligent, future-ready solutions that give your business a competitive advantage.",
    },
    {
      icon: <ShieldCheck size={42} className="text-cyan-400" />,
      title: "Enterprise-Grade Quality",
      description:
        "Every solution is built with a strong focus on security, scalability, performance, and maintainability, ensuring it is ready for real-world business environments.",
    },
    {
      icon: <Users size={42} className="text-cyan-400" />,
      title: "Business-Centric Approach",
      description:
        "We don't just build AI models—we solve business challenges. Every solution is carefully aligned with your goals to maximize productivity, efficiency, and return on investment.",
    },
    {
      icon: <Headphones size={42} className="text-cyan-400" />,
      title: "Long-Term Partnership",
      description:
        "From strategy and development to deployment, monitoring, and continuous improvement, we stay with you throughout your AI transformation journey.",
    },
  ];

  return (
    <section
      id="whychooseus"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase font-semibold tracking-widest">
            Why Solvify.ai
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Businesses Choose Solvify.ai
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            At Solvify.ai, we combine cutting-edge Artificial Intelligence,
            Machine Learning, and Generative AI expertise with a deep understanding
            of business challenges. Our mission is to deliver intelligent,
            scalable, and reliable AI solutions that accelerate innovation,
            improve operational efficiency, and create measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              {reason.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {reason.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}