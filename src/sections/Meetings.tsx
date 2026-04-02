import { motion } from 'framer-motion';
import { Shield, Check, Users, Presentation, Coffee, Wifi } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const meetingSpaces = [
  {
    id: 1,
    name: 'Executive Boardroom',
    capacity: '12-16',
    image: '/images/boardroom.jpg',
    features: ['Video Conferencing', 'Privacy', 'Catering Available'],
  },
  {
    id: 2,
    name: 'Conference Suite',
    capacity: '50-80',
    image: '/images/meeting-1.jpg',
    features: ['AV Equipment', 'Breakout Rooms', 'Natural Light'],
  },
  {
    id: 3,
    name: 'Grand Ballroom',
    capacity: '200-500',
    image: '/images/ballroom.jpg',
    features: ['Stage & Podium', 'Custom Setup', 'Full Catering'],
  },
];

const pharmaCompliance = [
  'Sunshine Act compliant meeting documentation',
  'Itemized meal and expense tracking',
  'Separate HCP attendee reporting',
  'Secure, private meeting spaces',
  'Professional event coordination',
  'Flexible catering options',
];

const meetingAmenities = [
  { icon: Presentation, label: 'State-of-the-art AV equipment' },
  { icon: Wifi, label: 'High-speed WiFi throughout' },
  { icon: Coffee, label: 'Customizable catering options' },
  { icon: Users, label: 'Dedicated event coordinator' },
];

export default function Meetings() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="meetings" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-12">
          <p className="text-dolce-red text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy">
            Meetings & Events
          </p>
          <h2 className="font-avenir-black text-4xl md:text-5xl text-dolce-gray leading-[1.15] mb-4">
            Pharma-Compliant Meeting Spaces
          </h2>
          <p className="text-dolce-gray max-w-2xl mx-auto font-avenir-book">
            From intimate board meetings to large-scale conferences, our flexible 
            event spaces are designed to meet the unique needs of pharmaceutical 
            and healthcare industry gatherings.
          </p>
        </SectionReveal>

        {/* Pharma Compliance Badge */}
        <SectionReveal delay={0.2} className="mb-12">
          <div className="bg-dolce-dark-gray p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-dolce-red/20 flex items-center justify-center flex-shrink-0">
                  <Shield size={28} className="text-dolce-red" />
                </div>
                <div>
                  <h3 className="text-white font-avenir-black text-xl">Pharma Compliance Assured</h3>
                  <p className="text-white/60 text-sm font-avenir-book">Sunshine Act & Industry Standard Compliant</p>
                </div>
              </div>
              <div className="lg:ml-auto">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {pharmaCompliance.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={14} className="text-dolce-red flex-shrink-0" />
                      <span className="text-white/80 text-sm font-avenir-book">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Meeting Spaces */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {meetingSpaces.map((space) => (
            <motion.div
              key={space.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <motion.img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Users size={16} />
                    <span className="text-sm font-avenir-book">Up to {space.capacity} guests</span>
                  </div>
                </div>
              </div>
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-2 group-hover:text-dolce-red transition-colors">
                {space.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {space.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-dolce-light text-dolce-gray px-3 py-1 font-avenir-book"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Meeting Amenities */}
        <SectionReveal delay={0.4} className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {meetingAmenities.map((amenity) => (
              <div key={amenity.label} className="flex items-center gap-3">
                <amenity.icon size={20} className="text-dolce-red" />
                <span className="text-dolce-gray text-sm font-avenir-book">{amenity.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.5} className="text-center">
          <button className="btn-dolce-primary">
            Request Meeting Proposal
          </button>
          <p className="text-dolce-gray text-sm mt-4 font-avenir-book">
            Or call our Sales Team at{' '}
            <a href="tel:+19735152000" className="text-dolce-link hover:underline font-avenir-heavy">
              +1 973-515-2000
            </a>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
