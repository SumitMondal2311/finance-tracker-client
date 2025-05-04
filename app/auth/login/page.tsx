import LoginForm from '@/components/forms/login-form';
import GoogleOAuth2Button from '@/components/ui/google-oauth2-button';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Log in - Finance Tracker',
};

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center px-8 select-none">
            <div className="w-96 flex flex-col gap-8">
                <div>
                    <h1 className="font-mono font-bold text-2xl">Welcome back!</h1>
                    <p>Enter your credentials to access your account</p>
                </div>
                <LoginForm />
                <Separator />
                <GoogleOAuth2Button />
            </div>
        </div>
    );
}
