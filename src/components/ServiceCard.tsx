import type { ReactNode } from 'react'
import { FiArrowRight } from 'react-icons/fi'

type ServiceCardProps = {
  title: string
  description: string
  icon?: ReactNode
}

function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:ring-blue-500/20">
      <div className="absolute top-0 right-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <FiArrowRight className="h-5 w-5 text-blue-500" />
      </div>
      
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
        {title}
      </h3>
      
      <p className="mt-4 flex-grow text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
        Explore Service <FiArrowRight className="h-4 w-4" />
      </div>
    </article>
  )
}

export default ServiceCard
