import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'white' | 'gray' | 'green' | 'gradient';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    id,
    className,
    background = 'white'
}) => {
    const bgClasses = {
        white: 'bg-white',
        gray: 'bg-brand-gray-50',
        green: 'bg-brand-green', // Solid green as requested
        gradient: 'bg-brand-gray-50' // Fallback for legacy gradient props if any
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 px-4 md:px-8 lg:px-12 w-full overflow-hidden",
                bgClasses[background],
                className
            )}
        >
            <div className="max-w-7xl mx-auto w-full relative">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
