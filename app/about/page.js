'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Target, Eye, Heart, Star, Award,
  Users, BookOpen, Lightbulb, Shield,
} from 'lucide-react';
import {
  Bird, ShieldCheck, School2, Plane, Rocket, Sparkles,
} from 'lucide-react';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const floaters = [
  { icon: Rocket, top: '18%', left: '5%', delay: 0, size: 'text-2xl' },
  { icon: Star, top: '25%', right: '8%', delay: 0.5, size: 'text-xl' },
  { icon: Plane, top: '60%', right: '60%', delay: 1, size: 'text-3xl' },
  { icon: Sparkles, bottom: '5%', left: '8%', delay: 0.8, size: 'text-2xl' },
  { icon: School2, top: '80%', right: '12%', delay: 0.3, size: 'text-2xl' },
  { icon: Bird, top: '14%', right: '34%', delay: 0.3, size: 'text-2xl' },
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We care deeply for every child\'s emotional well-being and growth.', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Progressive teaching methods that spark curiosity and creativity.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Shield, title: 'Safety', desc: 'A secure, nurturing environment where children thrive freely.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: BookOpen, title: 'Excellence', desc: 'Committed to the highest standards in education and care.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Users, title: 'Community', desc: 'Building strong bonds between families, teachers, and students.', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Star, title: 'Inclusion', desc: 'Celebrating diversity and welcoming every child unconditionally.', color: 'text-primary', bg: 'bg-primary-light' },
];

const team = [
  { name: 'Dr. Priya Sharma', role: 'Principal & Founder', emoji: '👩‍🏫', exp: '20+ Years Experience' },
  { name: 'Mr. Rahul Gupta', role: 'Academic Director', emoji: '👨‍💼', exp: '15+ Years Experience' },
  { name: 'Ms. Anita Mehta', role: 'Head of Curriculum', emoji: '👩‍💻', exp: '12+ Years Experience' },
  { name: 'Mr. Vikram Patel', role: 'Student Counselor', emoji: '🧑‍⚕️', exp: '10+ Years Experience' },
];

const milestones = [
  { year: '2000', title: 'Founded', desc: 'EduKids opened its first campus with 50 students.' },
  { year: '2008', title: 'Expansion', desc: 'Grew to 5 campuses across the city.' },
  { year: '2015', title: 'Award', desc: 'Recognized as Best Preschool by National Education Board.' },
  { year: '2020', title: 'Digital', desc: 'Launched digital learning platform during the pandemic.' },
  { year: '2025', title: 'Today', desc: '12 campuses, 7,500+ students, 250+ expert educators.' },
];

export default function AboutPage() {
  return (
    <div className="pt-10 relative">
      {/* ── Hero Banner ── */}
      <section className="py-10 bg-[linear-gradient(135deg,#F0EEFF_0%,#FFF9E6_50%,#F0EEFF_100%)] relative overflow-hidden">
      {floaters.map((f, i) => (
              <motion.div
                key={i}
                className={`absolute ${f.size} select-none pointer-events-none animate-float`}
                style={{
                  top: f.top,
                  bottom: f.bottom,
                  left: f.left,
                  right: f.right,
                  animationDelay: `${f.delay}s`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 0.8 + f.delay * 0.2, duration: 0.5 }}
              >
                <f.icon size={35} color='#e8e8e8' />
              </motion.div>
            ))}
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">About Us</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-5">
              Our Story & <span className="text-primary">Mission</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              For over 25 years, EduKids has been dedicated to nurturing curious minds and
              building confident, compassionate learners ready to change the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, color: 'text-primary', bg: 'bg-primary-light', title: 'Our Mission', desc: 'To provide an exceptional, joyful, and inclusive early education that empowers every child to discover their potential, build character, and develop a lifelong love of learning.' },
              { icon: Eye, color: 'text-edu-yellow', bg: 'bg-edu-yellow-light', title: 'Our Vision', desc: 'To be the most trusted name in early childhood education, shaping a generation of empathetic leaders, creative thinkers, and responsible global citizens.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  whileHover={{ y: -6 }}
                  className="card p-8 border border-gray-100"
                >
                  <div className={`icon-box w-14 h-14 ${item.bg} rounded-3xl mb-5`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 bg-[linear-gradient(180deg,#F8F9FE_0%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card group cursor-default"
                >
                  <div className={`icon-box w-12 h-12 ${v.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">25 Years of Excellence</h2>
          </motion.div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="card p-5 px-10 inline-block text-left max-w-xs border">
                      <p className="text-primary font-extrabold font-heading text-lg mb-1">{m.year}</p>
                      <h4 className="font-heading font-bold text-gray-900 mb-1">{m.title}</h4>
                      <p className="text-sm text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-[linear-gradient(180deg,#F8F9FE_0%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">Meet the Team</span>
            <h2 className="section-title">Our Leadership</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card text-center group cursor-default"
              >
                <div className="w-20 h-20 bg-primary-light rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {t.emoji}
                </div>
                <h4 className="font-heading font-bold text-gray-900 mb-1">{t.name}</h4>
                <p className="text-primary text-sm font-bold mb-1">{t.role}</p>
                <p className="text-xs text-gray-400 font-semibold">{t.exp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-extrabold text-white mb-4">
              Ready to Join the EduKids Family?
            </h2>
            <p className="text-white/70 mb-8">Enroll your child today and give them the best foundation for life.</p>
            <Link href="/admissions" className="inline-flex items-center gap-2 bg-edu-yellow text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-edu-yellow-dark transition-all hover:shadow-yellow hover:-translate-y-1">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}