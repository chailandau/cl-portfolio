import { AnimatePresence } from 'motion/react';
import type { FC, ReactNode } from 'react';

import LazyMotionDom from '@/lib/utils/motion/lazyMotionDom';

interface LazyAnimatePresenceProps {
    children: ReactNode;
}

const LazyAnimatePresence: FC<LazyAnimatePresenceProps> = ({ children }) => (
    <LazyMotionDom>
        <AnimatePresence>{children}</AnimatePresence>
    </LazyMotionDom>
);

export default LazyAnimatePresence;
