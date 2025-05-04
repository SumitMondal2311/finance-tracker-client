import SignupForm from '@/components/forms/signup-form';
import GoogleOAuth2Button from '@/components/ui/google-oauth2-button';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign up - Finance Tracker',
};

export default function Signup() {
    return (
        <div className="h-screen flex items-center justify-center px-8 select-none">
            <div className="w-96 flex flex-col gap-8">
                <div>
                    <h1 className="font-mono font-bold text-2xl">Create an account</h1>
                    <p>Enter your credentials to create an account</p>
                </div>
                <SignupForm />
                <Separator />
                <GoogleOAuth2Button />
            </div>
        </div>
    );
}
