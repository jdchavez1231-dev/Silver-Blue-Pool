/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  ShieldCheck,
  UserCheck,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Filter,
  Zap,
  Waves,
} from 'lucide-react';

// --- Sticky Mobile CTA ---
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-silver/20 shadow-2xl px-4 py-3">
    <div className="flex gap-3">
      <a
        href="tel:7025182817"
        className="flex-1 bg-silver/10 border border-silver/30 text-charcoal py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 bg-deep-blue text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
      >
        Get Free Quote
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <img
            src="/logo-horizontal.png"
            alt="Silver Blue Pool Care"
            className="h-10 w-auto transition-all group-hover:scale-105 mix-blend-multiply"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-deep-blue"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-deep-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-deep-blue/90 transition-all hover:shadow-lg active:scale-95"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-charcoal" />
          ) : (
            <Menu className="text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-silver/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-deep-blue py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-deep-blue text-white px-6 py-4 rounded-xl text-center font-bold"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-28 md:pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Optimize — resize to 1440x810px, compress to ~150KB before deploy */}
        <img
          src="/hero-pool.jpeg"
          alt="Luxury Las Vegas Pool"
          className="w-full h-full object-cover"
          width={1440}
          height={810}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4F7A]/65 via-[#1A4F7A]/35 to-pool-blue/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-pool-blue/20 backdrop-blur-sm border border-pool-blue/30 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Las Vegas's Most Trusted Pool Care
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] text-balance">
              Las Vegas Pool Cleaning. <br />
              <span className="text-pool-blue">Crystal Clear Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Las Vegas's most reliable pool cleaning service — fully insured, background-checked technicians, and a <strong className="text-white">100% satisfaction guarantee</strong> on every visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-deep-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Get a Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:7025182817"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                (702) 518-2817
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SVG Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#1C1C1E" />
        </svg>
      </div>
    </section>
  );
};


const Services = () => {
  const services = [
    {
      title: 'Weekly Pool Cleaning',
      desc: 'Comprehensive care including skimming, brushing, vacuuming, chemical balancing, and filter checks.',
      icon: <Droplets className="text-pool-blue" size={32} />,
    },
    {
      title: 'Chemical Balancing',
      desc: 'Precise water testing and pH correction to ensure safe, algae-free water all year round.',
      icon: <Waves className="text-pool-blue" size={32} />,
    },
    {
      title: 'Filter Cleaning & Repair',
      desc: 'Deep cleaning, cartridge inspection, and backwashing to keep your equipment running efficiently.',
      icon: <Filter className="text-pool-blue" size={32} />,
    },
    {
      title: 'Algae Treatment',
      desc: 'Same-day response with shock treatment and full brush-down to restore your pool\'s clarity.',
      icon: <Zap className="text-pool-blue" size={32} />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-deep-blue relative overflow-hidden">
      {/* Faded background image */}
      <div className="absolute inset-0 opacity-10">
        {/* TODO: Optimize — resize to 1920x1080px, compress to ~200KB before deploy */}
        <img
          src="/tech-cleaning-aerial.jpeg"
          alt="Pool technician performing aerial cleaning service in Las Vegas"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Las Vegas Pool Cleaning Services</h2>
          <p className="text-lg text-white/60">
            Professional maintenance tailored to the unique demands of the Las Vegas climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pool-blue/50 hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 bg-pool-blue/20 border border-pool-blue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: 'Get a Quote',
      desc: 'Fill out our quick form and get a transparent price in minutes.',
      num: '01',
    },
    {
      title: 'Schedule Service',
      desc: 'A licensed tech comes to you weekly on a consistent schedule.',
      num: '02',
    },
    {
      title: 'Enjoy Your Pool',
      desc: 'Clean water, handled. Every single week without the stress.',
      num: '03',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Our Las Vegas Pool Service Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm border border-silver/20"
            >
              {/* Oversized decorative numeral */}
              <div className="absolute -top-4 -left-2 text-[150px] font-bold font-display leading-none text-deep-blue/8 select-none pointer-events-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-pool-blue rounded-full mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const pillars = [
    {
      title: 'Licensed & Insured',
      desc: 'Full protection for your home and our technicians on every visit.',
      icon: <ShieldCheck className="text-deep-blue" />,
    },
    {
      title: 'Satisfaction Guarantee',
      desc: 'If it\'s not right, we come back and fix it for free. No questions asked.',
      icon: <CheckCircle2 className="text-deep-blue" />,
    },
    {
      title: 'No Long-Term Contracts',
      desc: 'We earn your trust every week. Cancel or pause anytime.',
      icon: <Calendar className="text-deep-blue" />,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Why Las Vegas Homeowners Choose Silver Blue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">{pillar.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{pillar.title}</h4>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pool-blue/20">
            {/* TODO: Optimize — resize to 800x600px, compress to ~80KB before deploy */}
            <img
              src="/luxury-pool-sunset.jpeg"
              alt="Professional Pool Service"
              className="w-full h-auto"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const GalleryStrip = () => {
  const photos = [
    { src: '/desert-pool-sunset.jpeg', alt: 'Desert pool at sunset' },
    { src: '/before-after.jpeg', alt: 'Pool before and after cleaning' },
    { src: '/pool-vacuum.jpeg', alt: 'Pool vacuum equipment in action' },
    { src: '/chemical-testing.jpeg', alt: 'Chemical testing and balancing' },
    { src: '/underwater-vacuum.jpeg', alt: 'Underwater pool cleaning' },
  ];

  return (
    <section className="py-16 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Pools We've <span className="text-pool-blue">Transformed</span>
        </h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-12" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) rgba(255,255,255,0.05)' }}>
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden relative group"
          >
            {/* TODO: Optimize — resize to 600x400px, compress to ~50KB each before deploy */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const areas = [
    'Summerlin', 'Henderson', 'Anthem', 'North Las Vegas',
    'Southwest Las Vegas', 'Spring Valley', 'Green Valley', 'Rhodes Ranch',
  ];

  return (
    <section id="areas" className="section-padding bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Proudly Serving the Las Vegas Valley</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium hover:bg-white hover:text-deep-blue transition-all cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How much does pool cleaning cost in Las Vegas?',
      a: 'Our weekly pool cleaning service in Las Vegas starts at $160/month for standard pools. That covers full skimming, brushing, vacuuming, chemical testing and balancing, and a filter check every visit. One-time cleans start at $150. Prices vary based on pool size and condition — contact us for a free, no-obligation quote.',
    },
    {
      q: 'How often should I have my pool cleaned in Las Vegas?',
      a: 'In Las Vegas, weekly pool cleaning is strongly recommended. The desert heat, intense UV, and frequent dust storms accelerate chemical loss and algae growth far faster than in milder climates. Skipping a week can turn a clean pool green in as little as 3–5 days during summer. Monthly service is simply not enough in the Las Vegas Valley.',
    },
    {
      q: 'Do you serve Henderson, Summerlin, and other areas outside Las Vegas?',
      a: 'Yes — we serve the entire Las Vegas Valley including Henderson, Summerlin, Anthem, North Las Vegas, Spring Valley, Green Valley, and Rhodes Ranch. If you\'re unsure whether we cover your neighborhood, just call or text us at (702) 518-2817 and we\'ll confirm right away.',
    },
    {
      q: 'Are your pool technicians licensed and insured in Nevada?',
      a: 'Yes. All Silver Blue Pool Care technicians are fully licensed, insured, and background-checked. Nevada requires pool service companies to carry proper licensing, and we stay fully compliant. You\'ll never have an unlicensed stranger working around your home.',
    },
    {
      q: 'Do I have to sign a long-term contract?',
      a: 'No contracts, ever. We earn your business week after week by doing excellent work. You can pause or cancel your service at any time with no fees or penalties. Most of our customers stay with us because they want to — not because they\'re locked in.',
    },
    {
      q: 'My pool has turned green — can you fix it?',
      a: 'Yes. Green pools in Las Vegas are almost always caused by algae from chemical imbalance. We offer same-day or next-day green pool treatment including shock treatment, algaecide application, and a full brush-down. Most pools clear up within 24–72 hours depending on severity. We\'ll also identify why it happened so it doesn\'t come back.',
    },
    {
      q: 'What does a weekly pool cleaning service include?',
      a: 'Every weekly visit includes: skimming the surface for leaves and debris, brushing the walls and steps, vacuuming the floor, testing and balancing all water chemistry (pH, chlorine, alkalinity, stabilizer), inspecting the pump and filter, and emptying skimmer and pump baskets. We log every visit so you always know what was done.',
    },
    {
      q: 'How does Las Vegas heat affect my pool chemistry?',
      a: 'Las Vegas summers are brutal on pool water. High temperatures speed up chlorine burn-off, UV radiation destroys sanitizer faster, and evaporation concentrates minerals and raises pH. A pool that\'s balanced on Monday can be out of range by Thursday. That\'s exactly why consistent weekly service — not monthly or biweekly — is essential for Las Vegas pools.',
    },
    {
      q: 'Can you clean my pool filter?',
      a: 'Yes. Filter cleaning is included in routine inspections, and we offer deep filter cleaning as a standalone service. Cartridge filters typically need cleaning every 4–6 weeks in Las Vegas due to dust and debris. DE and sand filters need backwashing regularly. A dirty filter makes your pump work harder and lets more algae through — it\'s one of the most overlooked parts of pool maintenance.',
    },
    {
      q: 'Do you offer one-time pool cleaning in Las Vegas?',
      a: 'Yes, we offer one-time pool cleans starting at $150. This is popular for homeowners preparing for a party, managing a vacation property, or getting a pool back in shape after a long period without service. No commitment required — but most customers switch to weekly service after seeing the difference.',
    },
    {
      q: 'How do I get started with Silver Blue Pool Care?',
      a: 'It\'s easy. Fill out the quote form on this page or call/text us at (702) 518-2817. We\'ll confirm your service area, give you a price, and schedule your first visit — usually within the same week. No contracts, no setup fees, just clean water.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards, Zelle, Venmo, and cash. Invoices are sent monthly. We never ask for payment upfront — you pay after service is completed.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-charcoal/60">Everything you need to know about pool cleaning service in Las Vegas.</p>
        </div>
        <div className="divide-y divide-silver/30">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex justify-between items-start gap-4 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-lg font-semibold text-charcoal group-hover:text-deep-blue transition-colors pr-4">{faq.q}</span>
                <span className="text-deep-blue font-bold text-2xl leading-none mt-0.5 shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-charcoal/70 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [state, handleFormSubmit] = useForm("mjgpndqb");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({ firstName: '', lastName: '', phone: '', email: '', zipCode: '' });

  const touch = (field: string) => setTouched(p => ({ ...p, [field]: true }));
  const set = (field: string, val: string) => setValues(p => ({ ...p, [field]: val }));

  const errors = {
    firstName: !values.firstName ? 'First name is required.' : '',
    lastName: !values.lastName ? 'Last name is required.' : '',
    phone: !values.phone ? 'Phone number is required.' : '',
    email: !values.email ? 'Email is required.' : '',
    zipCode: !values.zipCode ? 'Zip code is required.' : '',
  };

  const inputClass = "w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all";
  const labelClass = "block text-sm font-bold text-charcoal/70 ml-1";

  return (
    <section id="contact" className="section-padding bg-silver/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote Today</h2>
          <p className="text-xl text-charcoal/60 mb-10">Takes less than 60 seconds. No obligation.</p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Phone className="text-deep-blue" size={20} />
              </div>
              <div>
                <p className="text-sm text-charcoal/50 font-bold uppercase tracking-wider">Call or Text</p>
                {/* TODO: Replace with real phone number */}
                <a href="tel:7025182817" className="text-xl font-bold hover:text-deep-blue transition-colors">(702) 518-2817</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <MapPin className="text-deep-blue" size={20} />
              </div>
              <div>
                <p className="text-sm text-charcoal/50 font-bold uppercase tracking-wider">Service Area</p>
                <p className="text-xl font-bold">Las Vegas, NV & Surrounding Areas</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-deep-blue/5 rounded-2xl border border-deep-blue/10">
            <p className="text-sm font-medium text-deep-blue">
              We respond within 2 hours during business hours · Mon–Sat 7am–6pm
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-silver/10">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-deep-blue mb-2">You're all set!</h3>
                <p className="text-gray-600">We'll reach out within 2 hours. Check your email for confirmation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      required
                      type="text"
                      placeholder="John"
                      value={values.firstName}
                      onChange={e => set('firstName', e.target.value)}
                      onBlur={() => touch('firstName')}
                      className={inputClass}
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    {touched.firstName && errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      required
                      type="text"
                      placeholder="Doe"
                      value={values.lastName}
                      onChange={e => set('lastName', e.target.value)}
                      onBlur={() => touch('lastName')}
                      className={inputClass}
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    {touched.lastName && errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="(702) 000-0000"
                      value={values.phone}
                      onChange={e => set('phone', e.target.value)}
                      onBlur={() => touch('phone')}
                      className={inputClass}
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    {touched.phone && errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={values.email}
                      onChange={e => set('email', e.target.value)}
                      onBlur={() => touch('email')}
                      className={inputClass}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="zipCode" className={labelClass}>Zip Code</label>
                    <input
                      id="zipCode"
                      name="zipCode"
                      required
                      type="text"
                      placeholder="89101"
                      value={values.zipCode}
                      onChange={e => set('zipCode', e.target.value)}
                      onBlur={() => touch('zipCode')}
                      className={inputClass}
                    />
                    <ValidationError prefix="Zip Code" field="zipCode" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    {touched.zipCode && errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="poolSize" className={labelClass}>Pool Size</label>
                    <select
                      id="poolSize"
                      name="poolSize"
                      required
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select size...</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className={labelClass}>Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your pool..."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>
                <button
                  disabled={state.submitting}
                  type="submit"
                  className="w-full bg-deep-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-deep-blue/90 transition-all hover:shadow-xl active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {state.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send My Quote Request'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <img
                src="/logo-horizontal.png"
                alt="Silver Blue Pool Care"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-white/50 leading-relaxed mb-6">
              Las Vegas's most trusted pool cleaning service. Professional, reliable, and fully insured.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/silverbluepools/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Silver Blue Pool Care on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-deep-blue transition-colors"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573260552134"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Silver Blue Pool Care on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-deep-blue transition-colors"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-silver" />
                <a href="tel:7025182817" className="hover:text-white transition-colors">(702) 518-2817</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-silver" />
                <span>Las Vegas, NV</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Promise</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-silver" size={20} />
                <span className="font-bold text-sm uppercase tracking-widest">Licensed & Insured</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Locally operated and dedicated to keeping the Las Vegas Valley swimming in crystal clear water.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Silver Blue Pool Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-deep-blue selection:text-white pb-[72px] md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <GalleryStrip />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
