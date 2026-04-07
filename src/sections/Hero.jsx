const avatars = [
  { src: 'https://i.pravatar.cc/200?img=11', size: 'w-[100px] h-[100px] md:w-[130px] md:h-[130px]' },
  { src: 'https://i.pravatar.cc/200?img=12', size: 'w-[80px] h-[80px] md:w-[110px] md:h-[110px]' },
  { src: 'https://i.pravatar.cc/200?img=32', size: 'w-[110px] h-[110px] md:w-[140px] md:h-[140px]' },
  { src: 'https://i.pravatar.cc/200?img=5', size: 'w-[70px] h-[70px] md:w-[100px] md:h-[100px]' },
  { src: 'https://i.pravatar.cc/200?img=15', size: 'w-[90px] h-[90px] md:w-[120px] md:h-[120px]' },
  { src: 'https://i.pravatar.cc/200?img=22', size: 'w-[80px] h-[80px] md:w-[110px] md:h-[110px]' },
  { src: 'https://i.pravatar.cc/200?img=33', size: 'w-[100px] h-[100px] md:w-[130px] md:h-[130px]' },
  { src: 'https://i.pravatar.cc/200?img=36', size: 'w-[90px] h-[90px] md:w-[120px] md:h-[120px]' },
  { src: 'https://i.pravatar.cc/200?img=47', size: 'w-[80px] h-[80px] md:w-[110px] md:h-[110px]' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pb-28 px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Small red diamond decoration - left */}
      <div className="absolute top-[60%] left-[3%] w-4 h-4 bg-red-400 rotate-45 opacity-60 hidden lg:block animate-float" />
      {/* Curved pink line - left decoration */}
      <svg
        className="absolute top-[20%] left-[-30px] w-[80px] h-[300px] opacity-60 hidden lg:block"
        viewBox="0 0 80 300"
      >
        <path d="M 60 0 Q 10 75, 50 150 Q 90 225, 40 300" fill="none" stroke="#FF6B6B" strokeWidth="2" />
      </svg>

      {/* Purple half-circle decoration - right side */}
      <div className="absolute top-[25%] right-[5%] hidden md:block animate-float">
        <div className="purple-half" style={{ width: '50px', height: '25px' }} />
      </div>

      {/* Hero heading with highlights */}
      <div className="text-center mt-6 md:mt-10">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.15] tracking-tight">
          The <span className="highlight-underline">thinkers</span> and
          <br />
          doers were <span className="highlight-pink">changing</span>
          <br />
          the <span className="highlight-green">status</span> Quo with
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        We are a team of strategists, designers communicators,
        Togeather, we belive that progress only happens when you refuse to play things safe.
      </p>

      {/* Scattered circular avatar photos */}
      <div className="flex flex-wrap justify-center items-end gap-4 md:gap-5 mt-10 md:mt-14 px-0 md:px-8">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className={`rounded-full overflow-hidden bg-gray-100 flex-shrink-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out ${avatar.size}`}
            style={{
              marginTop: i % 2 === 0 ? '0px' : '20px',
            }}
          >
            <img
              src={avatar.src}
              alt={`Team member ${i + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;