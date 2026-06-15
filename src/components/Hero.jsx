// Hero section with CTA button
function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI-Powered Guest Review Intelligence
      </h1>
      <p className="text-lg mb-8 text-indigo-100">
        Paste your guest reviews and instantly get sentiment analysis, theme tags, and smart responses.
      </p>
      <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-50 transition">
        Get Started →
      </button>
    </div>
  )
}

export default Hero