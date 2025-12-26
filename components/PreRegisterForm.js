import { useState } from 'react';

export default function PreRegisterForm() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/pre-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMsg(data.message || data.error || 'Something went wrong.');
    } catch {
      setMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Pre-register'}
      </button>

      {msg && <div>{msg}</div>}
    </form>
  );
}
