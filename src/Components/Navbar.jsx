const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
    
    <h1 className="text-3xl font-bold text-cyan-400">
      KG
    </h1>

    <div className="flex gap-10 text-gray-300 font-medium">
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
      <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
      <a href="#achievements" className="hover:text-cyan-400 transition">Achievements</a>
     
      <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
    </div>

  </div>
</nav>
  );
};

export default Navbar;