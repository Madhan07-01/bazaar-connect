import React from 'react';

const dummySuppliers = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Supplier ${i + 1}`,
  category: ['Fruits', 'Vegetables', 'Grains', 'Dairy'][i % 4],
  distance: `${(Math.random() * 5 + 1).toFixed(1)} km`,
  contact: `supplier${i + 1}@email.com`,
}));

export default function SupplierProfiles() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Available Supplier Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummySuppliers.map(supplier => (
          <div key={supplier.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border border-green-100">
            <h2 className="text-xl font-semibold text-green-800">{supplier.name}</h2>
            <p className="text-gray-600">Category: {supplier.category}</p>
            <p className="text-gray-600">Distance: {supplier.distance}</p>
            <p className="text-gray-500 text-sm">Contact: {supplier.contact}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}
