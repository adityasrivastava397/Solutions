import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-semibold transition-all duration-300 ${
      isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
    } group`

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 shadow-lg shadow-gray-200/50 backdrop-blur-xl' 
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="ds-container flex h-20 items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-2 text-2xl font-black tracking-tight text-gray-900"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:rotate-6">
            S
          </span>
          <span className="hidden sm:inline">Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                location.pathname === item.path ? 'w-full' : ''
              }`} />
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/20 active:scale-95"
          >
            Get Started <FiArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-white hover:ring-blue-500 md:hidden"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 top-20 z-40 bg-white transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600"
            >
              {item.label}
            </NavLink>
          ))}
          <hr className="border-gray-100" />
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 p-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/30"
          >
            Get Started Now <FiArrowRight className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
