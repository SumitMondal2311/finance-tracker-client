import { FAQs } from '@/components/landing/faqs';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Navbar } from '@/components/landing/navbar';
import { Testimonials } from '@/components/landing/testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Finance Tracker',
};

export default function Landing() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            {/* <Features /> */}
            <HowItWorks />
            <Testimonials />
            <FAQs />
            <Footer />
        </main>
    );
}
