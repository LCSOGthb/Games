import { useEffect, useState } from 'react';

export default function PopupNotification({
  message,
  duration = 5000,
  onClick,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!message) return;

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(timer);
  }, [message, duration]);

  if (!visible || !message) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      onClick={onClick}
      title="Click to pre-register"
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
        transform: 'translateX(0)',
        opacity: 1,
        transition:
          'transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {message}
    </div>
  );
}
