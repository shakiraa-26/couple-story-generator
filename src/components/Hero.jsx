export default function Hero() {
  return (
    
    <section className="relative bg-[#F8F3ED] max-w-7xl mx-auto px-6 py-20">
        <div className="absolute bottom-0 left-0 text-6xl opacity-20">
        🌿
        </div>

        <div className="absolute right-5 top-40 text-4xl text-[#D97B93] opacity-50">
        ♡
        </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

            <h1 className="text-3xl md:text-6xl max-w-md font-bold leading-tight text-[#4E342E]">

            Every

            <span className="text-[#D97B93]">
                {" "}Love Story{" "}
            </span>

            Deserves To Be Remembered

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Transform your memories, photos and special moments
            into beautiful AI-generated stories, quizzes and
            digital scrapbooks.
            </p>

            
            <div className="flex gap-3 mt-8 flex-wrap">

                <button className="bg-[#8B5E3C] text-white px-5 py-3 rounded-full shadow-md text-sm font-medium">
                    ✨ Create My Story
                </button>

                <button className="border border-[#8B5E3C] text-[#8B5E3C] px-5 py-3 rounded-full text-sm font-medium">
                    ▶ Watch Demo
                </button>

            </div>
            

        </div>

        {/* Right Side */}
        <div>

        <div className="bg-[#FFFDFB] rounded-3xl shadow-lg p-5 mt-10 border border-[#F0E6DE]">

            <h3 className="font-bold text-[#7A5C4D] text-xl mb-4">
                ❤️ Mukhtar & Shakira
            </h3>

            <div className="space-y-3">

                <div className="bg-[#F8F3ED] p-3 rounded-xl">
                ☕ First Meeting
                </div>

                <div className="bg-[#F8F3ED] p-3 rounded-xl">
                📸 First Photo
                </div>

                <div className="bg-[#F8F3ED] p-3 rounded-xl">
                ✨ Favorite Memory
                </div>

            </div>

            <div className="mt-4 bg-[#F8D7E0] text-[#7A5C4D] text-center py-2 rounded-full text-sm">
                Loved by 1000+ Couples ❤️
            </div>

        </div>

        </div>

      </div>

    </section>
  );
}