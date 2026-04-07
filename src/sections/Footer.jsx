const footerColumns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'Linkedin', 'Youtube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    links: [
      '1456w Flam its, STE 20 Chicago, IL 63167',
      '(123) 456789000',
      'info@elementum.com',
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-14 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-gray-900 mb-4 text-xs uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-brand-dark transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-400">
            ©2022 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
