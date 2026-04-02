import { motion } from 'framer-motion';
import { Star, Gift, TrendingUp, Award } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const rewardTiers = [
  {
    name: 'Blue',
    points: 'Earn 10 points per $1',
    benefits: ['Free WiFi', 'Member Rates'],
  },
  {
    name: 'Gold',
    points: 'Earn 10 points per $1 + Bonus',
    benefits: ['Late Checkout', 'Preferred Room', 'Rollover Nights'],
  },
  {
    name: 'Platinum',
    points: 'Earn 10 points per $1 + Bonus',
    benefits: ['Early Check-in', 'Suite Upgrades', 'Status Match'],
  },
  {
    name: 'Diamond',
    points: 'Earn 10 points per $1 + Bonus',
    benefits: ['Suite Upgrades', 'Welcome Amenity', 'Concierge'],
  },
];

export default function WyndhamRewards() {
  return (
    <section className="py-24 lg:py-32 bg-dolce-dark-gray">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <SectionReveal direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dolce-red/20 flex items-center justify-center">
                <Award size={24} className="text-dolce-red" />
              </div>
              <span className="text-dolce-red text-sm tracking-[0.2em] uppercase font-avenir-heavy">
                Wyndham Rewards
              </span>
            </div>

            <h2 className="font-avenir-black text-4xl md:text-5xl text-white leading-[1.15] mb-6">
              Earn Points on Every Stay
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8 font-avenir-book">
              Join Wyndham Rewards, the world's most generous hotel rewards program, 
              and start earning points towards free nights, gift cards, and more. 
              As a Dolce Hotels and Resorts guest, every dollar spent brings you closer to your 
              next reward.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Star size={20} className="text-dolce-yellow" />
                <span className="text-white/80 font-avenir-book">Earn 10 points per $1 spent</span>
              </div>
              <div className="flex items-center gap-3">
                <Gift size={20} className="text-dolce-yellow" />
                <span className="text-white/80 font-avenir-book">Redeem for free nights at 9,000+ hotels</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-dolce-yellow" />
                <span className="text-white/80 font-avenir-book">Accelerate your status with every stay</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-dolce-primary bg-dolce-yellow text-dolce-dark-gray hover:bg-dolce-orange">
                Join for Free
              </button>
              <button className="btn-dolce-secondary-knockout">
                Learn More
              </button>
            </div>
          </SectionReveal>

          {/* Right - Tier Cards */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {rewardTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-5 ${
                    tier.name === 'Blue'
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : tier.name === 'Gold'
                      ? 'bg-yellow-500/20 border border-yellow-500/30'
                      : tier.name === 'Platinum'
                      ? 'bg-gray-400/20 border border-gray-400/30'
                      : 'bg-purple-500/20 border border-purple-500/30'
                  }`}
                >
                  <h4 className={`font-avenir-black text-xl mb-2 ${
                    tier.name === 'Blue'
                      ? 'text-blue-400'
                      : tier.name === 'Gold'
                      ? 'text-yellow-400'
                      : tier.name === 'Platinum'
                      ? 'text-gray-300'
                      : 'text-purple-400'
                  }`}>
                    {tier.name}
                  </h4>
                  <p className="text-white/60 text-xs mb-3 font-avenir-book">{tier.points}</p>
                  <ul className="space-y-1">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="text-white/70 text-xs font-avenir-book">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
