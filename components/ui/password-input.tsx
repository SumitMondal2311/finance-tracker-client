'use client';

import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { Input } from './input';

export const PasswordInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ ...props }, ref) => {
        const [visible, setVisible] = useState(false);

        return (
            <div className="relative flex items-center">
                <Input
                    ref={ref}
                    type={visible ? 'text' : 'password'}
                    className={props.value ? (visible ? '' : 'font-extrabold tracking-widest') : ''}
                    {...props}
                />
                <span
                    onClick={() => setVisible((prev) => !prev)}
                    className="absolute right-0 px-3 py-2 cursor-pointer"
                >
                    {visible ? <EyeOff size="20" /> : <Eye size="20" />}
                </span>
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';
