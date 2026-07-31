export default function Products() {
  const products = [
    {
      title: "AI Chatbots",
      description:
        "Intelligent AI chatbots powered by Large Language Models (LLMs) to automate customer support, business communication, and workflows.",
    },
    {
      title: "Generative AI Products",
      description:
        "Advanced Gen AI solutions for content generation, AI assistants, document intelligence, automation, and enterprise applications.",
    },
    {
      title: "Data Science Solutions",
      description:
        "Data-driven solutions using Machine Learning, predictive analytics, and forecasting models to solve real-world business problems.",
    },
  ];

  return (
    <section
      id="products"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Our Products
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          AI-powered solutions built for modern businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:border hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-semibold text-cyan-400">
                {product.title}
              </h3>

              <p className="text-slate-300 mt-4">
                {product.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}