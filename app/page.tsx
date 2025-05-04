'use client';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-is-mobile';
import {
    ArrowRight,
    Bell,
    Brain,
    ChartLine,
    Loader2,
    Menu,
    Pen,
    PiggyBank,
    Wallet,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Landing() {
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Loader2 className="animate-spin" />
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col">
            <nav className="fixed top-0 h-18 w-full bg-background flex items-center justify-between px-4 border-b">
                <span className="flex gap-2 items-center">
                    <PiggyBank />
                    <h1 className="font-mono font-bold text-lg">Finance Tracker</h1>
                </span>
                {isMobile ? (
                    <Menu />
                ) : (
                    <>
                        <ul className="flex items-center gap-8 text-gray-400">
                            {['Features', 'How it works?', 'Testimonials', 'FAQs'].map(
                                (label, idx) => (
                                    <li
                                        key={idx}
                                        className="hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        {label}
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="cursor-pointer">
                                Log in
                            </Button>
                            <Button className="cursor-pointer">Sign up</Button>
                        </div>
                    </>
                )}
            </nav>

            <main className="mt-24 flex flex-col justify-center">
                <section className="w-full flex items-center justify-between gap-4 px-4 md:px-20 py-10">
                    <div className="w-[40rem] space-y-4">
                        <h2 className="font-mono font-bold text-4xl">
                            Take Control of Your Financial Life
                        </h2>
                        <p className="text-gray-400">
                            Track expenses, manage budgets, and achieve your financial goals with
                            our intuitive and powerful finance tracking platform.
                        </p>
                        <Button className="cursor-pointer">
                            Get started <ArrowRight />
                        </Button>
                    </div>
                    {isMobile ? null : <div className="h-180 w-[60rem] border rounded-md"></div>}
                </section>
                <section className="w-full text-center flex flex-col items-center px-4 py-10 gap-4">
                    <h2 className="font-mono font-bold text-2xl">
                        Smart Features for Better Financial Management
                    </h2>
                    <p className="text-gray-400">
                        Take control of your finances with our comprehensive suite of tools
                    </p>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {[
                            {
                                icon: Pen,
                                title: 'Easy Transaction Entry',
                                description:
                                    'Quick and simple manual transaction tracking with custom categories and multiple account support.',
                            },
                            {
                                icon: Wallet,
                                title: 'Smart Budgeting',
                                description:
                                    'Set monthly budgets with intelligent notifications at 50%, 90%, and 100% thresholds to stay on track.',
                            },
                            {
                                icon: ChartLine,
                                title: 'Visual Analytics',
                                description:
                                    'Beautiful charts and graphs that give you clear insights into your spending patterns and financial health.',
                            },
                            {
                                icon: Brain,
                                title: 'AI Financial Insights',
                                description:
                                    'Monthly AI-powered analysis of your spending habits with personalized advice to improve your finances.',
                            },
                            {
                                icon: Bell,
                                title: 'Budget Alerts',
                                description:
                                    'Stay informed with timely notifications when you reach important budget milestones.',
                            },
                            {
                                icon: Pen,
                                title: 'Data Export',
                                description:
                                    'Stay informed with timely notifications when you reach important budget milestones.',
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="text-start flex flex-col gap-2 border rounded-md p-4 hover:shadow-md transition-shadow cursor-default"
                            >
                                <card.icon className="text-primary" />
                                <h3 className="font-medium">{card.title}</h3>
                                <p className="text-gray-500">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
