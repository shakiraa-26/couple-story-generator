export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">
            Powered by AI ❤️
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-6 leading-tight">
            Create Beautiful
            <span className="text-pink-600"> Love Stories </span>
            With AI
          </h1>

          <p className="text-lg text-gray-600 mt-6">
            Turn your memories, photos and special moments
            into interactive stories, quizzes and timelines.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Create Story
            </button>

            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full">
              Watch Demo
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div>

          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h3 className="text-xl font-bold mb-4">
              ❤️ Story Preview
            </h3>

            <div className="space-y-3">

              <div className="bg-pink-50 p-4 rounded-xl">
                First Meeting ☕
              </div>

              <div className="bg-pink-50 p-4 rounded-xl">
                First Photo 📸
              </div>

              <div className="bg-pink-50 p-4 rounded-xl">
                Favorite Memory ✨
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}