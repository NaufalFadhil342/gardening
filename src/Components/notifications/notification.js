import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './notification.css';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const Notification = forwardRef((props, ref) => {
  const [showNotification, setShowNotification] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    },
  }));

  return (
    <motion.div className="notived" id={showNotification ? 'show' : 'hide'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1, transition: { duration: 1 } }}>
      <div className="symbol">{props.type === 'success' && <BsCheckCircle />}</div>
      <div className="message">{props.message}</div>
    </motion.div>
  );
});
