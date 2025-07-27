import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold">Bazaar Connect</Link>
      <div className="space-x-4">
        <Link to="/vendor" className="hover:underline">Vendor</Link>
        <Link to="/supplier" className="hover:underline">Supplier</Link>
        <Link to="/products" className="hover:underline">Products</Link>
      </div>
      <button onClick={() => navigate('/products')} className="text-sm text-blue-500 hover:underline">
  View Products
</button>

    </nav>
  );
}
