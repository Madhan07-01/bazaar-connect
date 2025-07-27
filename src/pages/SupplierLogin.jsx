import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SupplierLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Supplier Access</h2>
        <p className="mb-6 text-gray-600">If you're a registered supplier, please continue to login.</p>
        <button
          onClick={() => navigate('/supplier-login-form')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          I'm a Supplier → Login
        </button>
      </div>
    </div>
  );
}
