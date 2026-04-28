import SplitSection from '../components/SplitSection'

const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'Client Success Lead',
    bio: 'Focuses on customer onboarding, quality assurance, and long-term account growth.',
  },
  {
    name: 'GuruDev Chauhan',
    role: 'Human Resources Manager',
    bio: 'Leads process optimization and service delivery across multi-functional BPO teams.',
  },
  {
    name: 'Shiny Srivastava',
    role: 'Training Specialist',
    bio: 'Builds capability programs that keep teams aligned with client standards and KPIs.',
  },
]

function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="animate-fade-in">
        <SplitSection
          badge="Our Story"
          heading="Trusted BPO Partner for Scalable Business Operations"
          description="Solutions is a business process outsourcing company helping organizations improve efficiency, reduce operational overhead, and deliver consistent customer experiences. We provide reliable support across customer service, data management, and back-office operations."
          imageUrl="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Diverse customer support representative smiling"
          backgroundColor="white"
        />
      </div>

      <div className="animate-fade-up">
        <SplitSection
          badge="Our Mission"
          heading="Driving Value through Operational Excellence"
          description="To empower businesses with dependable, process-driven BPO services that improve performance and create measurable value at every stage of growth. We believe in the power of partnership and continuous improvement."
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Team collaborating on a project in a modern office"
          reverse={true}
          backgroundColor="gray"
        />
      </div>

      <section className="ds-section ds-section-white animate-fade-up">
        <div className="ds-container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="ds-h2">Meet Our Team</h2>
            <p className="ds-body max-w-2xl mx-auto">
              A dedicated team committed to quality service, client satisfaction, and continuous improvement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="ds-card ds-card-hover group h-full"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">{member.role}</p>
                  </div>
                  <p className="ds-body text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
