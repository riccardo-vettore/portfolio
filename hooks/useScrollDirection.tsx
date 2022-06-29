import {ScrollDirection} from '../components/layout/navbar/models/scroll-direction';
import {useEffect, useState} from 'react';

const useScrollDirection = (initialDirection: ScrollDirection, thresholdPixels: number = 0, off: boolean = false) => {
    const [scrollDir, setScrollDir] = useState(initialDirection);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
                // We haven't exceeded the thresholdPixels
                ticking = false;
                return;
            }

            setScrollDir(scrollY > lastScrollY ? ScrollDirection.Down : ScrollDirection.Up);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        /**
         * Bind the scroll handler if `off` is set to false.
         * If `off` is set to true reset the scroll direction.
         */
        !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

        return () => window.removeEventListener('scroll', onScroll);
    }, [initialDirection, thresholdPixels, off]);

    return scrollDir;
};

export default useScrollDirection;