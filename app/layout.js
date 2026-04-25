import { Poppins, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'EduKids — Nurturing Minds, Building Brighter Futures',
  description:
    'A joyful learning place where children grow, explore, and achieve beyond imagination. Trusted by 7,500+ happy parents.',
  keywords: 'kids education, preschool, kindergarten, primary school, playgroup',
  openGraph: {
    title: 'EduKids — Nurturing Minds, Building Brighter Futures',
    description: 'A joyful learning place where children grow, explore, and achieve.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="font-sans pt-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}