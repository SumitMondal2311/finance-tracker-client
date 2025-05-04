import { Star } from 'lucide-react';
import { AppAvatar } from '../ui/app-avatar';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';

export function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            profession: 'Small Business Owner',
            quote: 'Finance Tracker has completely transformed how I manage my business finances. I can now easily track all my expenses, plan my budget, and make informed financial decisions. The insights have helped me save over $5,000 in just 6 months!',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            profession: 'Freelance Designer',
            quote: 'As a freelancer, keeping track of my finances was always a challenge. Finance Tracker simplified everything with its intuitive interface and powerful reporting tools. Now I can focus on my creative work instead of worrying about my finances.',
            rating: 5,
        },
        {
            name: 'Emily Rodriguez',
            profession: 'Marketing Manager',
            quote: "I've tried several expense tracking apps, but Finance Tracker stands out with its beautiful design and comprehensive features. The goal tracking feature has helped me save for my dream vacation, and the budget alerts keep my spending in check.",
            rating: 4,
        },
        {
            name: 'David Thompson',
            profession: 'Software Engineer',
            quote: "The data visualization in Finance Tracker is exceptional. As someone who loves analytics, having beautiful charts that break down my spending patterns has given me insights I never had before. I've recommended it to all my colleagues.",
            rating: 5,
        },
    ];

    return (
        <section
            id="testimonial-section"
            className="py-30 container mx-auto px-4 md:px-8 flex flex-col gap-4"
        >
            <div className="text-center">
                <h2 className="landing-header">What Our Users Say</h2>
                <p className="landing-description">
                    Join thousands of satisfied users who have transformed their financial lives
                    with Finance Tracker
                </p>
            </div>

            <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent className="text-start">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2 2xl:basis-1/3">
                            <div className="h-full bg-accent text-card-foreground rounded-md p-4 space-y-2">
                                <div className="flex gap-2 items-center">
                                    <AppAvatar src="#" fallback={testimonial.name.charAt(0)} />
                                    <div className="flex flex-col">
                                        <span>{testimonial.name}</span>
                                        <span className="text-sm">{testimonial.profession}</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                        <Star key={idx} stroke="0" className="fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="italic">&quot;{testimonial.quote}&quot;</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex ml-8 xl:ml-0" />
                <CarouselNext className="hidden md:flex mr-8 xl:mr-0" />
            </Carousel>
        </section>
    );
}
