// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VendorLogin from './pages/VendorLogin';
import SupplierLogin from './pages/SupplierLogin';
import Products from './pages/Products';
import ItemList from './pages/ItemList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import CustomerLogin from './pages/CustomerLogin';
import VendorItemList from './pages/VendorItemList';
import SupplierItemList from './pages/SupplierItemList';
import VendorLoginForm from './pages/VendorLoginForm';
import SupplierLoginForm from './pages/SupplierLoginForm';
import SupplierProfiles from './pages/SupplierProfiles';
import NearbyVendors from './pages/NearbyVendors';
import ProductCategoryPage from './pages/ProductCategoryPage';

export default function App() {
  console.log("✅ App component rendered");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50 font-sans">
      <Navbar topBarColor="bg-green-600" />

      <div className="bg-yellow-200 text-center text-sm text-gray-800 py-2 font-semibold shadow-inner">
        🎁 Big Monsoon Discounts – Up to 30% Off on Bulk Orders!
      </div>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor" element={<VendorLogin />} />
            <Route path="/supplier" element={<SupplierLoginForm />} />
            <Route path="/products" element={<ProductCategoryPage />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/vendor-items" element={<VendorItemList />} />
            <Route path="/supplier-items" element={<SupplierItemList />} />
            <Route path="/vendor-login-form" element={<VendorLoginForm />} />
            <Route path="/supplier-login-form" element={<SupplierLoginForm />} />
            <Route path="/supplier-profiles" element={<SupplierProfiles />} />
            <Route path="/nearby-vendors" element={<NearbyVendors />} />
            <Route path="/product-category" element={<ProductCategoryPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
