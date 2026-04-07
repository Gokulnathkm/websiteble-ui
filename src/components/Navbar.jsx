import { useState } from 'react';

const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full px-6 lg:px-12 py-5 flex items-center justify-between max-w-[1400px] mx-auto relative z-50">
      {/* Logo */}
      <h1 className="font-serif text-xl tracking-tight">Elementum</h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        {navLinks.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-brand-dark transition-colors duration-200 relative group"
          >
            {link}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-dark transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl py-6 px-6 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:text-brand-dark py-1">
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
