const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Stay updated
      </h2>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

