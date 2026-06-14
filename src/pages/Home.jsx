import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'

const features = [
  { title: "Sentiment Analysis", description: "Classify reviews as Positive, Neutral, or Negative instantly.", icon: "😊" },
  { title: "Theme Tagging", description: "Auto-detect topics like Food, Cleanliness, Host Behaviour and more.", icon: "🏷️" },
  { title: "Draft Responses", description: "AI generates professional management replies for each review.", icon: "✍️" },
  { title: "Analytics Dashboard", description: "Visual charts showing trends and top complaint categories.", icon: "📊" },
]

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-8">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home