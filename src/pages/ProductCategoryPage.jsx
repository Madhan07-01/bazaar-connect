// pages/ProductCategoryPage.jsx
import React from 'react';

const categories = [
  {
    name: "Vegetables",
    items: [
      {
        name: "Onion",
        topSupplier: "GreenFarm Supplies",
        cost: "₹12/kg",
        rating: 4.8,
      },
      {
        name: "Tomato",
        topSupplier: "FreshKart",
        cost: "₹15/kg",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Grains",
    items: [
      {
        name: "Rice",
        topSupplier: "AgroPrime",
        cost: "₹40/kg",
        rating: 4.7,
      },
      {
        name: "Wheat",
        topSupplier: "Farm Basket",
        cost: "₹35/kg",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Dairy",
    items: [
      {
        name: "Milk",
        topSupplier: "Aavin Distributors",
        cost: "₹46/litre",
        rating: 4.9,
      },
      {
        name: "Paneer",
        topSupplier: "DairyDelight",
        cost: "₹320/kg",
        rating: 4.8,
      },
    ],
  },
];

export default function ProductCategoryPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        📦 Explore Raw Materials by Category
      </h1>

      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2 border-b pb-1">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">Top Supplier: {item.topSupplier}</p>
                <p className="text-sm text-gray-600">Cost: {item.cost}</p>
                <p className="text-sm text-yellow-600">⭐ {item.rating} / 5</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
