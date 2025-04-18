import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { CircleUserRound } from "lucide-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-ecnter">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-red-500"
          onClick={async () => await loginWithRedirect()}
        >
          <CircleUserRound />Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;
