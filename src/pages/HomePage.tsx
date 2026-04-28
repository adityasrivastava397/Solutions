import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import SplitSection from '../components/SplitSection'
import { FiClock, FiDollarSign, FiShield, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuDatabase, LuHeadphones } from 'react-icons/lu'

const heroContent = {
  badge: 'Solutions BPO',
  heading: 'Empowering Your Business with Smart BPO Solutions',
  subtext:
    'We deliver outsourcing support that improves operational efficiency and helps your business scale with confidence.',
  primaryCtaLabel: 'Get Started',
  primaryCtaPath: '/services',
  secondaryCtaLabel: 'Contact Us',
  secondaryCtaPath: '/contact',
  imageUrl:
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'High-energy modern call center team',
}

const services = [
  {
    title: 'Customer Support',
    description:
      'Professional multi-channel support that improves response time and customer satisfaction.',
    icon: <LuHeadphones />,
    imageUrl:
      'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Entry',
    description:
      'Accurate and secure data processing to keep your operations organized and up to date.',
    icon: <LuDatabase />,
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Back Office Operations',
    description:
      'Reliable process management for administrative tasks, documentation, and reporting.',
    icon: <HiOutlineChatBubbleBottomCenterText />,
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  },
]

const benefits = [
  {
    title: 'Reliability',
    description:
      'Consistent delivery standards and process-driven execution for every engagement.',
    icon: <FiShield />,
  },
  {
    title: 'Cost Efficiency',
    description:
      'Reduce operational costs without compromising quality, performance, or customer experience.',
    icon: <FiDollarSign />,
  },
  {
    title: 'Skilled Team',
    description:
      'Dedicated specialists trained to align with your business goals and service needs.',
    icon: <FiUsers />,
  },
  {
    title: '24/7 Support',
    description:
      'Round-the-clock service coverage to support global customers across time zones.',
    icon: <FiClock />,
  },
]

function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="ds-container pt-8 sm:pt-12 lg:pt-16 animate-fade-in">
        <HeroSection
          badge={heroContent.badge}
          heading={heroContent.heading}
          subtext={heroContent.subtext}
          primaryCtaLabel={heroContent.primaryCtaLabel}
          primaryCtaPath={heroContent.primaryCtaPath}
          secondaryCtaLabel={heroContent.secondaryCtaLabel}
          secondaryCtaPath={heroContent.secondaryCtaPath}
          imageUrl={heroContent.imageUrl}
          imageAlt={heroContent.imageAlt}
        />
      </div>

      <div className="animate-fade-up">
        <SplitSection
          badge="Precision Focus"
          heading="Unmatched Operational Excellence"
          description="We don't just process tasks; we optimize them. Our team integrates seamlessly with your workflow, providing the expertise needed to drive efficiency and reduce complexity."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Business team collaborating in a modern meeting room"
          backgroundColor="gray"
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {['Process Optimization', 'Real-time Reporting', 'Quality Assurance', 'Scalable Teams'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-primary h-5 w-5 shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </SplitSection>
      </div>

      <section className="ds-section ds-section-white animate-fade-up">
        <div className="ds-container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="ds-h2">Core Services</h2>
            <p className="ds-body max-w-2xl mx-auto">
              Comprehensive BPO solutions tailored to meet the unique demands of your industry.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="animate-fade-up">
        <SplitSection
          badge="Global Reach"
          heading="Scale Without Borders"
          description="Whether you're a startup or an enterprise, our global infrastructure allows you to expand your footprint without the overhead of local operations."
          imageUrl="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Modern customer support workstation"
          reverse={true}
          backgroundColor="gray"
        />
      </div>

      <section className="ds-section ds-section-white animate-fade-up">
        <div className="ds-container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="ds-h2">Why Partners Choose Us</h2>
            <p className="ds-body max-w-2xl mx-auto">
              We combine advanced technology with human expertise to deliver results that matter.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="ds-card ds-card-hover group h-full"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {benefit.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="ds-body text-sm leading-relaxed">
                    {benefit.description}
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

export default HomePage
