import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
        <div>
            <h2 className="tect-2xl font-bold">Cuisines</h2>
            <FormDescription className="text-gray-500 mb-2">
                Select the cuisines that your restaurant servers
            </FormDescription>
        </div>
        <FormField control={control} name="cuisines" render={({field}) => (
            <FormItem>
                <div className="grid md:grid-cols-5 gap-1">{cuisineList.map((cuisineItem) => (
                    <CuisineCheckbox cuisine={cuisineItem} field={field} />
                ))}</div>
                <FormMessage className="italic text-red-500"/>
            </FormItem>
        )}>
        </FormField>
    </div>
  )
}

export default CuisinesSection;