const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <h1 className="font-semibold text-lg">Elementum</h1>

      <ul className="hidden md:flex gap-8 text-sm text-gray-600">
        <li>Home</li>
        <li>Studio</li>
        <li>Service</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className="md:hidden">☰</div>
    </nav>
  );
};

export default Navbar;
