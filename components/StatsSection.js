'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Quote, Trophy, Globe2, Smile, Users } from 'lucide-react';

/* ── Animated counter ── */
function CountUp({ to, duration = 2, suffix = '+' }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  function startCount() {
    if (started.current) return;
    started.current = true;
    animate(count, to, { duration, ease: 'easeOut' });
    const unsub = rounded.on('change', setDisplay);
    setTimeout(unsub, duration * 1000 + 200);
  }

  return (
    <motion.span
      onViewportEnter={startCount}
      viewport={{ once: true }}
    >
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

const stats = [
  { icon: Trophy, value: 25, label: 'Years of Excellence', suffix: '+' },
  { icon: Globe2, value: 12, label: 'Campuses Worldwide', suffix: '+' },
  { icon: Smile, value: 7500, label: 'Happy Students', suffix: '+' },
  { icon: Users, value: 250, label: 'Expert Educators', suffix: '+' },
];

const testimonials = [
  {
    quote:
      'EduKids has been a wonderful experience for my child. The teachers are caring, and the environment is perfect for learning.',
    name: 'Anita Sharma',
    role: 'Parent of Aarav (Grade 2)',
    emoji: '👩',
  },
  {
    quote:
      'My daughter loves going to school every day. The activities and curriculum are perfectly balanced for her age.',
    name: 'Rahul Verma',
    role: 'Parent of Priya (Pre-KG)',
    emoji: '👨',
  },
  {
    quote:
      'The holistic approach to education at EduKids has helped my son develop confidence and a love for learning.',
    name: 'Meera Patel',
    role: 'Parent of Arjun (Grade 1)',
    emoji: '👩‍🦱',
  },
];

export default function StatsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-dark-section relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-edu-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-12 items-center">
          {/* ── Stats Grid ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 border border-white/10 cursor-default"
                >
                  <Icon className="w-6 h-6 text-edu-yellow mb-3" />
                  <p className="text-3xl font-extrabold font-heading text-white leading-none mb-1">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-white/60 font-semibold">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Testimonial Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Quote icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Testimonial text (animated) */}
              <div className="min-h-[120px] relative overflow-hidden">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      opacity: i === activeTestimonial ? 1 : 0,
                      y: i === activeTestimonial ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`${i === activeTestimonial ? 'relative' : 'absolute inset-0'}`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-xl">
                        {t.emoji}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? 'w-6 h-2 bg-primary'
                        : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}