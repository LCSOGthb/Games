import { useState, useRef, useEffect } from 'react';

export default function PreRegisterOverlay({ open, onClose }) {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Thank you, ${name}! You are pre-registered.`);

    setTimeout(() => {
      setName('');
      setMsg('');
      onClose();
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '32px',
          borderRadius: '16px',
          minWidth: 320,
          boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Pre-register</h2>
        <p style={{ marginBottom: 24 }}>
          Enter your name or username to pre-register:
        </p>

        <div style={{ margin: '24px 0' }}>
          <input
            ref={inputRef}
            required
            type="text"
            autoComplete="off"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="First name"
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 32px',
            borderRadius: '8px',
            border: 'none',
            background: '#1565c0',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginBottom: 8,
          }}
        >
          Submit
        </button>

        <br />

        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: 8,
            background: 'none',
            border: 'none',
            color: '#1565c0',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Cancel
        </button>

        {msg && <div style={{ marginTop: 12, color: '#2196f3' }}>{msg}</div>}
      </form>
    </div>
  );
}
