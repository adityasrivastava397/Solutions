import { FaQuoteLeft } from 'react-icons/fa'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

function TestimonialCard({ quote, name, role, avatarUrl }: TestimonialCardProps) {
  return (
    <article className="relative flex flex-col items-center text-center rounded-[2rem] bg-white p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
          <FaQuoteLeft className="h-5 w-5" />
        </div>
      </div>
      
      <p className="mt-4 text-lg font-medium leading-relaxed text-gray-800 italic">
        "{quote}"
      </p>
      
      <div className="mt-8 flex flex-col items-center gap-4">
        <img
          src={avatarUrl}
          alt={name}
          className="h-16 w-16 rounded-2xl object-cover ring-4 ring-blue-50 transition-transform duration-500 hover:scale-110"
        />
        <div className="space-y-1">
          <p className="text-base font-bold text-gray-900 tracking-tight">{name}</p>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
