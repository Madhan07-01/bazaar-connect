import React from 'react';

export default function VendorItemList() {
  const vendorItems = [
    { id: 1, name: "Disposable Plates", quantity: "500 pcs", price: "₹2/pc" },
    { id: 2, name: "Plastic Spoons", quantity: "1000 pcs", price: "₹0.50/pc" },
    { id: 3, name: "Carry Bags", quantity: "300 pcs", price: "₹1/pc" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Vendor Item List</h2>
      <ul className="space-y-4">
        {vendorItems.map((item) => (
          <li key={item.id} className="bg-white p-4 shadow rounded-2xl">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
            <div className="text-green-600 font-bold">{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
