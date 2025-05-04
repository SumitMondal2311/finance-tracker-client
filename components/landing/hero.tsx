import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="h-screen container mx-auto mt-30 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center lg:justify-between">
            <div className="w-full lg:w-1/2 text-center lg:text-start space-y-4">
                <h2 className="landing-header">Take Control of Your Financial Life</h2>
                <p className="landing-description">
                    Track expenses, manage budgets, and achieve your financial goals with our
                    intuitive and powerful finance tracking platform
                </p>
                <Link href="/auth/signup" className={cn('cursor-pointer', buttonVariants())}>
                    Get started <ArrowUpRight />
                </Link>
            </div>
            <div className="h-1/2 w-full lg:w-1/2 px-4">
                <Image
                    src="/landing-hero.jpg"
                    alt="landing-hero"
                    className="object-cover rounded-md"
                />
            </div>
        </section>
    );
}
