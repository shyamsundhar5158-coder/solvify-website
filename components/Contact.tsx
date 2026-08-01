import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto bg-slate-900 border border-cyan-500 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition duration-300">

          {/* Founder Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/founder.jpg.png"
              alt="Founder"
              width={200}
              height={200}
              quality={100}
              className="rounded-full border-4 border-cyan-400 object-cover"
            />
          </div>

          {/* Founder Details */}
          <h3 className="text-3xl font-bold text-cyan-400 text-center">
            Founder & CEO
          </h3>

          <h4 className="text-2xl font-semibold text-center mt-3">
            DAVALESWARAPU SAI SAMPATH KUMAR
          </h4>

          <p className="text-slate-300 text-center mt-4 leading-7">
            Passionate about building intelligent AI solutions that solve
            real-world business challenges using
            <span className="text-cyan-400">
              {" "}Generative AI, Machine Learning, Data Science,
              Cloud Deployment, and AI Automation.
            </span>
          </p>

          {/* Contact Information */}
          <div className="mt-8 space-y-4 text-lg">

            <p>
              📧
              <span className="ml-2">
                saisampathkumar75@gmail.com
              </span>
            </p>

            <p>
              📞
              <span className="ml-2">
                +91 94917 58785
              </span>
            </p>

            <p>
              🕒
              <span className="ml-2">
                Monday - Friday
              </span>
            </p>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-10">

            <a
              href="https://linkedin.com/in/sai-sampath-kumar-davaleswarapu-291492138"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] hover:bg-[#004182] px-6 py-3 rounded-lg font-semibold transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:saisampathkumar75@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Email Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
