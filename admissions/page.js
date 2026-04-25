'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Phone, Calendar, Award, Send, ChevronDown } from 'lucide-react';

const steps = [
  { icon: FileText, step: '01', title: 'Submit Application', desc: 'Fill out our simple online form with your child\'s details and preferred program.', color: 'text-primary', bg: 'bg-primary-light' },
  { icon: Phone, step: '02', title: 'Counselor Contact', desc: 'Our team will reach out within 24 hours to discuss your child\'s needs and answer questions.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Calendar, step: '03', title: 'Campus Visit', desc: 'Schedule a personal tour of our facilities and meet our dedicated teaching team.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Award, step: '04', title: 'Enrollment Confirmed', desc: 'Complete the enrollment process and welcome your child to the EduKids family!', color: 'text-rose-500', bg: 'bg-rose-50' },
];

const faqs = [
  { q: 'What is the minimum age for admission?', a: 'We accept children from 2 years of age for our Playgroup program. Each program has specific age requirements as listed on the Programs page.' },
  { q: 'What documents are required for admission?', a: 'Birth certificate, immunization records, recent passport-size photographs, and ID proof of parents/guardians.' },
  { q: 'Is there a waiting list?', a: 'Seats are limited. We recommend applying early. We maintain a waiting list for oversubscribed programs.' },
  { q: 'Do you offer scholarships?', a: 'Yes, we offer merit-based and need-based scholarships. Contact our admissions office for details.' },
  { q: 'What are the school timings?', a: 'Timings vary by program: Playgroup (9–12), Pre-KG (9–1), Kindergarten (9–2), Primary (9–3).' },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', childName: '', program: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Admissions 2025–26</span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Begin Your Child's <span className="text-primary">Journey</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Seats are filling fast. Secure your child's spot in one of our award-winning programs today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple Admission Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 hidden lg:block" />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="card text-center relative z-10"
                >
                  <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}>
                    <Icon className={`w-7 h-7 ${s.color}`} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Application Form + FAQs ── */}
      <section className="py-24 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Apply Now</span>
              <h2 className="section-title mb-8">Admission Application</h2>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="card p-10 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 mb-6">Thank you! Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-4">
                  {[
                    { name: 'name', label: 'Parent / Guardian Name', type: 'text', placeholder: 'Your full name' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                    { name: 'childName', label: "Child's Name", type: 'text', placeholder: "Child's full name" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm font-semibold transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Preferred Program</label>
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm font-semibold transition-all bg-white"
                    >
                      <option value="">Select a program</option>
                      <option>Playgroup (Age 2–3)</option>
                      <option>Pre-Kindergarten (Age 3–4)</option>
                      <option>Kindergarten (Age 4–5)</option>
                      <option>Primary School (Age 6+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea
                      placeholder="Any specific questions or requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm font-semibold transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary py-4 justify-center text-base"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Got Questions?</span>
              <h2 className="section-title mb-8">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="card overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left py-1"
                    >
                      <span className="font-heading font-bold text-gray-900 text-sm pr-4">{faq.q}</span>
                      <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 leading-relaxed pt-3 pb-1">{faq.a}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}