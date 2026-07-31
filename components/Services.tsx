import {
  BrainCircuit,
  Bot,
  Sparkles,
  Cpu,
  MessageSquareCode,
  Workflow,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bot size={45} className="text-cyan-400" />,
      title: "AI Chatbots",
      description:
        "Custom AI chatbots powered by OpenAI, Gemini, Claude, and other LLMs.",
    },
    {
      icon: <BrainCircuit size={45} className="text-cyan-400" />,
      title: "Generative AI Solutions",
      description:
        "Enterprise GenAI applications, AI assistants, document intelligence, and workflow automation.",
    },
    {
      icon: <Sparkles size={45} className="text-cyan-400" />,
      title: "LLM Applications",
      description:
        "Build intelligent applications using GPT, Llama, Mistral, and other Large Language Models.",
    },
    {
      icon: <Cpu size={45} className="text-cyan-400" />,
      title: "Machine Learning",
      description:
        "Predictive models, classification, regression, forecasting, and anomaly detection.",
    },
    {
      icon: <Workflow size={45} className="text-cyan-400" />,
      title: "AI Automation",
      description:
        "Automate business processes using AI agents and intelligent workflows.",
    },
    {
      icon: <MessageSquareCode size={45} className="text-cyan-400" />,
      title: "AI Consulting",
      description:
        "Helping organizations adopt AI with the right architecture and implementation strategy.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-900 text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            AI Solutions We Deliver
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            We specialize in Generative AI and Machine Learning solutions that
            help businesses automate processes, improve productivity, and unlock
            the power of artificial intelligence.
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