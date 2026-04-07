const About = () => {
  return (
    <section className="relative px-6 lg:px-12 py-16 md:py-24 max-w-[1400px] mx-auto overflow-hidden">
      {/* Pink radial gradient glow - background */}
      <div className="absolute top-[10%] left-[40%] pink-glow hidden lg:block" />

      {/* Flowing curved red line */}
      <svg
        className="flowing-line absolute top-[-50px] right-[20%] w-[300px] h-[calc(100%+200px)] opacity-60 hidden lg:block"
        viewBox="0 0 300 800"
      >
        <path d="M 150 0 Q 250 150, 150 300 Q 50 450, 200 600 Q 300 700, 250 800" fill="none" stroke="#FF6B6B" strokeWidth="2" />
      </svg>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] leading-tight">
            <span className="highlight-underline">Tomorrow</span> should
            <br />
            be better than <span className="highlight-green">today</span>
          </h2>

          <p className="mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            We are a team of strategists, designers, communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to play things safe.
          </p>

          <a href="#" className="read-more mt-5 inline-flex items-center">
            Read more <span className="arrow">→</span>
          </a>
        </div>

        {/* Right - Large circular image with red diamond behind */}
        <div className="relative flex-1 flex items-center justify-center min-h-[350px] md:min-h-[420px]">
          {/* Red rotated square/diamond behind the circle */}
          <div className="absolute top-[15%] right-[5%] md:right-[10%] z-0">
            <div className="red-diamond" />
          </div>

          {/* Large circular photo */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden z-10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop&crop=center"
              alt="Business team in meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Red triangle decoration */}
          <div className="absolute bottom-[5%] left-[10%] animate-float-slow z-0">
            <div className="triangle-red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
