const cardData = [
  {
    title: "Learn by building",
    desc: "Work on real-world projects instead of just theory.",
  },
  {
    title: "Guided mentorship",
    desc: "Learn directly from experienced professionals.",
  },
];

const Highlights = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
      {cardData.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Highlights;

