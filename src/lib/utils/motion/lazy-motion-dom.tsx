import { LazyMotion, domAnimation } from 'motion/react';
import type { FC, ReactNode } from 'react';

interface LazyMotionDomProps {
    children: ReactNode;
}

const LazyMotionDom: FC<LazyMotionDomProps> = ({ children }) => (
    <LazyMotion
      features={domAnimation}
      strict
    >
        {children}
    </LazyMotion>
);

export default LazyMotionDom;
