// src/utils/db.js

/**
 * This file mocks a basic API for login validation and product/item fetching.
 * Replace this with real API calls to backend or Firebase later.
 */

// Dummy users for login (In real case, pull from secure DB)
const suppliers = [
  { email: 'supplier@example.com', password: '123456' },
];

const vendors = [
  { email: 'vendor@example.com', password: '654321' },
];

export const validateSupplierLogin = (email, password) => {
  const match = suppliers.find(
    (user) => user.email === email && user.password === password
  );
  return match ? { success: true, user: match } : { success: false };
};

export const validateVendorLogin = (email, password) => {
  const match = vendors.find(
    (user) => user.email === email && user.password === password
  );
  return match ? { success: true, user: match } : { success: false };
};

// Dummy items for demonstration
export const fetchProducts = () => [
  { id: 1, name: 'Tomatoes', price: '₹30/kg' },
  { id: 2, name: 'Onions', price: '₹25/kg' },
  { id: 3, name: 'Cooking Oil', price: '₹110/litre' },
];

export const fetchVendorItems = () => [
  { id: 1, name: 'Dosa Batter', stock: '20kg' },
  { id: 2, name: 'Plastic Cups', stock: '500 pcs' },
];

export const fetchSupplierItems = () => [
  { id: 1, name: 'Vegetable Stock', qty: '1 ton' },
  { id: 2, name: 'Wheat Flour', qty: '500 kg' },
];
