/**
 * Toast component
 * Uses react-hot-toast library
 * @param {function} showToast - call to trigger toast
 */
import toast, { Toaster } from 'react-hot-toast'

export function Toast() {
  return <Toaster position="top-right" />
}

export function showToast(message, type = 'success') {
  if (type === 'success') toast.success(message)
  else if (type === 'error') toast.error(message)
  else toast(message)
}

export default Toast