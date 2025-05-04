import Image from 'next/image';

export default function PageNotFound() {
    return (
        <div className="h-screen bg-white flex items-center justify-center">
            <Image src="/404-error.jpg" alt="404-error-image" className="h-1/2" />
        </div>
    );
}
