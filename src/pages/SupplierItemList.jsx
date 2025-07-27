import React from 'react';

export default function SupplierItemList() {
  const supplierItems = [
    { id: 1, name: "Onions", stock: "100 kg", rate: "₹22/kg" },
    { id: 2, name: "Tomatoes", stock: "80 kg", rate: "₹18/kg" },
    { id: 3, name: "Potatoes", stock: "150 kg", rate: "₹20/kg" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Supplier Item List</h2>
      <ul className="space-y-4">
        {supplierItems.map((item) => (
          <li key={item.id} className="bg-white p-4 shadow rounded-2xl">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-sm text-gray-600">Stock: {item.stock}</div>
            <div className="text-green-600 font-bold">{item.rate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
