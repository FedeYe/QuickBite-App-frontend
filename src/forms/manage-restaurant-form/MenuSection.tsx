import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Bomb, Plus } from "lucide-react";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });
  return (
    <div className="spec-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription className="text-gray-500 mb-2">
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <div className="flex flex-row my-2 justify-between">
        <Button
          type="button"
          onClick={() => append({ name: "", price: "" })}
          className="text-white bg-green-700 hover:bg-green-500"
        >
          <Plus/>Add Item
        </Button>
        <Button
          type="button"
          onClick={() => {
            remove();
            append({ name: "", price: "" });
          }}
          className="text-white bg-red-600 hover:bg-red-400 "
        >
          <Bomb />Remove All
        </Button>
      </div>
    </div>
  );
};

export default MenuSection;
