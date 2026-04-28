const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'Client Success Lead',
    bio: 'Focuses on customer onboarding, quality assurance, and long-term account growth.',
  },
  {
    name: 'Daniel Roy',
    role: 'Operations Manager',
    bio: 'Leads process optimization and service delivery across multi-functional BPO teams.',
  },
  {
    name: 'Meera Kapoor',
    role: 'Training Specialist',
    bio: 'Builds capability programs that keep teams aligned with client standards and KPIs.',
  },
]

function AboutPage() {
  return (
    <div className="space-y-14 sm:space-y-16 lg:space-y-20">
      <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            About Solutions
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted BPO Partner for Scalable Business Operations
          </h1>
          <p className="text-base leading-7 text-gray-600">
            Solutions is a business process outsourcing company helping organizations
            improve efficiency, reduce operational overhead, and deliver consistent
            customer experiences. We provide reliable support across customer service,
            data management, technical assistance, and back-office operations.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1200&q=80"
          alt="BPO professionals in an office"
          className="h-72 w-full rounded-xl object-cover shadow-lg sm:h-80"
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Mission</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            To empower businesses with dependable, process-driven BPO services that
            improve performance and create measurable value at every stage of growth.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Vision</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            To become a globally trusted outsourcing partner known for operational
            excellence, skilled teams, and long-term client success.
          </p>
        </article>
      </section>

      <section className="space-y-7 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Meet Our Team
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            A dedicated team committed to quality service, client satisfaction, and
            continuous improvement.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-primary">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
