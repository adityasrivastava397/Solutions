import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuDatabase, LuHeadphones, LuSettings } from 'react-icons/lu'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    title: 'Customer Support',
    description:
      'Dedicated support teams that handle customer queries quickly and professionally across channels.',
    icon: <LuHeadphones />,
    imageUrl:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Entry',
    description:
      'Accurate, secure, and timely data entry services to keep business records structured and reliable.',
    icon: <LuDatabase />,
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Technical Support',
    description:
      'Skilled specialists providing troubleshooting assistance to maintain smooth system performance.',
    icon: <LuSettings />,
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Back Office Operations',
    description:
      'Efficient process management for documentation, reporting, and essential administrative tasks.',
    icon: <HiOutlineChatBubbleBottomCenterText />,
    imageUrl:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80',
  },
]

function ServicesPage() {
  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          What We Offer
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services Built for Business Growth
        </h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600">
          Our BPO services are designed to improve service quality, streamline
          operations, and support scalable growth across your organization.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
      </section>
    </div>
  )
}

export default ServicesPage
