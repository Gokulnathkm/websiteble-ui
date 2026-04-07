const Newsletter = () => {
  return (
    <section className="px-6 lg:px-12 py-20 md:py-28 max-w-[1400px] mx-auto">
      <div className="bg-brand-mint rounded-3xl px-6 md:px-12 lg:px-20 py-14 md:py-20 text-center relative overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out">
        {/* Purple blob decoration */}
        <div className="absolute top-[15%] right-[5%] md:right-[8%] hidden md:block animate-float">
          <div className="purple-blob w-[60px] h-[80px]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md mx-auto italic">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 bg-brand-dark text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-black hover:shadow-lg active:scale-95 transition-all duration-300">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
