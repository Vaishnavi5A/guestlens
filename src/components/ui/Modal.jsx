/**
 * Modal component
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {string} title
 * @param {ReactNode} children
 */
import { useEffect } from 'react'

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold">✕</button>
        </div>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    </div>
  )
}
export default Modal