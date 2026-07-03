import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const hour = new Date().getHours();

  let greeting = "Good Evening 👋";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon 🌤️";
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full text-center">

        {/* Greeting Badge */}
        <div className="inline-block px-6 py-3 border border-purple-500/40 rounded-full bg-[#0b1220] text-lg text-gray-300 mb-8">
          ✨ {greeting}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Welcome to
        </h1>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
          Kiruba's  Resume Portfolio
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mt-10 leading-10">
          Explore my skills, projects, achievements and experience
          through an interactive voice-enabled portfolio experience.
        </p>

        {/* Start Button */}
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-14 px-10 py-5 rounded-2xl text-xl font-semibold
          bg-gradient-to-r from-purple-600 to-fuchsia-600
          hover:scale-105 transition duration-300
          shadow-[0_0_40px_rgba(168,85,247,0.4)]"
        >
          🎤 Start Interview
        </button>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-[#081222] border border-purple-500/20 rounded-3xl p-6">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-2">
              Voice Interaction
            </h3>
            <p className="text-gray-400">
              Ask questions naturally using your voice.
            </p>
          </div>

          <div className="bg-[#081222] border border-purple-500/20 rounded-3xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">
              Instant Responses
            </h3>
            <p className="text-gray-400">
              Get answers about my skills and projects instantly.
            </p>
          </div>

          <div className="bg-[#081222] border border-purple-500/20 rounded-3xl p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">
              Interactive Portfolio
            </h3>
            <p className="text-gray-400">
              Explore my journey in a modern way.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;