import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
// import { FormEvent } from 'react';
import type { FormEvent } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '199 Smith Road, Parsippany, NJ 07054',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 973-515-2000',
    href: 'tel:+19735152000',
  },
  {
    icon: Mail,
    label: 'Reservations',
    value: 'reservations@dolcehotels.com',
    href: 'mailto:reservations@dolcehotels.com',
  },
  {
    icon: Mail,
    label: 'Sales & Events',
    value: 'sales@dolcehotels.com',
    href: 'mailto:sales@dolcehotels.com',
  },
];

const hours = [
  { label: 'Front Desk', value: '24 Hours' },
  { label: 'Check-in', value: '3:00 PM' },
  { label: 'Check-out', value: '12:00 PM' },
];

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // TODO: wire up form submission
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-dolce-red text-sm tracking-[0.2em] uppercase mb-4 font-avenir-heavy">
            Contact Us
          </p>
          <h2 className="font-avenir-black text-4xl md:text-5xl text-dolce-gray leading-[1.15] mb-4">
            Get in Touch
          </h2>
          <p className="text-dolce-gray max-w-xl mx-auto font-avenir-book">
            Have questions about reservations, corporate rates, or event planning? 
            Our team is here to help.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SectionReveal direction="left">
            <div className="bg-dolce-light p-8 lg:p-10">
              <h3 className="font-avenir-black text-2xl text-dolce-gray mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-dolce-red" />
                    </div>
                    <div>
                      <p className="text-dolce-gray text-xs uppercase tracking-wider mb-1 font-avenir-heavy">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-dolce-gray hover:text-dolce-red transition-colors font-avenir-book"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dolce-gray font-avenir-book">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-dolce-gray/20 pt-6">
                <h4 className="text-dolce-gray font-avenir-heavy mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-dolce-red" />
                  Hours
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {hours.map((hour) => (
                    <div key={hour.label}>
                      <p className="text-dolce-gray text-xs mb-1 font-avenir-book">{hour.label}</p>
                      <p className="text-dolce-gray text-sm font-avenir-heavy">{hour.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Quick Contact Form */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="bg-dolce-dark-gray p-8 lg:p-10">
              <h3 className="font-avenir-black text-2xl text-white mb-2">Send Us a Message</h3>
              <p className="text-white/60 text-sm mb-8 font-avenir-book">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block font-avenir-heavy">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-dolce-red transition-colors font-avenir-book"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block font-avenir-heavy">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-dolce-red transition-colors font-avenir-book"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block font-avenir-heavy">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-dolce-red transition-colors font-avenir-book"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block font-avenir-heavy">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-dolce-red transition-colors cursor-pointer font-avenir-book">
                    <option value="" className="bg-dolce-dark-gray">Select inquiry type</option>
                    <option value="reservation" className="bg-dolce-dark-gray">Room Reservation</option>
                    <option value="corporate" className="bg-dolce-dark-gray">Corporate Rates</option>
                    <option value="meetings" className="bg-dolce-dark-gray">Meetings & Events</option>
                    <option value="extended" className="bg-dolce-dark-gray">Extended Stay</option>
                    <option value="other" className="bg-dolce-dark-gray">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block font-avenir-heavy">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-dolce-red transition-colors resize-none font-avenir-book"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-dolce-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
