const Hero = () => {
  return (
    <section className="text-center py-24 relative overflow-hidden">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
        Where thinkers and builders create what's next
      </h1>

      <p className="mt-5 text-gray-500 max-w-xl mx-auto">
        A space designed for people who want to learn faster, build better, and grow together.
      </p>

      {/* Avatar Row */}
      <div className="flex justify-center mt-6 -space-x-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/100?img=${i}`}
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="user"
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;