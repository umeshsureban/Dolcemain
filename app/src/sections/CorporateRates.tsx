import { motion } from 'framer-motion';
import { Building2, Users, FileText, Percent, Check } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const corporateBenefits = [
  'Negotiated rates for your organization',
  'Complimentary room upgrades (subject to availability)',
  'Flexible cancellation policies',
  'Direct billing options available',
  'Dedicated account management',
  'Complimentary WiFi and breakfast',
];

const lnrBenefits = [
  'Significant savings on 7+ night stays',
  'Weekly housekeeping service',
  'On-site laundry facilities',
  'Kitchenette options available',
  'Parking included',
  'Access to fitness center & pool',
];

export default function CorporateRates() {
  return (
    <section id="corporate" className="py-24 lg:py-32 bg-dolce-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-dolce-red text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy">
            Corporate Solutions
          </p>
          <h2 className="font-avenir-black text-4xl md:text-5xl text-dolce-gray leading-[1.15] mb-4">
            Corporate Rates & Extended Stay
          </h2>
          <p className="text-dolce-gray max-w-2xl mx-auto font-avenir-book">
            Partner with Dolce Hotels and Resorts for your corporate travel needs. We offer 
            competitive rates and personalized service for businesses of all sizes.
          </p>
        </SectionReveal>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Corporate Rates Card */}
          <SectionReveal direction="left">
            <div className="bg-white p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-dolce-red/10 flex items-center justify-center">
                  <Building2 size={24} className="text-dolce-red" />
                </div>
                <div>
                  <h3 className="font-avenir-black text-2xl text-dolce-gray">Corporate Rates</h3>
                  <p className="text-dolce-gray text-sm font-avenir-book">For Business Travelers</p>
                </div>
              </div>

              <p className="text-dolce-gray mb-6 font-avenir-book">
                Establish a corporate account with Dolce Hotels and Resorts and enjoy preferential 
                rates, flexible terms, and dedicated support for your organization's 
                travel needs.
              </p>

              <ul className="space-y-3 mb-8">
                {corporateBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={18} className="text-dolce-red flex-shrink-0 mt-0.5" />
                    <span className="text-dolce-gray text-sm font-avenir-book">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="btn-dolce-primary w-full flex items-center justify-center gap-2">
                <FileText size={16} />
                Request Corporate Rate Proposal
              </button>
            </div>
          </SectionReveal>

          {/* LNR / Extended Stay Card */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="bg-white p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-dolce-red/10 flex items-center justify-center">
                  <Users size={24} className="text-dolce-red" />
                </div>
                <div>
                  <h3 className="font-avenir-black text-2xl text-dolce-gray">Extended Stay (LNR)</h3>
                  <p className="text-dolce-gray text-sm font-avenir-book">7+ Nights</p>
                </div>
              </div>

              <p className="text-dolce-gray mb-6 font-avenir-book">
                For project assignments, training programs, or relocations, our extended 
                stay packages provide the comforts of home with hotel convenience at 
                exceptional rates.
              </p>

              <ul className="space-y-3 mb-8">
                {lnrBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={18} className="text-dolce-red flex-shrink-0 mt-0.5" />
                    <span className="text-dolce-gray text-sm font-avenir-book">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="btn-dolce-secondary w-full flex items-center justify-center gap-2">
                <Percent size={16} />
                Get Extended Stay Quote
              </button>
            </div>
          </SectionReveal>
        </div>

        {/* Contact CTA */}
        <SectionReveal delay={0.4} className="mt-12 text-center">
          <p className="text-dolce-gray mb-4 font-avenir-book">
            Have questions about corporate rates or extended stays?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+19735152000"
              className="text-dolce-link hover:text-dolce-red transition-colors font-avenir-heavy"
            >
              Call +1 973-515-2000
            </a>
            <span className="text-dolce-gray">|</span>
            <a
              href="mailto:sales@dolcehotels.com"
              className="text-dolce-link hover:text-dolce-red transition-colors font-avenir-heavy"
            >
              sales@dolcehotels.com
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
