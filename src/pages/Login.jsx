import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Login</h1>
        <p className="text-gray-500 mb-8">Sign in with your Google account to access GuestLens.</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Sign in with Google
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Login