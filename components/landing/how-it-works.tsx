import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export function HowItWorks() {
    const steps = [
        {
            title: 'Set Up Your Accounts',
            description:
                'Create multiple accounts to organize your finances. Perfect for separating personal, business, or savings tracking.',
            features: [
                'Create unlimited accounts',
                'Customize account types and categories',
                'Set individual budgets for each account',
            ],
        },
        {
            title: 'Track Your Spending',
            description:
                'Easily log your daily transactions and categorize them for better financial awareness.',
            features: [
                'Quick transaction entry with custom categories',
                'Edit or delete transactions anytime',
                'Attach receipts and notes to transactions',
            ],
        },
        {
            title: 'Monitor & Optimize',
            description:
                'Get AI-powered insights and visual analytics to understand and improve your spending habits.',
            features: [
                'Monthly AI financial advice',
                'Interactive charts and spending analysis',
                'Budget milestone notifications',
            ],
        },
    ];

    return (
        <section
            id="how-it-work-section"
            className="container mx-auto px-4 md:px-8 py-30 flex flex-col gap-4"
        >
            <div className="text-center">
                <h2 className="landing-header">How Finance Tracker Works?</h2>
                <p className="landing-description">
                    Start managing your finances better in three simple steps
                </p>
            </div>

            <div className="w-full flex flex-col gap-8">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            'flex flex-col gap-4 lg:gap-4 items-center lg:justify-between',
                            (idx + 1) % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                        )}
                    >
                        <div className="w-full lg:w-1/2 space-y-2">
                            <div className="">
                                <h3 className="font-bold">{step.title}</h3>
                                <p className="text-gray-500">{step.description}</p>
                            </div>

                            {step.features.map((str, idx) => (
                                <p key={idx} className="flex items-center gap-2">
                                    <CircleCheck className="text-primary" /> {str}
                                </p>
                            ))}
                        </div>
                        <Skeleton className="h-80 w-full lg:w-1/2" />
                    </div>
                ))}
            </div>
        </section>
    );
}
