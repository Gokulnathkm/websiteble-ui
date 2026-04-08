const Newsletter = () => {
  return (
    <section className="px-6 lg:px-12 py-20 md:py-28 max-w-[1400px] mx-auto">
      <div className="bg-brand-mint rounded-3xl px-6 md:px-12 lg:px-20 py-14 md:py-20 text-center relative hover:shadow-lg transition-all duration-300 ease-in-out">
        {/* Purple half-circle - flat on left, curved on right, tilted like Figma */}
        <div
          className="absolute hidden md:block"
          style={{
            top: '15%',
            right: '8%',
            width: '140px',
            height: '140px',
            background: '#7B2FF7',
            borderRadius: '0 140px 140px 0',
            transform: 'rotate(20deg)',
          }}
        />

        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] leading-tight relative z-10">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md mx-auto italic relative z-10">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 bg-brand-dark text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-black hover:shadow-lg active:scale-95 transition-all duration-300 relative z-10">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
