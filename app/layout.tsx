import { Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
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
