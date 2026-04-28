import { Link } from 'react-router-dom'

type HeroSectionProps = {
  badge: string
  heading: string
  subtext: string
  primaryCtaLabel: string
  primaryCtaPath: string
  secondaryCtaLabel: string
  secondaryCtaPath: string
  imageUrl: string
  imageAlt: string
}

function HeroSection({
  badge,
  heading,
  subtext,
  primaryCtaLabel,
  primaryCtaPath,
  secondaryCtaLabel,
  secondaryCtaPath,
  imageUrl,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-12 shadow-md sm:px-10 sm:py-14 lg:px-12">
      <div className="absolute inset-0 bg-slate-900/35" />
      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
            {badge}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="text-base leading-7 text-blue-50 sm:text-lg">{subtext}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={primaryCtaPath}
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              to={secondaryCtaPath}
              className="inline-flex items-center rounded-md border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-white/15 blur-md" />
          <img
            src={imageUrl}
            alt={imageAlt}
            className="relative h-72 w-full rounded-2xl object-cover shadow-xl sm:h-80 lg:h-96"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
