import {
  Search,
  Database,
  BrainCircuit,
  FlaskConical,
  Activity,
  Settings2,
  Cloud,
  Plug,
  Code2,
  FileText,
} from "lucide-react";

export default function Technologies() {
  const services = [
    {
      icon: <Search size={45} className="text-cyan-400" />,
      title: "AI Research",
      description:
        "Research and evaluate the best AI, ML, and Generative AI approaches for your business problems.",
    },
    {
      icon: <Database size={45} className="text-cyan-400" />,
      title: "Data Preprocessing",
      description:
        "Clean, transform, validate, and prepare data for high-quality AI and Machine Learning models.",
    },
    {
      icon: <BrainCircuit size={45} className="text-cyan-400" />,
      title: "Model Creation",
      description:
        "Design and build Machine Learning and Generative AI models tailored to your business needs.",
    },
    {
      icon: <FlaskConical size={45} className="text-cyan-400" />,
      title: "Model Testing & Optimization",
      description:
        "Evaluate model accuracy, optimize performance, and ensure production-ready quality.",
    },
    {
      icon: <Activity size={45} className="text-cyan-400" />,
      title: "Performance Monitoring",
      description:
        "Continuously monitor deployed models for accuracy, reliability, and performance.",
    },
    {
      icon: <Settings2 size={45} className="text-cyan-400" />,
      title: "Model Fine-Tuning",
      description:
        "Improve existing AI models using custom datasets and advanced fine-tuning techniques.",
    },
    {
      icon: <Cloud size={45} className="text-cyan-400" />,
      title: "Cloud Deployment",
      description:
        "Deploy AI applications securely on Azure, AWS, GCP, or private cloud environments.",
    },
    {
      icon: <Plug size={45} className="text-cyan-400" />,
      title: "API Integration",
      description:
        "Integrate AI models into web, mobile, and enterprise applications using REST APIs.",
    },
    {
      icon: <Code2 size={45} className="text-cyan-400" />,
      title: "Source Code Delivery",
      description:
        "Provide complete, well-structured source code with best practices and version control.",
    },
    {
      icon: <FileText size={45} className="text-cyan-400" />,
      title: "Model Documentation",
      description:
        "Deliver comprehensive technical documentation, deployment guides, and user manuals.",
    },
  ];

  return (
    <section
      id="technologies"
      className="bg-slate-900 text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase font-semibold">
            Our Technologies
          </p>

          <h2 className="text-5xl font-bold mt-3">
            AI & Machine Learning Technologies
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            From research and data preparation to model deployment and ongoing
            monitoring, Solvify.ai delivers complete AI and Machine Learning
            solutions for businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              {service.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
