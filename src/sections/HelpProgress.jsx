const HelpProgress = () => {
  return (
    <section className="relative px-6 lg:px-12 py-16 md:py-24 max-w-[1400px] mx-auto overflow-hidden">
      {/* Curved red line connecting from previous section */}
      <svg
        className="flowing-line absolute top-[-100px] right-[30%] w-[400px] h-[calc(100%+200px)] opacity-50 hidden lg:block"
        viewBox="0 0 400 800"
      >
        <path d="M 200 0 Q 350 100, 250 250 Q 150 400, 300 550 Q 400 650, 350 800" fill="none" stroke="#FF6B6B" strokeWidth="2" />
      </svg>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left - Large circular image with triangles */}
        <div className="flex-1 relative flex justify-center min-h-[350px]">
          {/* Red triangle - top left */}
          <div className="absolute top-[5%] left-[5%] animate-float-slow z-0">
            <div className="triangle-red" style={{ transform: 'rotate(15deg)' }} />
          </div>

          {/* Large circular photo */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden z-10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop&crop=center"
              alt="Person working at desk"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Red triangle - bottom right */}
          <div className="absolute bottom-[5%] right-[15%] animate-float z-0">
            <div className="triangle-red" style={{ transform: 'rotate(-10deg)' }} />
          </div>
        </div>

        {/* Right - Text content */}
        <div className="flex-1 z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] leading-tight">
            <span className="highlight-underline">See</span> how we can
            <br />
            help you{' '}
            <span className="underline decoration-brand-dark decoration-2 underline-offset-4">
              progress
            </span>
          </h2>

          <p className="mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <a href="#" className="read-more mt-5 inline-flex items-center">
            Read more <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HelpProgress;
