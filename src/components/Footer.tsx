import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-tight hover:text-red-100 hover:underline"
        >
          QuickBite.com
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
