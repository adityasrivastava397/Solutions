function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
