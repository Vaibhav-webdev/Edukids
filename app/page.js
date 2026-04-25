import HeroSection from '../components/HeroSection';
import FeaturesStrip from '../components/FeaturesStrip';
import ProgramsSection from '../components/ProgramsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ResourcesSection from '../components/ResourcesSection';
import StatsSection from '../components/StatsSection';
import AdmissionsCTA from '../components/AdmissionsCTA';

export const metadata = {
  title: 'EduKids — Nurturing Minds, Building Brighter Futures',
  description:
    'A joyful learning place where children grow, explore, and achieve beyond imagination. Trusted by 7,500+ happy parents.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesStrip />
      <ProgramsSection />
      <WhyChooseUs />
      <ResourcesSection />
      <StatsSection />
      <AdmissionsCTA />
    </>
  );
}