const offerings = [
  {
    left: 'Office of multiple interest content',
    right: 'Colaborative & partnership',
  },
  {
    left: 'The hanger US Air force digital experimental',
    right: 'We talk about our weight',
  },
  {
    left: 'Delta faucet content, social, digital',
    right: 'Piloting digital confidence',
  },
];

const Offerings = () => {
  return (
    <section className="relative px-6 lg:px-12 py-20 md:py-28 max-w-[1400px] mx-auto overflow-hidden">
      {/* Curved red line decoration */}
      <svg
        className="flowing-line absolute top-[-50px] right-[10%] w-[300px] h-[calc(100%+100px)] opacity-40 hidden lg:block"
        viewBox="0 0 300 600"
      >
        <path d="M 50 0 Q 250 100, 150 200 Q 50 300, 200 400 Q 300 500, 200 600" fill="none" stroke="#FF6B6B" strokeWidth="2" />
      </svg>

      {/* Section heading */}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] leading-tight mb-12 md:mb-16">
        <span className="highlight-green">What we</span> can
        <br />offer you!
      </h2>

      {/* Row-based offerings list */}
      <div className="space-y-0">
        {offerings.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-200 py-5 md:py-7 group cursor-pointer hover:bg-gray-50 hover:pl-4 transition-all duration-300 ease-in-out px-2 rounded"
          >
            {/* Left small description */}
            <p className="text-xs md:text-sm text-gray-500 md:w-[280px] lg:w-[320px] flex-shrink-0 mb-2 md:mb-0">
              {item.left}
            </p>

            {/* Right large serif text */}
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl flex-1 text-brand-dark group-hover:text-black transition-colors">
              {item.right}
            </h3>

            {/* Arrow */}
            <span className="text-xl md:text-2xl text-gray-400 group-hover:text-brand-dark group-hover:translate-x-2 transition-all duration-300 mt-2 md:mt-0 md:ml-8 flex-shrink-0">
              ⟶
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
