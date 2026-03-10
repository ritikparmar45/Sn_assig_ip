import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stepsData } from '../../data/stepsData';
import StepCard from './StepCard';
import ProgressIndicator from './ProgressIndicator';
import InterestModal from './InterestModal';

const StrategyFlow = () => {
    const containerRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStep, setSelectedStep] = useState('');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const handleInterestClick = (stepTitle) => {
        setSelectedStep(stepTitle);
        setModalOpen(true);
    };

    return (
        <div className="strategy-flow-container" ref={containerRef}>
            <ProgressIndicator targetRef={containerRef} />

            <div className="steps-wrapper">
                <motion.div
                    className="intro-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>The Sniper Workflow</h2>
                    <p>Discover how our algorithmic engine turns market noise into profitable strategies.</p>
                </motion.div>

                <div className="steps-list">
                    {stepsData.map((step, index) => (
                        <StepCard
                            key={step.id}
                            step={step}
                            index={index}
                            onInterestClick={handleInterestClick}
                        />
                    ))}
                </div>

                <motion.div
                    className="cta-section"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="cta-content">
                        <h2>Ready to Dominate the Market?</h2>
                        <p>Join elite traders using SniperThink to automate their success.</p>
                        <button className="cta-button" onClick={() => handleInterestClick('General Interest')}>
                            I'm Interested
                        </button>
                    </div>
                </motion.div>
            </div>

            {modalOpen && (
                <InterestModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    defaultStep={selectedStep}
                />
            )}
        </div>
    );
};

export default StrategyFlow;
