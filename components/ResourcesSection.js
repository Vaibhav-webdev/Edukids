'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookMarked, FileSpreadsheet, PlayCircle, Users } from 'lucide-react';

const resources = [
  {
    icon: BookMarked,
    title: 'Story Books',
    desc: 'Inspire imagination and creativity.',
    count: '20+',
    unit: 'Books',
    color: 'text-green-500',
    bg: 'bg-green-50',
    countColor: 'text-green-600',
    href: '#',
  },
  {
    icon: FileSpreadsheet,
    title: 'Activity Sheets',
    desc: 'Fun worksheets for daily practice.',
    count: '35+',
    unit: 'Sheets',
    color: 'text-red-500',
    bg: 'bg-red-50',
    countColor: 'text-red-600',
    href: '#',
  },
  {
    icon: PlayCircle,
    title: 'Learning Videos',
    desc: 'Engaging videos for concept clarity.',
    count: '50+',
    unit: 'Videos',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    countColor: 'text-amber-600',
    href: '#',
  },
  {
    icon: Users,
    title: 'Parent Guides',
    desc: 'Tips & guides for parents.',
    count: '15+',
    unit: 'Guides',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    countColor: 'text-purple-600',
    href: '#',
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:flex gap-16 items-center">
          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-xs"
          >
            <span className="section-label">Our Resources</span>
            <h2 className="section-title mb-4">
              Learn.{' '}
              <span className="text-primary">Explore.</span>{' '}
              Grow.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Curated resources & tools to support your child's learning journey.
            </p>
            <Link href="#" className="btn-primary">
              Visit Resource Center
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ── Right: Resource Cards ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="card group cursor-pointer"
                >
                  <div className={`icon-box w-14 h-14 ${r.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${r.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">
                    {r.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-extrabold font-heading ${r.countColor}`}>
                      {r.count}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">{r.unit}</span>
                  </div>
                  <div className={`h-1 w-0 group-hover:w-full rounded-full ${r.bg.replace('bg-', 'bg-').replace('-50', '-300')} transition-all duration-500 mt-3`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}