'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bell, BrainCircuit, ChartLine, FileSpreadsheet, Pen, Wallet } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
    useGSAP(() => {
        gsap.to('#feature-cards', {
            xPercent: -50,
            scrollTrigger: {
                trigger: '#feature-section',
                scrub: true,
                pin: true,
            },
        });
    }, []);

    const features = [
        {
            icon: Pen,
            title: 'Easy Transaction Entry',
            description:
                'Quick and simple manual transaction tracking with custom categories and multiple account support.',
        },
        {
            icon: ChartLine,
            title: 'Visual Analytics',
            description:
                'Beautiful charts and graphs that give you clear insights into your spending patterns and financial health.',
        },
        {
            icon: Bell,
            title: 'Budget Alerts',
            description:
                'Stay informed with timely notifications when you reach important budget milestones.',
        },
        {
            icon: FileSpreadsheet,
            title: 'Data Export',
            description:
                'Export your financial data in various formats for detailed analysis or record-keeping.',
        },
        {
            icon: Wallet,
            title: 'Smart Budgeting',
            description:
                'Set monthly budgets with intelligent notifications at 50%, 90%, and 100% thresholds to stay on track.',
        },
        {
            icon: BrainCircuit,
            title: 'AI Financial Insights',
            description:
                'Monthly AI-powered analysis of your spending habits with personalized advice to improve your finances.',
        },
    ];

    return (
        <section id="feature-section" className="container mx-auto space-y-8 py-24">
            <div className="text-center">
                <h2 className="landing-header">Smart Features for Better Financial Management</h2>
                <p className="landing-description">
                    Take control of your finances with our comprehensive suite of tools
                </p>
            </div>
            <div id="feature-cards" className="relative h-screen">
                <div className="flex gap-4">
                    {features.map((feature, i) => (
                        <div
                            id={`feature-card-${i}`}
                            key={i}
                            className="w-96 bg-[#03045e] text-white flex flex-col gap-2 p-4 rounded-md shadow-md cursor-default"
                        >
                            <span className="w-max p-2 rounded-md bg-accent">
                                <feature.icon />
                            </span>
                            <h3 className="font-bold">{feature.title}</h3>
                            <p className="text-gray-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
