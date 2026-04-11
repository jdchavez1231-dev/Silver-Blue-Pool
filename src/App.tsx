/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
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
  Star,
  ArrowRight,
  Filter,
  Zap,
  Waves
} from 'lucide-react';

// --- Sticky Mobile CTA ---
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-silver/20 shadow-2xl px-4 py-3">
    <div className="flex gap-3">
      <a
        href="tel:7025550123"
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <img
            src="/logo-horizontal.png"
            alt="Silver Blue Pool Care"
            className={`h-10 w-auto transition-all group-hover:scale-105 ${isScrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-deep-blue ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}
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
            <X className={isScrolled ? 'text-charcoal' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} />
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80&auto=format&fit=crop"
          alt="Luxury Las Vegas Pool"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-deep-blue/20 backdrop-blur-sm border border-deep-blue/30 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Las Vegas's Most Trusted Pool Care
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] text-balance">
            Crystal Clear Pools. <br />
            <span className="text-silver">Every Single Week.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Las Vegas's most reliable pool cleaning service — fully insured, background-checked technicians, and a <strong className="text-white">100% satisfaction guarantee</strong> on every visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-deep-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-deep-blue/90 transition-all hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:7025550123"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              (702) 555-0123
            </a>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-white/70 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-silver" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-silver" />
              <span>Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center gap-2">
              <UserCheck size={16} className="text-silver" />
              <span>Same Technician Every Visit</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-silver" />
              <span>No Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Weekly Pool Cleaning",
      desc: "Comprehensive care including skimming, brushing, vacuuming, chemical balancing, and filter checks.",
      icon: <Droplets className="text-deep-blue" size={32} />,
    },
    {
      title: "Chemical Balancing",
      desc: "Precise water testing and pH correction to ensure safe, algae-free water all year round.",
      icon: <Waves className="text-deep-blue" size={32} />,
    },
    {
      title: "Filter Cleaning & Repair",
      desc: "Deep cleaning, cartridge inspection, and backwashing to keep your equipment running efficiently.",
      icon: <Filter className="text-deep-blue" size={32} />,
    },
    {
      title: "Algae Treatment",
      desc: "Same-day response with shock treatment and full brush-down to restore your pool's clarity.",
      icon: <Zap className="text-deep-blue" size={32} />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything Your Pool Needs</h2>
          <p className="text-lg text-charcoal/60">
            Professional maintenance tailored to the unique demands of the Las Vegas climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-silver/5 border border-silver/20 hover:border-deep-blue/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-charcoal/60 leading-relaxed text-sm">
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
      title: "Get a Quote",
      desc: "Fill out our quick form and get a transparent price in minutes.",
      num: "01",
    },
    {
      title: "Schedule Service",
      desc: "A licensed tech comes to you weekly on a consistent schedule.",
      num: "02",
    },
    {
      title: "Enjoy Your Pool",
      desc: "Clean water, handled. Every single week without the stress.",
      num: "03",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple. Reliable. Done.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-silver/30 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-deep-blue text-white rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg shadow-deep-blue/20">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-charcoal/60 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const pillars = [
    {
      title: "Licensed & Insured",
      desc: "Full protection for your home and our technicians on every visit.",
      icon: <ShieldCheck className="text-deep-blue" />,
    },
    {
      title: "Same Tech Every Visit",
      desc: "Consistency matters. You'll always know who is in your backyard.",
      icon: <UserCheck className="text-deep-blue" />,
    },
    {
      title: "Satisfaction Guarantee",
      desc: "If it's not right, we come back and fix it for free. No questions asked.",
      icon: <CheckCircle2 className="text-deep-blue" />,
    },
    {
      title: "No Long-Term Contracts",
      desc: "We earn your trust every week. Cancel or pause anytime.",
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
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80&auto=format&fit=crop"
              alt="Professional Pool Technician"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-silver/10 hidden md:block">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="font-bold">4.9/5 Rating</span>
            </div>
            <p className="text-sm text-charcoal/60 italic">"The most reliable service in Summerlin."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "$160",
      period: "/mo",
      features: [
        "Weekly cleaning",
        "Chemical check & balance",
        "Filter inspection",
        "Skimming & brushing",
        "Vacuuming as needed"
      ],
      cta: "Choose Standard",
      popular: false,
    },
    {
      name: "Premium",
      price: "$195",
      period: "/mo",
      features: [
        "Everything in Standard",
        "Monthly deep clean",
        "Priority scheduling",
        "Tile scrubbing",
        "Equipment health report"
      ],
      cta: "Choose Premium",
      popular: true,
    },
    {
      name: "One-Time Clean",
      price: "$175",
      period: " flat",
      features: [
        "Full deep clean",
        "Chemical balance",
        "Filter check",
        "No commitment",
        "Perfect for parties"
      ],
      cta: "Book One-Time",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-silver/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-charcoal/60">Prices may vary based on pool size. Get an exact quote below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl border ${plan.popular ? 'bg-white border-deep-blue shadow-2xl scale-105 z-10' : 'bg-white/50 border-silver/20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-deep-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-charcoal/60">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-deep-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${plan.popular ? 'bg-deep-blue text-white hover:bg-deep-blue/90' : 'bg-silver/20 text-charcoal hover:bg-silver/30'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const areas = [
    "Summerlin", "Henderson", "Anthem", "North Las Vegas", 
    "Southwest Las Vegas", "Spring Valley", "Green Valley", "Rhodes Ranch"
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

const Testimonials = () => {
  const reviews = [
    {
      name: "Maria T.",
      area: "Summerlin",
      quote: "Silver Blue has been taking care of our pool for 6 months. Always on time, always clean. Best decision we made.",
    },
    {
      name: "James R.",
      area: "Henderson",
      quote: "Finally found a pool company that actually shows up consistently. Highly recommend.",
    },
    {
      name: "Sandra K.",
      area: "Anthem",
      quote: "The water is always perfect. Our kids swim every weekend without issues. Worth every penny.",
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our Clients Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-silver/5 border border-silver/20">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed text-charcoal/80">
                "{review.quote}"
              </p>
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-charcoal/60 text-sm">{review.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

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
                <a href="tel:7025550123" className="text-xl font-bold hover:text-deep-blue transition-colors">(702) 555-0123</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Mail className="text-deep-blue" size={20} />
              </div>
              <div>
                <p className="text-sm text-charcoal/50 font-bold uppercase tracking-wider">Email Us</p>
                <p className="text-xl font-bold">service@silverbluepool.com</p>
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
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Quote Request Sent!</h3>
                <p className="text-charcoal/60 mb-8">Thank you for reaching out. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-deep-blue font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John"
                      className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">Last Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(702) 000-0000"
                      className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">Zip Code</label>
                    <input 
                      required
                      type="text" 
                      placeholder="89101"
                      className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/70 ml-1">Pool Size</label>
                    <select className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all appearance-none">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal/70 ml-1">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your pool..."
                    className="w-full px-5 py-4 bg-silver/5 border border-silver/20 rounded-xl focus:outline-none focus:border-deep-blue focus:ring-4 focus:ring-deep-blue/5 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full bg-deep-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-deep-blue/90 transition-all hover:shadow-xl active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {formState === 'submitting' ? (
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
            <a href="#" className="flex items-center mb-6">
              <img
                src="/logo-horizontal.png"
                alt="Silver Blue Pool Care"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/50 leading-relaxed mb-6">
              Las Vegas's most trusted pool cleaning service. Professional, reliable, and fully insured.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-deep-blue transition-colors cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-deep-blue transition-colors cursor-pointer">
                <span className="text-xs font-bold">IG</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-silver" />
                <a href="tel:7025550123" className="hover:text-white transition-colors">(702) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-silver" />
                <span>service@silverbluepool.com</span>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
        <Pricing />
        <ServiceAreas />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
