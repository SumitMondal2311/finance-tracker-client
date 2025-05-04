import { forwardRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export const AppAvatar = forwardRef<HTMLSpanElement, { src: string; fallback: string }>(
    ({ src, fallback, ...props }, ref) => (
        <Avatar ref={ref} {...props}>
            <AvatarImage src={src}></AvatarImage>
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
);

AppAvatar.displayName = 'AppAvatar';
