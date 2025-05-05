import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  {
    label: "Best match",
    value: "bestMatch",
  },
  {
    label: "Delivery price",
    value: "deliveryPrice",
  },
  {
    label: "Estimated delivery Time",
    value: "estimatedDeliveryTime",
  },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full hover:bg-gray-200">
          Sort by: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-10 bg-white border-2">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
