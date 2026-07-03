const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#081222] border-t border-gray-800 py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-500">
          Contact Me
        </h2>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          I'm currently looking for Full Stack Developer opportunities,
          internships, and exciting projects. Feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Email */}
          <div className="bg-[#0d1b36] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Email
            </h3>

            <p className="text-gray-300">
              kirubagnanaraj6@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <div className="bg-[#0d1b36] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              GitHub
            </h3>

            <a
              href="https://github.com/kiruba-123-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              github.com/kiruba-123-web
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#0d1b36] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">🔗</div>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              LinkedIn
            </h3>

            <a
              href="https://linkedin.com/in/kiruba-gnanaraj-85b716310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              linkedin.com/in/kiruba-gnanaraj-85b716310
            </a>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-12">

          <a
            href="mailto:kirubagnanaraj6@gmail.com"
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Send Email
          </a>

          <a
            href="https://github.com/kiruba-123-web"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-600 transition-all duration-300"
          >
            Visit GitHub
          </a>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Kiruba Gnanaraj | Full Stack MERN Developer | Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;