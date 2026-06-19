/**
 * Loader component
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} text - optional loading text
 */
function Loader({ size = 'md', text = 'Loading...' }) {
  const sizes = { sm: 'w-6 h-6', md: 'w-10 h-10', lg: 'w-16 h-16' }
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizes[size]} border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin`}></div>
      {text && <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>}
    </div>
  )
}
export default Loader