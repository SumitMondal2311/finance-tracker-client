'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useUtilityStore from '@/store/utility.store';
import { loginValidator } from '@/validators/login.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PasswordInput } from '../ui/password-input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';

function LoginForm() {
    const { loading } = useUtilityStore();

    const form = useForm<z.infer<typeof loginValidator>>({
        resolver: zodResolver(loginValidator),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onTouched',
    });

    const onSubmit = async () => {
        return;
        // api logic
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading} className="flex gap-2 cursor-pointer">
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Log in
                        </>
                    ) : (
                        'Log in'
                    )}
                </Button>
                <div className="self-center flex items-center">
                    <p>Don&apos;t have an account?</p>
                    <Link href="/auth/signup" className={buttonVariants({ variant: 'link' })}>
                        Sign up
                    </Link>
                </div>
            </form>
        </Form>
    );
}

export default LoginForm;
