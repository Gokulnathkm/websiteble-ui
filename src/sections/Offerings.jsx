const offerings = [
  "Project-based learning",
  "Career guidance",
  "Portfolio support",
];

const Offerings = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        What we offer
      </h2>

<ul className="mt-6 space-y-4 text-gray-600">
  {offerings.map((item, i) => (
    <li key={i} className="flex justify-center items-center gap-3 text-lg">
      <span className="text-black">✔</span>
      {item}
    </li>
  ))}
</ul>
    </section>
  );
};

export default Offerings;

