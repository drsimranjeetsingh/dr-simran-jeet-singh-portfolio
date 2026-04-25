"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    altBefore?: string;
    altAfter?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    altBefore = "Before",
    altAfter = "After",
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x =
            (e instanceof TouchEvent ? e.touches[0].clientX : e.clientX) - rect.left;

        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchend", handleMouseUp);

            return () => {
                window.removeEventListener("mousemove", handleMove);
                window.removeEventListener("touchmove", handleMove);
                window.removeEventListener("mouseup", handleMouseUp);
                window.removeEventListener("touchend", handleMouseUp);
            };
        }
    }, [isDragging]);

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden group select-none shadow-2xl cursor-col-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onClick={handleContainerClick}
        >
            {/* Image Container - Both images fill 100% of space */}
            <div className="relative w-full h-auto" style={{ aspectRatio: "4/3" }}>

                {/* After Image - Full Background */}
                <Image
                    src={afterImage}
                    alt={altAfter}
                    width={800}
                    height={600}
                    className="absolute top-0 left-0 h-full w-full object-cover"
                />

                {/* Before Image - Clipped to left portion only */}
                <div
                    className="absolute top-0 left-0 h-full w-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        src={beforeImage}
                        alt={altBefore}
                        width={800}
                        height={600}
                        className="absolute top-0 left-0 h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Slider Divider Line */}
            <div
                className="absolute top-0 h-full w-1 bg-white z-10"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-125 transition-transform z-20">
                    {/* Arrow Icons */}
                    <div className="flex gap-1">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Mobile hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                Drag to compare
            </div>
        </div>
    );
}
