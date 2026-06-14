import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">About GuestLens</h1>
        <p className="text-gray-500">GuestLens is an AI-powered guest review intelligence platform built for eco-homestay managers. It helps analyse reviews, detect sentiment, and generate smart responses — all in one place.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About