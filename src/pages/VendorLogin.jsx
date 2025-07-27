import { Link } from 'react-router-dom';

export default function VendorLogin() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Vendor Panel</h1>
      <Link to="/vendor-login-form" className="text-green-600 underline">
        Click here to login
      </Link>
    </div>
  );
}
