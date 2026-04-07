const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h2 className="text-2xl font-semibold">
          Tomorrow will be better
        </h2>
        <p className="mt-4 text-gray-500">
          We are a team of strategists, designers, and developers.
        </p>
        <p className="mt-2 text-sm underline cursor-pointer">
          Read more →
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
        className="rounded-full w-80 mx-auto"
      />

    </section>
  );
};

export default About;
