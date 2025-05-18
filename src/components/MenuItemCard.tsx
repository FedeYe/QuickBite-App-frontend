import { MenuItem } from "@/types";
import { Card, CardContent } from "./ui/card";
import { Plus } from "lucide-react";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemCard = ({ menuItem, addToCart }: Props) => {
  return (
    <Card
      className="cursor-pointer hover:bg-gray-100 group"
      onClick={addToCart}
    >
      <CardContent  className="font-bold flex justify-between items-center">
        {menuItem.name}
        <div className="flex flex-row items-center gap-2">
          <Plus className="bg-green-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
          €{(menuItem.price / 100).toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
