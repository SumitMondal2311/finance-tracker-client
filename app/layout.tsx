import { Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    variable: '--font-outfit',
    display: 'swap',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    weight: '900',
    display: 'swap',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${geistMono.variable}`}>{children}</body>
        </html>
    );
}
