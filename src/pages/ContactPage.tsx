import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Get In Touch
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let&apos;s Discuss Your BPO Requirements
        </h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600">
          Share your requirements and our team will get back to you with a tailored
          support plan for your business operations.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-md lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
          <div className="mt-5 space-y-4 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-800">Email:</span>{' '}
              contact@solutionsbpo.com
            </p>
            <p>
              <span className="font-medium text-gray-800">Phone:</span> +1 (000)
              000-0000
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default ContactPage
