import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="border-b-2 border-b-red-500 py-6">
      {" "}
      {/* py-6 = adds padding to vertical(y) top and bottom */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
        {/* 
            flex = all children of the dv will be flex boxes
            justify-between = add space between all the childrens
            items-center = center the items vertically
         */}
        <Link to="/" className="text-3xl font-bold tracking-tight text-red-500">
          QuickBite.com
        </Link>
        {/* 
            text-3xl = dimensions of the text, in this case very big since its the logo
            tracking-tight = puts the letters closer so that it looks more like a logo
        */}
        <div className="flex items-center justify-between">
          <div className="md:hidden mt-2">
            {/* 
                    m d:hidden = breakpoint for screen dimensions, MobileNav will be hidden for screeen sizes bigger than medium
                */}
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
          {/* <div>
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
