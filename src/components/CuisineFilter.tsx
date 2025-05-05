import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent, useMemo } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuicineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuicineList);
  };

  const handleCuisinesReset = () => onChange([]);

  // Orders the cuisines list, showing first the selected ones
  const selectedCuisinesFirstOrder = useMemo(() => {
    const selected = cuisineList.filter((checkedCuisine) =>
      selectedCuisines.includes(checkedCuisine)
    );
    const unselected = cuisineList.filter(
      (checkedCuisine) => !selectedCuisines.includes(checkedCuisine)
    );
    return [...selected, ...unselected];
  }, [selectedCuisines]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 cursop-pointer text-blue-500 hover:text-blue-400 hover:underline"
        >
          Reset Filter
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {selectedCuisinesFirstOrder
          .slice(0, isExpanded ? selectedCuisinesFirstOrder.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  } hover:bg-gray-200`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
