const offerings = [
  "Project-based learning",
  "Career guidance",
  "Portfolio support",
];

const Offerings = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24 text-center">
      
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        What we offer
      </h2>

      <ul className="mt-6 space-y-4 text-gray-600">
        {offerings.map((item, i) => (
          <li
            key={i}
            className="flex justify-center items-center gap-3 text-lg leading-none"
          >
            <span className="text-black">✔</span>
            {item}
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Offerings;

