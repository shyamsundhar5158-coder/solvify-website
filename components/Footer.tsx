export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Solvify.ai
            </h2>

            <p className="text-slate-400 mt-4">
              Empowering businesses with Generative AI, Data Science,
              Machine Learning, and modern software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-slate-400">
              Founder: Davaleswarapu Sai Sampath Kumar
            </p>

            <p className="text-slate-400 mt-2">
              📞 +91 94917 58785
            </p>

            <p className="text-slate-400 mt-2">
              ✉️ saisampathkumar75@gmail.com
            </p>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        <div className="text-center text-slate-500">
          © {new Date().getFullYear()} Solvify.ai. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}