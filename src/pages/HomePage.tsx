import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import { FiClock, FiDollarSign, FiShield, FiUsers } from 'react-icons/fi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuDatabase, LuHeadphones, LuSettings } from 'react-icons/lu'

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
    'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'BPO team in a collaborative workspace',
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
    title: 'Technical Support',
    description:
      'Experienced support teams who resolve technical issues quickly and reduce downtime.',
    icon: <LuSettings />,
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
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

const testimonials = [
  {
    quote:
      'Solutions helped us streamline support operations and improve customer satisfaction within one quarter.',
    name: 'Aarav Mehta',
    role: 'Operations Manager, Nexa Retail',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Their team is dependable, responsive, and scalable. We reduced overhead while maintaining service quality.',
    name: 'Sophia Williams',
    role: 'Director of Client Success, Orbit Systems',
    avatarUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'From onboarding to delivery, the process was smooth and professional. A trusted outsourcing partner.',
    name: 'Rohan Kapoor',
    role: 'COO, Elevate Ventures',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
]

function HomePage() {
  return (
    <div className="space-y-14 sm:space-y-16 lg:space-y-20">
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

      <section className="space-y-7 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Services Preview
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            Core BPO services designed to improve productivity and support sustainable
            growth.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              imageAlt={service.title}
            />
          ))}
        </div>
      </section>

      <section className="space-y-7 rounded-2xl bg-blue-50/80 p-6 sm:space-y-8 sm:p-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Why Choose Us
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            We combine domain expertise, quality processes, and dedicated teams to
            deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg text-white">
                  {benefit.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Testimonials
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            Feedback from businesses that trust Solutions for consistent BPO delivery.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
