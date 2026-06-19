import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button, Input, Modal, Toast, Loader, showToast } from '../components/ui'

function UIShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputVal, setInputVal] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toast />
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8">UI Component Showcase</h1>

        {/* Buttons */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary" size="md">Primary MD</Button>
            <Button variant="primary" size="lg">Primary LG</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Inputs</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Input label="Email" placeholder="Enter your email" type="email" value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <Input label="Password" placeholder="Enter password" type="password" />
            <Input label="With Error" placeholder="Enter value" error="This field is required" />
          </div>
        </section>

        {/* Modal */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Modal</h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="GuestLens Modal">
            <p>This is a modal dialog. Press Escape or click ✕ to close.</p>
          </Modal>
        </section>

        {/* Toast */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Toast</h2>
          <div className="flex gap-4">
            <Button onClick={() => showToast('Success! Review analysed.', 'success')}>Success Toast</Button>
            <Button variant="outline" onClick={() => showToast('Something went wrong!', 'error')}>Error Toast</Button>
          </div>
        </section>

        {/* Loader */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Loader</h2>
          <div className="flex gap-8 items-center">
            <Loader size="sm" text="Small" />
            <Loader size="md" text="Medium" />
            <Loader size="lg" text="Large" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default UIShowcase