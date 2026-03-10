import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const scrollableDistance = documentHeight - windowHeight;
            const progress = scrollableDistance > 0
                ? Math.min(Math.max((scrollTop / scrollableDistance) * 100, 0), 100)
                : 0;

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial calculation
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollProgress;
}
