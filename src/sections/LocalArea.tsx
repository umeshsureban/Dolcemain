import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Car, Plane, Train, ShoppingBag, TreePine } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const transportOptions = [
  {
    icon: Plane,
    name: 'Newark Airport (EWR)',
    distance: '25 minutes',
    description: 'Major international airport with domestic and global connections',
  },
  {
    icon: Car,
    name: 'I-80 & I-287 Interchange',
    distance: '2 minutes',
    description: 'Direct highway access to NYC, NJ, and beyond',
  },
  {
    icon: Train,
    name: 'NJ Transit / Amtrak',
    distance: '15 minutes',
    description: 'Rail connections to NYC, Philadelphia, and Washington DC',
  },
];

const nearbyAttractions = [
  {
    icon: ShoppingBag,
    name: 'The Mall at Short Hills',
    distance: '20 minutes',
    description: 'Luxury shopping destination',
  },
  {
    icon: TreePine,
    name: 'Morristown National Park',
    distance: '15 minutes',
    description: 'Historic sites and outdoor recreation',
  },
  {
    icon: MapPin,
    name: 'Downtown Morristown',
    distance: '12 minutes',
    description: 'Dining, entertainment, and culture',
  },
];

export default function LocalArea() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="local-area"
      ref={ref}
      className="py-24 lg:py-32 bg-dolce-light overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-dolce-red text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy">
            Local Area
          </p>
          <h2 className="font-avenir-black text-4xl md:text-5xl text-dolce-gray leading-[1.15] mb-4">
            Explore Parsippany & Beyond
          </h2>
          <p className="text-dolce-gray max-w-2xl mx-auto font-avenir-book">
            Dolce Hotels and Resorts offers convenient access to major corporate campuses, 
            transportation hubs, and local attractions in the heart of Morris County.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Transport Options */}
          <SectionReveal direction="left">
            <div className="bg-white p-8">
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-6 flex items-center gap-3">
                <Car size={24} className="text-dolce-red" />
                Transportation
              </h3>
              <div className="space-y-6">
                {transportOptions.map((option, index) => (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-dolce-light flex items-center justify-center flex-shrink-0">
                      <option.icon size={20} className="text-dolce-red" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-dolce-gray font-avenir-heavy">{option.name}</h4>
                        <span className="text-dolce-red text-sm font-avenir-heavy">{option.distance}</span>
                      </div>
                      <p className="text-dolce-gray text-sm font-avenir-book">{option.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Nearby Attractions */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="bg-white p-8">
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-6 flex items-center gap-3">
                <MapPin size={24} className="text-dolce-red" />
                Nearby Attractions
              </h3>
              <div className="space-y-6">
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-dolce-light flex items-center justify-center flex-shrink-0">
                      <attraction.icon size={20} className="text-dolce-red" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-dolce-gray font-avenir-heavy">{attraction.name}</h4>
                        <span className="text-dolce-red text-sm font-avenir-heavy">{attraction.distance}</span>
                      </div>
                      <p className="text-dolce-gray text-sm font-avenir-book">{attraction.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Image */}
        <SectionReveal delay={0.4} className="mt-12">
          <div className="relative overflow-hidden aspect-[21/9]">
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <img
                src="/images/lobby.jpg"
                alt="Dolce Hotels and Resorts Lobby"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
