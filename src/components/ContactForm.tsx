import { useState } from 'react'
import type { FormEvent } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    console.log('Contact form data:', formData)
    setFormData(initialFormData)
    setErrors({})
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="ds-card space-y-5 ds-card-hover sm:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="Tell us how we can support your business."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="ds-button-primary"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
