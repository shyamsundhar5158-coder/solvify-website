export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-slate-400 mb-8">
            Ready to transform your business with AI? Get in touch with us today.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg">
                Founder & CEO
              </h3>
              <p className="text-white text-lg">
                Davaleswarapu Sai Sampath Kumar
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg">
                Mobile
              </h3>
              <p className="text-white text-lg">
                +91 94917 58785
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg">
                Email
              </h3>
              <p className="text-white text-lg">
                saisampathkumar75@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg">
                Office Hours
              </h3>
              <p className="text-white text-lg">
                Monday - Friday <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}