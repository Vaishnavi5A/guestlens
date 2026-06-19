import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <nav className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        🔍 GuestLens
      </div>
      <div className="flex gap-6 text-sm font-medium items-center">
        <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-indigo-200 transition">Dashboard</Link>
        <Link to="/about" className="hover:text-indigo-200 transition">About</Link>
        <Link to="/login" className="hover:text-indigo-200 transition">Login</Link>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 bg-white text-indigo-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-indigo-100 transition"
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar