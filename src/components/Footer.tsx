import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', icon: FaLinkedinIn },
  { label: 'Facebook', icon: FaFacebookF },
  { label: 'X', icon: FaXTwitter },
  { label: 'Instagram', icon: FaInstagram },
]

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">Solutions</h3>
          <p className="max-w-xs text-sm leading-7 text-gray-600">
            Reliable BPO services that help businesses improve efficiency,
            customer satisfaction, and operational performance.
          </p>
          <div className="flex items-center gap-2 pt-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-primary"
              >
                <social.icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Email: contact@solutionsbpo.com</p>
            <p>Phone: +1 (000) 000-0000</p>
            <p>Address: 245 Business Avenue, NY</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-sm text-gray-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
