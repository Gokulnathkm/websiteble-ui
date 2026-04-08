const Newsletter = () => {
  return (
    <section className="px-6 lg:px-12 py-20 md:py-28 max-w-[1400px] mx-auto">
      <div className="bg-brand-mint rounded-3xl px-6 md:px-12 lg:px-20 py-14 md:py-20 text-center relative hover:shadow-lg transition-all duration-300 ease-in-out">
        {/* Purple semicircle - flat left edge, curved right, matching Figma */}
        <div
          className="absolute hidden md:block"
          style={{
            top: '10%',
            right: '5%',
            width: '45px',
            height: '90px',
            background: '#7C3AED',
            borderRadius: '0 90px 90px 0',
            transform: 'rotate(25deg)',
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
