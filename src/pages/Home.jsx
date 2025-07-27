// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const heroImg = "https://images.unsplash.com/photo-1606813909350-0f09f4f4d479?auto=format&fit=crop&w=1000&q=80";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800 leading-tight">
              Connecting Street Vendors with Trusted Raw Material Suppliers
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Bazaar Connect is a simple and friendly platform where vendors and suppliers find each other with ease. Get affordable rates and genuine connections without the confusion.
            </p>
            <div className="space-x-4">
              <Link to="/vendor-login-form">
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-semibold">
                  Vendor Login
                </button>
              </Link>
              <Link to="/supplier-login-form">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition font-semibold">
                  Supplier Login
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={heroImg}
              alt="Marketplace Hero"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Bazaar Connect */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Why Choose Bazaar Connect?</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Affordable Raw Goods</h3>
              <p className="text-gray-600">Get quality supplies at competitive rates from trusted local suppliers.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">Easy to Use</h3>
              <p className="text-gray-600">Our app is designed to be simple for everyone — no technical skills required.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">Verified profiles, real reviews, and open pricing build long-term trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-10 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Connect & Grow Your Business?
        </h2>
        <p className="mb-6">Join Bazaar Connect today and discover reliable partners for your street food success!</p>
        <Link to="/products">
          <button className="bg-white text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition">
            Browse Products
          </button>
        </Link>
      </section>
    </div>
  );
}
