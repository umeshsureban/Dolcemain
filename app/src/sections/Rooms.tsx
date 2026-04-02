import { motion } from 'framer-motion';
import { Wifi, Coffee, Monitor, Bath } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const rooms = [
  {
    id: 1,
    name: 'Traditional Guest Room',
    description: 'Perfect for short business trips with king or double queen beds, ergonomic workspace, and premium WiFi.',
    image: '/images/room-double.jpg',
    amenities: ['Ergonomic Desk', 'Premium WiFi', 'Coffee Maker'],
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Spacious suite with separate living area, ideal for extended stays and executive travelers.',
    image: '/images/suite.jpg',
    amenities: ['Separate Living Area', 'Wet Bar', 'Premium WiFi'],
  },
  {
    id: 3,
    name: 'Club Level Access',
    description: 'Enhanced accommodations with exclusive Club Lounge access for breakfast and evening hors d\'oeuvres.',
    image: '/images/club-lounge.jpg',
    amenities: ['Club Lounge Access', 'Complimentary Breakfast', 'Business Center'],
  },
];

const roomFeatures = [
  { icon: Wifi, label: 'Complimentary High-Speed WiFi' },
  { icon: Monitor, label: '42" Flat-Screen TV' },
  { icon: Coffee, label: 'In-Room Coffee & Tea' },
  { icon: Bath, label: 'Premium Bath Amenities' },
];

export default function Rooms() {
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
    <section id="rooms" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-12">
          <p className="text-dolce-red text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy">
            Accommodations
          </p>
          <h2 className="font-avenir-black text-4xl md:text-5xl text-dolce-gray leading-[1.15] mb-4">
            Rooms & Suites
          </h2>
          <p className="text-dolce-gray max-w-2xl mx-auto font-avenir-book">
            Designed for the modern business traveler. All rooms feature ergonomic workspaces, 
            premium WiFi, and the comforts you need for productive stays.
          </p>
        </SectionReveal>

        {/* Room Features */}
        <SectionReveal delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {roomFeatures.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2">
                <feature.icon size={18} className="text-dolce-red" />
                <span className="text-dolce-gray text-sm font-avenir-book">{feature.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Room Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-2 group-hover:text-dolce-red transition-colors">
                {room.name}
              </h3>
              <p className="text-dolce-gray text-sm leading-relaxed mb-4 font-avenir-book">
                {room.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="text-xs bg-dolce-light text-dolce-gray px-3 py-1 font-avenir-book"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended Stay CTA */}
        <SectionReveal delay={0.4} className="mt-16 bg-dolce-light p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-3">
                Extended Stay Rates Available
              </h3>
              <p className="text-dolce-gray mb-6 font-avenir-book">
                Planning a longer assignment in the Parsippany area? Our extended stay 
                packages offer significant savings for stays of 7 nights or more, with 
                additional perks like laundry service and room upgrades.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-dolce-secondary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-8">
              <div className="text-center">
                <p className="font-lampoon text-5xl text-dolce-red">15%</p>
                <p className="text-dolce-gray text-sm font-avenir-book">Off 7+ Nights</p>
              </div>
              <div className="text-center">
                <p className="font-lampoon text-5xl text-dolce-red">25%</p>
                <p className="text-dolce-gray text-sm font-avenir-book">Off 30+ Nights</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
