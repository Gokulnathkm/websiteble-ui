const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-2xl font-semibold">
        Stay updated
      </h2>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-md w-full sm:w-72"
        />
        <button className="bg-black text-white px-6 py-2 rounded-md hover:opacity-80 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

