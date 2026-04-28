import React from 'react'

interface SplitSectionProps {
  badge?: string
  heading: string
  description: string
  imageUrl: string
  imageAlt: string
  reverse?: boolean
  backgroundColor?: 'white' | 'gray'
  children?: React.ReactNode
}

const SplitSection: React.FC<SplitSectionProps> = ({
  badge,
  heading,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  backgroundColor = 'white',
  children,
}) => {
  const bgClass = backgroundColor === 'white' ? 'ds-section-white' : 'ds-section-gray'
  
  return (
    <section className={`ds-section ${bgClass}`}>
      <div className="ds-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : ''}`}>
            {badge && <p className="ds-kicker">{badge}</p>}
            <h2 className="ds-h2">{heading}</h2>
            <p className="ds-body">{description}</p>
            {children && <div className="pt-6">{children}</div>}
          </div>
          <div className={`${reverse ? 'lg:order-1' : ''}`}>
            <div className="relative group">
              <div className="absolute -inset-6 bg-blue-500/10 rounded-[4rem] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <img
                src={imageUrl}
                alt={imageAlt}
                className="relative aspect-4/3 w-full rounded-[2.5rem] object-cover shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-blue-500/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SplitSection
