import SplitSection from '../components/SplitSection'
import ServiceCard from '../components/ServiceCard'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuDatabase, LuHeadphones } from 'react-icons/lu'
import { FiCheckCircle } from 'react-icons/fi'

const services = [
  {
    title: 'Customer Support',
    description:
      'Our dedicated support teams handle customer queries quickly and professionally across multiple channels. We focus on empathy, speed, and resolution to ensure your customers feel heard and valued.',
    icon: <LuHeadphones />,
    imageUrl:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1200&q=80',
    features: ['24/7 Multi-channel Support', 'Multilingual Capabilities', 'SLA-driven Performance', 'CRM Integration'],
  },
  {
    title: 'Data Management',
    description:
      'Accurate, secure, and timely data entry services to keep your business records structured and reliable. We handle high-volume data processing with precision and confidentiality.',
    icon: <LuDatabase />,
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    features: ['Real-time Data Entry', 'Database Management', 'Data Cleaning & Validation', 'Secure Document Processing'],
  },
  {
    title: 'Back Office Operations',
    description:
      'Efficient process management for documentation, reporting, and essential administrative tasks. We streamline your internal operations so you can focus on core business strategies.',
    icon: <HiOutlineChatBubbleBottomCenterText />,
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    features: ['Workflow Automation', 'Inventory Management', 'Payroll & Invoicing Support', 'Content Moderation'],
  },
]

function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="ds-section ds-section-white animate-fade-in">
        <div className="ds-container text-center space-y-6">
          <p className="ds-kicker">What We Offer</p>
          <h1 className="ds-h1">Services Built for Business Growth</h1>
          <p className="ds-body max-w-3xl mx-auto text-lg">
            Our BPO services are designed to improve service quality, streamline operations, and support scalable growth across your organization.
          </p>
        </div>
      </section>

      <section className="ds-section ds-section-white pt-0 animate-fade-up">
        <div className="ds-container">
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

      <section className="ds-section ds-section-gray animate-fade-up">
        <div className="ds-container text-center space-y-6">
          <h2 className="ds-h2">Deep Dive into Our Solutions</h2>
          <p className="ds-body max-w-3xl mx-auto">
            Explore the detailed capabilities and workflows of each of our core service offerings.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <div key={service.title} className="animate-fade-up">
          <SplitSection
            badge={service.title}
            heading={`Excellence in ${service.title}`}
            description={service.description}
            imageUrl={service.imageUrl}
            imageAlt={service.title}
            reverse={index % 2 !== 0}
            backgroundColor={index % 2 === 0 ? 'white' : 'gray'}
          >
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-700">
                  <FiCheckCircle className="text-primary h-5 w-5 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </SplitSection>
        </div>
      ))}

      <section className="ds-section ds-section-gray animate-fade-up">
        <div className="ds-container text-center space-y-8">
          <h2 className="ds-h2">Ready to Transform Your Operations?</h2>
          <p className="ds-body max-w-2xl mx-auto">
            Contact us today to discuss how our tailored BPO solutions can help your business scale efficiently and effectively.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="ds-button-primary">
              Get a Free Quote
            </a>
            <a href="/about" className="ds-button-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
