import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { submitInterest } from '../../services/api';

const InterestModal = ({ isOpen, onClose, defaultStep }) => {
    const [formData, setFormData] = useState({ name: '', email: '', step: defaultStep || '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await submitInterest(formData);
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
            }, 2000);
        } catch (err) {
            setStatus('error');
            setErrorMsg(typeof err === 'string' ? err : 'Submission failed');
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="modal-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                >
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                    <h2>Express Interest</h2>
                    <p>Join the future of algorithmic trading.</p>

                    {status === 'success' ? (
                        <div className="success-msg">Thanks! We'll be in touch soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Area of Interest</label>
                                <input required type="text" value={formData.step} onChange={e => setFormData({ ...formData, step: e.target.value })} />
                            </div>
                            {errorMsg && status === 'error' && <div className="error-msg">{errorMsg}</div>}
                            <button disabled={status === 'loading'} className="submit-btn" type="submit">
                                {status === 'loading' ? 'Submitting...' : 'Complete Request'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default InterestModal;
