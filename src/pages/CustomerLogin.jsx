// src/pages/CustomerLogin.jsx

import React from 'react';

export default function CustomerLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Customer Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" placeholder="you@example.com" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
}
