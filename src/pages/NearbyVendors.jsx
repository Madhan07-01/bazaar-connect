import React from 'react';

const vendors = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Vendor ${i + 1}`,
  location: ['T Nagar', 'Tambaram', 'Velachery'][i % 3],
  needs: ['Vegetables', 'Plastic Cups', 'Meat', 'Oil'][i % 4]
}));

export default function NearbyVendors() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">Nearby Vendors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map(vendor => (
          <div key={vendor.id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-600">{vendor.name}</h3>
            <p className="text-gray-600">📍 {vendor.location}</p>
            <p className="text-gray-700 mt-1">Needs: {vendor.needs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
