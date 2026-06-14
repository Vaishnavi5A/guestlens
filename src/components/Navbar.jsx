import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        🔍 GuestLens
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-indigo-200 transition">Dashboard</Link>
        <Link to="/about" className="hover:text-indigo-200 transition">About</Link>
        <Link to="/login" className="hover:text-indigo-200 transition">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar