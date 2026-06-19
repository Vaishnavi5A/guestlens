/**
 * Input component
 * @param {string} label
 * @param {string} placeholder
 * @param {string} type
 * @param {string} value
 * @param {function} onChange
 * @param {string} error
 */
function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
export default Input