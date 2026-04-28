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
    <section className="relative overflow-hidden rounded-[3rem] bg-slate-950 px-8 py-20 shadow-2xl sm:px-12 sm:py-24 lg:px-16 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-indigo-600/20" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl space-y-10">
          <p className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-400 shadow-sm backdrop-blur-md">
            {badge}
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-400 lg:text-xl lg:leading-loose">
            {subtext}
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to={primaryCtaPath}
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-4.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/50 active:scale-95"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              to={secondaryCtaPath}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-white/10 bg-white/5 px-10 py-4.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              {secondaryCtaLabel}
            </Link>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-4 pt-4">
            {[
              { value: '24/7', label: 'Service Coverage' },
              { value: '99%', label: 'Process Accuracy' },
              { value: 'Scale', label: 'With Confidence' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10">
                <p className="text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 rounded-[4rem] bg-blue-500/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
          <img
            src={imageUrl}
            alt={imageAlt}
            className="relative aspect-square w-full rounded-[3rem] border border-white/10 object-cover shadow-2xl shadow-black/50 transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
