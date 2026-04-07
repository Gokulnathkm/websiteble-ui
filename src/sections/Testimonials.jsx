const avatarsLeft = [
  'https://i.pravatar.cc/100?img=47',
  'https://i.pravatar.cc/100?img=48',
  'https://i.pravatar.cc/100?img=33',
];

const avatarsRight = [
  'https://i.pravatar.cc/100?img=51',
  'https://i.pravatar.cc/100?img=52',
  'https://i.pravatar.cc/100?img=44',
];

const Testimonials = () => {
  return (
    <section className="relative px-6 lg:px-12 py-20 md:py-28 max-w-[1400px] mx-auto">
      {/* Section heading with marker highlights */}
      <h2 className="font-hand text-3xl md:text-4xl lg:text-[2.5rem] text-center leading-snug mb-12 md:mb-16">
        <span className="highlight-marker">What</span> our customer
        <br />
        says <span className="highlight-marker">About Us</span>
      </h2>

      {/* Testimonial layout: avatars | card | avatars */}
      <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
        {/* Left avatars (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-4 items-center">
          {avatarsLeft.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Customer ${i + 1}`}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
            />
          ))}
        </div>

        {/* Testimonial card */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 max-w-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <div className="text-brand-green text-5xl font-serif leading-none mb-3">"</div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50%
            increase in traffic with in days since its launch. They also had an impressive ability to use technologies that
            the company hasn't used, which have also proved to be easy to use and reliable.
          </p>

          <div className="text-brand-green text-5xl font-serif leading-none text-right mt-3">"</div>
        </div>

        {/* Right avatars (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-4 items-center">
          {avatarsRight.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Customer ${i + 4}`}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>

      {/* Purple blob decoration - bottom right */}
      <div className="absolute bottom-[10%] right-[5%] hidden md:block animate-float">
        <div className="purple-blob" />
      </div>
    </section>
  );
};

export default Testimonials;
