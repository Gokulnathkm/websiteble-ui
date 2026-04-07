import AvatarGroup from "../components/AvatarGroup";

const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
        The thinkers and doers shaping the future
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
        A community where people come together to learn, build, and grow faster.
      </p>

      {/* Avatars */}
      <AvatarGroup />

    </section>
  );
};

export default Hero;
