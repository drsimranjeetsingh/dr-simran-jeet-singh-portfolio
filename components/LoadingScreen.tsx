'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

type LoadingScreenProps = {
    autoHideMs?: number;
};

export default function LoadingScreen({ autoHideMs }: LoadingScreenProps): React.ReactElement {
    const [hide, setHide] = useState<boolean>(false);

    useEffect(() => {
        if (autoHideMs === undefined) return;

        const timer = setTimeout(() => {
            setHide(true);
        }, autoHideMs);

        return () => clearTimeout(timer);
    }, [autoHideMs]);

    if (hide) return <></>;

    return (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center transition-opacity duration-300">
            <div className="relative flex items-center justify-center w-32 h-32">
                <div className="absolute w-28 h-28 border-4 border-blue-100 rounded-full animate-ping opacity-60"></div>
                <div className="absolute w-24 h-24 border-[3px] border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <img
                    src="/favicon.ico"
                    alt="Dr. Simran Jeet Singh"
                    className="w-10 h-10 object-contain z-10"
                />
            </div>
            <p className="mt-8 text-sm font-bold text-blue-600 uppercase tracking-[0.2em] animate-pulse">
                Loading
            </p>
        </div>
    );
}