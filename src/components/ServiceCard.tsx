import type { ReactNode } from 'react'

type ServiceCardProps = {
  title: string
  description: string
  icon?: ReactNode
  imageUrl?: string
  imageAlt?: string
}

function ServiceCard({
  title,
  description,
  icon,
  imageUrl,
  imageAlt = 'Service illustration',
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {imageUrl ? (
        <img src={imageUrl} alt={imageAlt} className="h-44 w-full object-cover" />
      ) : null}

      <div className="flex h-full flex-col p-6">
        {icon ? (
          <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-xl text-primary transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {icon}
          </span>
        ) : null}
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
      </div>
    </article>
  )
}

export default ServiceCard
