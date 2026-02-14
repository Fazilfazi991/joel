import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'orange' | 'violet';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-brand-green text-white hover:bg-brand-green-hover focus:ring-brand-green",
        secondary: "bg-brand-green-50 text-brand-green hover:bg-brand-green-100 focus:ring-brand-green",
        outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green-50 focus:ring-brand-green bg-transparent",
        ghost: "text-brand-gray-600 hover:bg-brand-gray-100 hover:text-brand-dark focus:ring-brand-gray-400",
        white: "bg-white text-brand-green hover:bg-brand-gray-50 focus:ring-white",

        // New Variants
        orange: "bg-brand-orange text-white hover:bg-brand-orange-hover focus:ring-brand-orange",
        violet: "bg-brand-violet text-white hover:bg-brand-violet-hover focus:ring-brand-violet",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth ? "w-full" : "",
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};

export default Button;
