import React from 'react';

const products = [
  'Vegetables',
  'Fruits',
  'Plastic Containers',
  'Spices',
  'Pulses',
  'Paper Plates',
  'Cleaning Liquids',
  'Oils',
  'Cutlery Sets',
  'Soft Drinks'
];

export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">Products Available</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item, idx) => (
          <li key={idx} className="bg-white p-4 rounded-xl shadow-md text-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
