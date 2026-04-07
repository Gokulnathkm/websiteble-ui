import AvatarGroup from "../components/AvatarGroup";

const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">

      <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
        Where thinkers and builders create what’s next
      </h1>

      <p className="mt-6 text-gray-500 max-w-xl mx-auto">
        A space designed for people who want to learn faster, build better, and grow together.
      </p>

      <AvatarGroup />

    </section>
  );
};

export default Hero;

