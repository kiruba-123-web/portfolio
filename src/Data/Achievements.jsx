import webdesigning from "../assets/web designing.pdf"
import debugging from "../assets/debugging.pdf"

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-purple-500">
          Achievements & Certifications
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {/* Achievement Card */}
      {/* Certificate Card */}
<div
  className="
  bg-gradient-to-br from-[#081222] to-[#0d1b36]
  border border-gray-800
  rounded-3xl
  p-8
  shadow-lg shadow-purple-500/10
  hover:border-purple-500
  hover:shadow-purple-500/30
  hover:-translate-y-2
  transition-all duration-300
  min-h-[300px]
  flex flex-col justify-between
  "
>
  <div>
    <span className="inline-block bg-cyan-500/20 text-cyan-300 text-sm px-4 py-1 rounded-full mb-5">
      Certification
    </span>

    <h3 className="text-3xl font-bold text-cyan-400 mb-5">
      🐞 Debugging Competition
    </h3>

    <p className="text-gray-300 leading-8 text-lg">
      Participated in the Debugging Competition and demonstrated
      strong problem-solving and debugging skills.
    </p>
  </div>

  <a
    href={debugging}
    target="_blank"
    rel="noopener noreferrer"
    className="
    mt-8
    bg-gradient-to-r
    from-cyan-600
    to-blue-600
    px-6 py-3
    rounded-xl
    font-semibold
    hover:scale-105
    transition-all duration-300
    w-fit
    "
  >
    View Certificate
  </a>
</div>

        {/* Certificate Card */}
       

      </div>
    </section>
  );
};

export default Achievements;