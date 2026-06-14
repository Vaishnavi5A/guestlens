import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Dashboard</h1>
        <p className="text-gray-500">Your review analytics and insights will appear here. Coming soon in Week 5!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard