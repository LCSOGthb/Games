import { useEffect, useState } from 'react';

export default function PopupNotification({ message, duration = 5000, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the popup after mount
    setVisible(true);
    // Hide after duration
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        background: '#e3f2fd',
        color: '#1565c0',
        padding: '16px 24px',
        borderRadius: '8px',
        fontWeight: 'bold',
        border: '1px solid #90caf9',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        zIndex: 9999,
        maxWidth: 360,
        fontSize: '1rem',
        cursor: 'pointer',
        transform: visible ? 'translateX(0)' : 'translateX(120%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)',
      }}
      title="Click to pre-register"
    >
      {message}
    </div>
  );
}