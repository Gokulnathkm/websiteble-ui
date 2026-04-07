const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-24 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Stay updated
      </h2>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 border border-gray-300 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ease-in-out"
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300 ease-in-out">
          Subscribe
        </button>

      </div>
    </section>
  );
};

export default Newsletter;

