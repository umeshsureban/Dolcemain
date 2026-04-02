import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, MapPin, Building2, Briefcase } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Video with Parallax - Dolce branded hero */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <video
          src="/images/Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-end justify-between gap-8"
          >
            {/* Left: main content */}
            <div className="max-w-3xl">
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy"
            >
              The Art of Inspiration
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-lampoon text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6 lowercase"
            >
              inspire discovery
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl font-avenir-book"
            >
              Just 15 minutes from Honeywell, ADP, and Pfizer. Dolce Hotels and Resorts 
              offers corporate travelers seamless access to Parsippany's business district 
              with premium amenities and extended-stay comfort.
            </motion.p>

            {/* Corporate Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2">
                <Building2 size={18} className="text-dolce-yellow" />
                <span className="text-white text-sm font-avenir-book">Corporate Rates Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2">
                <Briefcase size={18} className="text-dolce-yellow" />
                <span className="text-white text-sm font-avenir-book">Pharma-Compliant Meetings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2">
                <MapPin size={18} className="text-dolce-yellow" />
                <span className="text-white text-sm font-avenir-book">I-80 & I-287 Access</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#rooms')}
                className="btn-dolce-primary"
              >
                Book Your Stay
              </button>
              <button
                onClick={() => scrollToSection('#corporate')}
                className="btn-dolce-secondary-knockout"
              >
                Corporate Rates
              </button>
            </motion.div>
            </div>

            {/* Right: Google Reviews Badge */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:inline-flex flex-shrink-0 items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2"
            >
              <div className="flex items-center gap-1">
                <Star size={16} className="text-dolce-yellow fill-dolce-yellow" />
                <Star size={16} className="text-dolce-yellow fill-dolce-yellow" />
                <Star size={16} className="text-dolce-yellow fill-dolce-yellow" />
                <Star size={16} className="text-dolce-yellow fill-dolce-yellow" />
                <Star size={16} className="text-dolce-yellow fill-dolce-yellow" />
              </div>
              <span className="text-white text-sm font-avenir-heavy">4.2</span>
              <span className="text-white/70 text-sm">|</span>
              <span className="text-white/70 text-sm font-avenir-book">1,847 Google Reviews</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
