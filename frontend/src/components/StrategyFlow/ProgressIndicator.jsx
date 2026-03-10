import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressIndicator = ({ targetRef }) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="progress-container">
            <div className="progress-track">
                <motion.div
                    className="progress-fill"
                    style={{ scaleY, originY: 0 }}
                />
            </div>
        </div>
    );
};

export default ProgressIndicator;
