'use client';

import { motion } from 'framer-motion';
import { Monitor, Dumbbell, Palette, User } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Modern Classrooms',
    subtitle: 'Smart & interactive learning spaces.',
    bg: 'bg-blue-50',
    color: 'text-blue-500',
    iconBg: 'bg-blue-100',
    border: 'border-blue-200',
  },
  {
    icon: Dumbbell,
    title: 'Activity Based Learning',
    subtitle: 'Practical education for real-world skills.',
    bg: 'bg-green-50',
    color: 'text-green-500',
    iconBg: 'bg-green-100',
    border: 'border-green-200',
  },
  {
    icon: Palette,
    title: 'Creative Development',
    subtitle: 'Encouraging talent and imagination.',
    bg: 'bg-amber-50',
    color: 'text-amber-500',
    iconBg: 'bg-amber-100',
    border: 'border-amber-200',
  },
  {
    icon: User,
    title: 'Individual Attention',
    subtitle: 'Personalized care for every child.',
    bg: 'bg-rose-50',
    color: 'text-rose-500',
    iconBg: 'bg-rose-100',
    border: 'border-rose-200',
  },
];

export default function FeaturesStrip() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`flex items-start gap-4 p-5 rounded-3xl border ${f.border} ${f.bg} cursor-default transition-shadow duration-300 hover:shadow-card-hover`}
              >
                <div className={`icon-box ${f.iconBg} flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}