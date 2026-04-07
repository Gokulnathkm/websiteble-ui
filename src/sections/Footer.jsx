const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm text-gray-600">

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <p>Home</p>
          <p>Studio</p>
          <p>Services</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Terms</h4>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p>info@email.com</p>
        </div>

      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        © 2026 Websiteble. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
