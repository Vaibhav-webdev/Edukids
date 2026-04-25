'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, HeadphonesIcon, Navigation, Star, } from 'lucide-react';

export const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm5.5-.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.5 26.5 0 0 0 2 12a26.5 26.5 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.5 26.5 0 0 0 22 12a26.5 26.5 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/>
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.9 6.5A1.9 1.9 0 1 1 5 4.6a1.9 1.9 0 0 1 1.9 1.9zM4.5 8.5h3v11h-3zm7 0h2.9v1.5h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6v6.5h-3v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3v6h-3z"/>
  </svg>
);

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* ── Data ── */
const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Education Street,', 'Learning City, 400001'],
    color: 'text-primary',
    bg: 'bg-primary-light',
    border: 'border-primary/20',
    action: { label: 'Get Directions', href: '#' },
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 98765 00001'],
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
    action: { label: 'Call Now', href: 'tel:+919876543210' },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@edukids.com', 'admissions@edukids.com'],
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    action: { label: 'Send Email', href: 'mailto:info@edukids.com' },
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 8 AM – 6 PM', 'Sun: 10 AM – 2 PM'],
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    action: { label: 'Book a Visit', href: '/admissions' },
  },
];

const subjects = [
  'General Enquiry',
  'Admission Query',
  'Program Information',
  'Campus Visit',
  'Career at EduKids',
  'Feedback / Suggestion',
];

const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
  { icon: InstagramIcon, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube', color: 'hover:bg-red-500' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
];

/* ── Floating decorations ── */
const floaters = [
  { emoji: '✏️', style: { top: '12%', left: '3%' }, duration: 4 },
  { emoji: '📞', style: { top: '65%', left: '2%' }, duration: 5 },
  { emoji: '💌', style: { top: '15%', right: '3%' }, duration: 4.5 },
  { emoji: '🌟', style: { bottom: '20%', right: '4%' }, duration: 3.5 },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = (name) =>
    `w-full px-4 py-3.5 rounded-2xl border-2 text-sm font-semibold outline-none transition-all duration-200 bg-white
    ${focusedField === name
      ? 'border-primary ring-4 ring-primary/10 shadow-sm'
      : 'border-gray-100 hover:border-gray-200'
    }`;

  return (
    <div className="pt-10 bg-transparent overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative py-20 bg-[linear-gradient(135deg,#F0EEFF_0%,#FFF9E6_50%,#F0EEFF_100%)] overflow-hidden">
        {/* bg dots */}
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

        {/* blobs */}
        <motion.div
          animate={{ borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 70% 30% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/8 pointer-events-none"
        />
        <motion.div
          animate={{ borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 70% 30% / 40% 50% 60% 50%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-edu-yellow/15 pointer-events-none"
        />

        {/* floating emojis */}
        {floaters.map((f, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl select-none pointer-events-none"
            style={f.style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.65, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.5 + i * 0.15, duration: 0.5 },
              scale: { delay: 0.5 + i * 0.15, duration: 0.5 },
              y: { duration: f.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
            }}
          >
            {f.emoji}
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full mb-5 border border-primary/20">
                <MessageCircle className="w-3.5 h-3.5" />
                We'd Love to Hear From You
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 leading-[1.1] mb-5"
            >
              Get In{' '}
              <span className="relative text-primary inline-block">
                Touch
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 8 Q50 2 100 6 Q150 10 198 4" stroke="#FFC107" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              {' '}With Us
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            >
              Have questions about admissions, programs, or campus visits?
              Our friendly team is here to help every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CONTACT INFO CARDS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-3xl p-6 border-2 ${card.border} shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-default`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`icon-box w-14 h-14 ${card.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${card.color}`} />
                  </motion.div>

                  <h3 className="font-heading font-bold text-gray-900 mb-2">{card.title}</h3>

                  {card.lines.map((line, i) => (
                    <p key={i} className="text-sm text-gray-500 font-semibold leading-relaxed">{line}</p>
                  ))}

                  <a
                    href={card.action.href}
                    className={`inline-flex items-center gap-1.5 mt-4 text-xs font-bold ${card.color} hover:gap-3 transition-all duration-200`}
                  >
                    {card.action.label}
                    <Navigation className="w-3 h-3" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FORM + MAP ═══════════════ */}
      <section className="py-24 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label">Send a Message</span>
              <h2 className="section-title mb-2">We'll Reply Within 24 Hours</h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and our team will get back to you promptly.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success State ── */
                  <motion.div
                    key="success"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-4xl p-10 shadow-card text-center border border-gray-100"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="font-heading font-extrabold text-2xl text-gray-900 mb-2">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      Thank you for reaching out, <strong>{form.name || 'there'}</strong>!<br />
                      Our team will contact you at <strong>{form.email}</strong> within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-4xl p-8 shadow-card border border-gray-100 space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul Sharma' },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                            {f.label} <span className="text-red-400">*</span>
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(f.name)}
                            onBlur={() => setFocusedField(null)}
                            placeholder={f.placeholder}
                            required
                            className={inputCls(f.name)}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+91 98765 43210"
                          className={inputCls('phone')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`${inputCls('subject')} bg-white appearance-none cursor-pointer`}
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        placeholder="Tell us how we can help you or your child..."
                        className={`${inputCls('message')} resize-none`}
                      />
                      <p className="text-xs text-gray-400 mt-1 text-right">
                        {form.message.length} / 500
                      </p>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full flex items-center justify-center gap-2.5 bg-primary text-white py-4 px-6 rounded-2xl font-bold text-sm hover:bg-primary-700 transition-all duration-300 hover:shadow-button disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is safe and will never be shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Right side: Map + Quick Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Map placeholder */}
              <div className="relative h-72 sm:h-80 bg-gradient-to-br from-indigo-100 via-primary-light to-purple-100 rounded-4xl overflow-hidden shadow-card border border-primary/10">
                {/* Map grid lines */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(#5C4FCF 1px, transparent 1px), linear-gradient(90deg, #5C4FCF 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Animated pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-button mb-1">
                      <MapPin className="w-7 h-7 text-white fill-current" />
                    </div>
                    <div className="w-3 h-3 bg-primary/40 rounded-full blur-sm mx-auto" />
                  </motion.div>
                </div>

                {/* Info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-gray-900 text-sm">EduKids Main Campus</p>
                      <p className="text-xs text-gray-500">123 Education Street, Learning City</p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-primary-700 transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      Go
                    </a>
                  </div>
                </motion.div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-edu-yellow fill-current" />
                  <span className="text-xs font-bold text-gray-800">4.9</span>
                  <span className="text-xs text-gray-400">(312 reviews)</span>
                </div>
              </div>

              {/* Support + Social */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Quick Support */}
                <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100">
                  <div className="w-11 h-11 bg-primary-light rounded-2xl flex items-center justify-center mb-4">
                    <HeadphonesIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">Quick Support</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Our support team is available Mon–Sat, 8 AM – 6 PM.
                  </p>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    <Phone className="w-3.5 h-3.5" />
                    +91 98765 43210
                  </a>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100">
                  <div className="w-11 h-11 bg-edu-yellow-light rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-5 h-5 text-edu-yellow-dark" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">Follow Us</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Stay connected for updates, events & fun!
                  </p>
                  <div className="flex gap-2">
                    {socials.map((s) => {
                      const Icon = s.icon;
                      return (
                        <motion.a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.92 }}
                          className={`w-8 h-8 bg-gray-100 ${s.color} rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Campus hours card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-dark-navy rounded-3xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <Clock className="w-6 h-6 text-edu-yellow mb-3" />
                  <h4 className="font-heading font-bold text-base mb-3">Campus Office Hours</h4>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
                      { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
                      { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between">
                        <span className="text-xs text-white/60 font-semibold">{h.day}</span>
                        <span className="text-xs text-white font-bold bg-white/10 px-3 py-1 rounded-full">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
              🏫 12 Campuses Across the City
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to Visit Our Campus?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Schedule a free campus tour and let your child experience the
              EduKids magic firsthand. Meet our teachers, explore the facilities,
              and ask all your questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/admissions"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-edu-yellow text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-edu-yellow-dark transition-all hover:shadow-yellow"
              >
                Book a Campus Tour
                <Navigation className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/15 text-white px-8 py-4 rounded-full font-bold hover:bg-white/25 transition-all border border-white/20"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}