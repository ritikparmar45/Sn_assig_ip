import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StepCard = ({ step, index, onInterestClick }) => {
    const cardRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    const Icon = step.icon;

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="step-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.2)" }}
        >
            <div className="step-card-content">
                <div className="step-number">0{index + 1}</div>
                <div className="step-icon-container">
                    <Icon size={32} className="step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <button className="interest-btn-small" onClick={() => onInterestClick(step.title)}>
                    Explore Step {index + 1}
                </button>
            </div>
        </motion.div>
    );
};

export default StepCard;
