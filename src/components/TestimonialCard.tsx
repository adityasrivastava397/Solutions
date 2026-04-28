type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

function TestimonialCard({ quote, name, role, avatarUrl }: TestimonialCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-gray-700">"{quote}"</p>
    </article>
  )
}

export default TestimonialCard
