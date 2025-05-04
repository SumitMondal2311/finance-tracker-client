import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const navList = [
    {
        link: '#feature-section',
        label: 'Features',
    },
    {
        link: '#how-it-work-section',
        label: 'How it Works?',
    },
    {
        link: '#testimonial-section',
        label: 'Testimonials',
    },
    {
        link: '#faq-section',
        label: 'FAQs',
    },
];

export function Navbar() {
    return (
        <section className="fixed top-0 left-0 w-full pt-6 px-4 z-10">
            <div className="container mx-auto bg-background p-6 border rounded-md shadow-md flex items-center justify-between">
                <Link href="#" className="text-lg lg:text-2xl font-mono font-bold">
                    Finance Tracker
                </Link>
                <div className="hidden lg:flex gap-4 lg:gap-8">
                    {navList.map((nav, idx) => (
                        <Link
                            key={idx}
                            href={nav.link}
                            className="hover:text-primary transition-colors"
                        >
                            {nav.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex gap-2 lg:gap-4">
                    <Link
                        href="/auth/login"
                        className={cn('cursor-pointer', buttonVariants({ variant: 'outline' }))}
                    >
                        Log in
                    </Link>
                    <Link href="/auth/signup" className={cn('cursor-pointer', buttonVariants())}>
                        Sign up
                    </Link>
                </div>
                <span
                    id="menu-btn"
                    className="lg:hidden bg-accent text-accent-foreground p-2 rounded-full"
                >
                    <Menu className="size-5" />
                </span>
            </div>
        </section>
    );
}
