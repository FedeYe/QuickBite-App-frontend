import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-red-500 gap-2">
        <CircleUserRound className="text-red-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem className="hover:bg-red-100 ">
          <Link to="/manage-restaurant" className="font-bold text-red-500">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-red-100 ">
          <Link to="/user-profile" className="font-bold text-red-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator className="border border-gray-700"/>
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-2 text-white font-bold bg-red-500 hover:bg-gray-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
