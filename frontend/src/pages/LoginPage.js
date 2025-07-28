import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
const [toast, setToast] = useState('');
const [loading, setLoading] = useState(false);


  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleLogin = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      localStorage.setItem('token', 'loggedin');
      
      setTimeout(() => 
        
        {showToast('Login Succesful!')
        onLogin()}, 3000);

    } else {
    setLoading(false)
      setError('Invalid login');
    }
  };

  return (
    <div className="login-container">
    <div className="login-form animate-fade-in">
      <h2>Welcome Back!</h2>
      <input
        placeholder="Username"
        autoComplete='off'
        autoFocus
        onChange={e =>{
           setForm({ ...form, username: e.target.value })
           setError('')
          }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={e => {setForm({ ...form, password: e.target.value })
        setError('')
      
      }}
      />
      {error && <p className="error-message">{error}</p>}
      <button 
      disabled={!form.username && !form.password && loading}
      onClick={handleLogin}>
            {loading ? <div className="spinner"></div> : 'Login'}

      </button>
    </div>

  {toast && <div className="toast">{toast}</div>}

  </div>
  
  );
}

export default LoginPage;
