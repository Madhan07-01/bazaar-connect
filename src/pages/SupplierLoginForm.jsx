import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SupplierLoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check
    if (
      credentials.email === 'supplier@bazaar.com' &&
      credentials.password === 'supplier123'
    ) {
      alert("✅ Supplier login successful!");
      navigate('/nearby-vendors');
    } else {
      setError('❌ Invalid credentials. Try supplier@bazaar.com / supplier123');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Supplier Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-6"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
