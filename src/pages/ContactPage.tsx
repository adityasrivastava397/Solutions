import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="ds-section ds-section-white animate-fade-in">
        <div className="ds-container space-y-6">
          <p className="ds-kicker">Get In Touch</p>
          <h1 className="ds-h1">Let&apos;s Discuss Your BPO Requirements</h1>
          <p className="ds-body max-w-3xl text-lg">
            Share your requirements and our team will get back to you with a tailored
            support plan for your business operations.
          </p>
        </div>
      </section>

      <section className="ds-section ds-section-gray animate-fade-up">
        <div className="ds-container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="ds-card h-fit lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Info</h2>
              <p className="ds-body text-sm leading-relaxed">
                Our team is ready to help you optimize your business processes. Reach out via email or phone, or fill out the form.
              </p>
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-primary tracking-widest">Email</span>
                  <span className="text-gray-900 font-medium break-all">hr_services@solutionsinfo.in</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-primary tracking-widest">Phone</span>
                  <span className="text-gray-900 font-medium">+91 85956 32735</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-primary tracking-widest">Office</span>
                  <span className="text-gray-900 font-medium">
                    39, 1st floor, Gurunanak Pura Complex,<br />
                    Laxmi Nagar, Opposite HDFC Bank District Center & V3S Mall,<br />
                    Delhi – 110092
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="ds-card animate-fade-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
