function Card({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default Card