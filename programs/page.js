'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Star, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const programs = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    tagline: 'Where Every Day is an Adventure',
    age: '2 – 3 Years',
    emoji: '🧸',
    hours: '9 AM – 12 PM',
    capacity: '15 children per class',
    rating: '4.9',
    gradient: 'from-green-400 to-emerald-500',
    lightBg: 'bg-green-50',
    borderColor: 'border-green-200',
    tagColor: 'bg-green-100 text-green-700',
    btnColor: 'bg-green-500 hover:bg-green-600',
    desc: 'Our Playgroup program is the perfect gentle introduction to the world of structured learning. Through play-based activities, sensory exploration, and creative expression, toddlers build social skills, emotional intelligence, and early motor development in a loving, safe environment.',
    curriculum: [
      'Sensory Play & Exploration',
      'Music, Rhythm & Movement',
      'Storytime & Early Language',
      'Arts, Crafts & Creativity',
      'Outdoor Play & Nature',
      'Social Skills & Sharing',
    ],
  },
  {
    id: 'prekg',
    name: 'Pre-Kindergarten',
    tagline: 'Building Curious Little Minds',
    age: '3 – 4 Years',
    emoji: '🎨',
    hours: '9 AM – 1 PM',
    capacity: '18 children per class',
    rating: '4.8',
    gradient: 'from-rose-400 to-pink-500',
    lightBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    tagColor: 'bg-rose-100 text-rose-700',
    btnColor: 'bg-rose-500 hover:bg-rose-600',
    desc: 'Pre-Kindergarten bridges the gap between play and structured learning. Children explore letters, numbers, colors, and shapes through hands-on activities that make learning irresistible. Our focus on creativity and self-expression helps children develop confidence.',
    curriculum: [
      'Pre-Reading & Phonics',
      'Number Concepts 1–20',
      'Science Experiments',
      'Art & Craft Projects',
      'Yoga & Movement',
      'Social-Emotional Learning',
    ],
  },
  {
    id: 'kg',
    name: 'Kindergarten',
    tagline: 'Ready, Set, Learn!',
    age: '4 – 5 Years',
    emoji: '📚',
    hours: '9 AM – 2 PM',
    capacity: '20 children per class',
    rating: '4.9',
    gradient: 'from-amber-400 to-orange-500',
    lightBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
    btnColor: 'bg-amber-500 hover:bg-amber-600',
    desc: 'Kindergarten is where academic foundations are truly built. Children develop reading fluency, mathematical reasoning, and scientific curiosity through a rich, structured curriculum. Project-based learning encourages critical thinking and teamwork.',
    curriculum: [
      'Reading & Writing Fluency',
      'Mathematics & Logic',
      'Environmental Science',
      'Computer Fundamentals',
      'Physical Education',
      'Music & Dance',
    ],
  },
  {
    id: 'primary',
    name: 'Primary School',
    tagline: 'Future Leaders Start Here',
    age: '6+ Years',
    emoji: '🏫',
    hours: '9 AM – 3 PM',
    capacity: '25 children per class',
    rating: '4.8',
    gradient: 'from-indigo-400 to-violet-500',
    lightBg: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    tagColor: 'bg-indigo-100 text-indigo-700',
    btnColor: 'bg-indigo-500 hover:bg-indigo-600',
    desc: 'Our Primary School program offers a comprehensive curriculum aligned with national standards while fostering creativity, critical thinking, and character development. With small class sizes and individualized attention, every child reaches their fullest potential.',
    curriculum: [
      'English Language & Literature',
      'Mathematics & Problem Solving',
      'Science & Technology (STEM)',
      'Social Studies & History',
      'Arts, Music & Sports',
      'Leadership & Values Education',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Our Programs</span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-5">
              Programs Designed for{' '}
              <span className="text-primary">Every Stage</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From early learners to future leaders, we provide the right foundation
              for every step of your child's extraordinary journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              {/* Image side */}
              <div className={`h-80 bg-gradient-to-br ${p.gradient} rounded-4xl flex items-center justify-center relative overflow-hidden shadow-xl`}>
                <motion.span
                  className="text-9xl select-none"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {p.emoji}
                </motion.span>
                {/* overlay badges */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-edu-yellow fill-current" /> {p.rating}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className={`${p.tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    Age {p.age}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${p.tagColor}`}>
                  {p.tagline}
                </span>
                <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4">{p.name}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                    <Clock className="w-4 h-4 text-primary" /> {p.hours}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                    <Users className="w-4 h-4 text-primary" /> {p.capacity}
                  </div>
                </div>

                {/* Curriculum */}
                <div className={`${p.lightBg} rounded-3xl p-5 mb-6`}>
                  <h4 className="font-heading font-bold text-gray-900 text-sm mb-3">Curriculum Highlights</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {p.curriculum.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> {c}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/admissions"
                  className={`inline-flex items-center gap-2 ${p.btnColor} text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-edu-yellow">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4">Not Sure Which Program?</h2>
            <p className="text-gray-700 mb-8">Book a free consultation with our counselors. We'll help you find the perfect fit for your child.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all hover:-translate-y-1">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:-translate-y-1">
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}