import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '#' },
]

const serviceLinks = [
  { label: 'Customer Support', path: '/services' },
  { label: 'Data Entry', path: '/services' },
  { label: 'Back Office', path: '/services' },
  { label: 'Workflow Optimization', path: '/services' },
]

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="ds-container py-16 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-black tracking-tight text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                S
              </span>
              Solutions
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Empowering global enterprises with scalable BPO solutions. We combine human expertise with technology to drive measurable business outcomes.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="transition-colors hover:text-blue-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="transition-colors hover:text-blue-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact Us</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 h-5 w-5 text-blue-500" />
                <span className="break-all">hr_services@solutionsinfo.in</span>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 h-5 w-5 text-blue-500" />
                <span>+91 85956 32735</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 h-5 w-5 text-blue-500" />
                <span>
                  39, 1st floor, Gurunanak Pura Complex,<br />
                  Laxmi Nagar, Opposite HDFC Bank District Center & V3S Mall,<br />
                  Delhi – 110092
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900 py-8">
        <div className="ds-container flex flex-col items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest sm:flex-row">
          <p>© 2015 Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
