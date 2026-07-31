import {
  Search,
  Database,
  BrainCircuit,
  FlaskConical,
  Cloud,
  Activity,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Search size={40} className="text-cyan-400" />,
      title: "Research",
      description: "Understand business requirements and identify the right AI solution.",
    },
    {
      icon: <Database size={40} className="text-cyan-400" />,
      title: "Data Preprocessing",
      description: "Clean, transform, and prepare datasets for model development.",
    },
    {
      icon: <BrainCircuit size={40} className="text-cyan-400" />,
      title: "Model Development",
      description: "Build Machine Learning and Generative AI models for your use case.",
    },
    {
      icon: <FlaskConical size={40} className="text-cyan-400" />,
      title: "Testing & Optimization",
      description: "Validate accuracy, optimize performance, and fine-tune models.",
    },
    {
      icon: <Cloud size={40} className="text-cyan-400" />,
      title: "Deployment",
      description: "Deploy AI solutions securely on cloud or on-premise infrastructure.",
    },
    {
      icon: <Activity size={40} className="text-cyan-400" />,
      title: "Monitoring & Support",
      description: "Continuously monitor model performance and provide ongoing support.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase font-semibold">
            Our Process
          </p>

          <h2 className="text-5xl font-bold mt-4">
            How We Build AI Solutions
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Our structured development process ensures every AI solution is
            reliable, scalable, and tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              {step.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {index + 1}. {step.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}