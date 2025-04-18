import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Separator className="border border-gray-700 my-1"/>
      <div className="flex flex-col space-y-2 items-center">
        <Link
          to="/manage-restaurant"
          className="flex bg-white font-bold p-2 w-64 justify-center rounded-lg hover:text-red-500 hover:bg-red-100"
        >
          Manage Restaurant
        </Link>
        <Link
          to="/user-profile"
          className="flex bg-white font-bold p-2 w-64 justify-center rounded-lg hover:text-red-500 hover:bg-red-100"
        >
          User Profile
        </Link>
      </div>
      <Separator className="border border-gray-700 my-1"/>
      <Button
        onClick={() => logout()}
        className="flex items-center text-white font-bold bg-red-500 hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
