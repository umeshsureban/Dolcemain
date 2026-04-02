import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Utensils, Coffee } from 'lucide-react';

export default function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="dining"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <img
          src="/images/dining.jpg"
          alt="Dolce Hotels and Resorts Dining"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy"
          >
            Nourishment
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-lampoon text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6 lowercase"
          >
            savor the moment
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg leading-relaxed mb-8 font-avenir-book"
          >
            Whether you need a quick breakfast before meetings, a working lunch, 
            or a relaxed dinner after a long day, our on-site restaurant and bar 
            offer convenient, quality dining options for busy professionals.
          </motion.p>

          {/* Dining Options */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <Coffee size={24} className="text-dolce-yellow mx-auto mb-3" />
              <h3 className="text-white font-avenir-heavy mb-2">Breakfast</h3>
              <p className="text-white/60 text-sm font-avenir-book">6:00 AM - 10:00 AM</p>
              <p className="text-white/60 text-sm font-avenir-book">Club Lounge available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <Utensils size={24} className="text-dolce-yellow mx-auto mb-3" />
              <h3 className="text-white font-avenir-heavy mb-2">Lunch & Dinner</h3>
              <p className="text-white/60 text-sm font-avenir-book">11:00 AM - 10:00 PM</p>
              <p className="text-white/60 text-sm font-avenir-book">Full menu & bar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <Clock size={24} className="text-dolce-yellow mx-auto mb-3" />
              <h3 className="text-white font-avenir-heavy mb-2">Room Service</h3>
              <p className="text-white/60 text-sm font-avenir-book">6:00 AM - 11:00 PM</p>
              <p className="text-white/60 text-sm font-avenir-book">In-room dining</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button className="btn-dolce-primary">
              View Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
