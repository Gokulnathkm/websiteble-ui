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

      <ul className="mt-10 max-w-xl mx-auto text-left">
        {offerings.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center py-4 border-b border-gray-200 text-lg hover:pl-2 transition-all duration-300 ease-in-out"
          >
            <span className="text-gray-700">{item}</span>
            <span className="text-xl">→</span>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Offerings;
