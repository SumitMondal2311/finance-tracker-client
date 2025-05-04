import { Accordion } from '../ui/accordion';
import { AppAccordion } from '../ui/app-accordion';

export function FAQs() {
    const faqs = [
        {
            question: 'Can I manage multiple accounts in Finance Tracker?',
            answer: 'Yes! Finance Tracker allows you to create and manage unlimited accounts. You can set up different accounts for personal expenses, business costs, savings goals, or any other purpose. Each account can have its own budget and categories.',
        },
        {
            question: 'How do the budget notifications work?',
            answer: "Finance Tracker sends you smart notifications when you reach important budget thresholds. You'll receive alerts at 50%, 90%, and 100% of your monthly budget. These notifications help you stay aware of your spending and avoid going over budget.",
        },
        {
            question: 'What kind of analytics and reports are available?',
            answer: 'Our platform provides comprehensive analytics including spending trends, category breakdowns, and budget performance charts. You can view your data through various interactive charts and graphs, and export detailed reports for further analysis.',
        },
        {
            question: 'How does the AI financial advice work?',
            answer: "Each month, our AI analyzes your spending patterns and financial behavior to provide personalized insights and recommendations. You'll receive practical advice on how to optimize your spending, identify saving opportunities, and improve your financial habits.",
        },
        {
            question: 'Can I edit or delete transactions after entering them?',
            answer: 'Yes, you have full control over your transaction data. You can edit or delete any transaction at any time. The system will automatically update all related analytics and budget calculations to reflect your changes.',
        },
        {
            question: 'What formats can I export my data in?',
            answer: 'You can export your financial data in CSV, PDF, and Excel formats. This is useful for creating custom reports, sharing with financial advisors, or maintaining personal records. All exports include detailed transaction data and spending summaries.',
        },
        {
            question: 'Is there a limit to how many transactions I can log?',
            answer: 'No, there are no limits on the number of transactions you can record. You can log as many transactions as you need, and our system is optimized to handle years of financial data while maintaining fast performance.',
        },
        {
            question: 'How do I get help if I have questions?',
            answer: 'We offer comprehensive support through our help center, email support, and detailed guides. Premium users get priority email support with faster response times, while Business plan subscribers receive dedicated account management.',
        },
    ];

    return (
        <section id="faq-section" className="container mx-auto px-4 py-30 flex flex-col gap-4">
            <div className="text-center">
                <h1 className="landing-header">FAQs</h1>
                <p className="landing-description">
                    Find answers to common questions about Finance Tracker
                </p>
            </div>
            <div className="flex justify-center">
                <Accordion type="single" collapsible className="w-full xl:w-1/2">
                    {faqs.map((faq, idx) => (
                        <AppAccordion
                            key={idx}
                            value={`item-${idx + 1}`}
                            trigger={faq.question}
                            content={faq.answer}
                        />
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
