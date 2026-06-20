const features = [
  {
    title: "AI Story Generator",
    description: "Generate beautiful love stories instantly."
  },
  {
    title: "Memory Timeline",
    description: "Create timelines from your memories."
  },
  {
    title: "Couple Quiz",
    description: "Test how well you know each other."
  }
];

export default function Features() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose LoveAI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-pink-50 p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}