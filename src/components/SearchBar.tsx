import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Eraser, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    // call the external "onReset" handler if it exists
    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 bg-white mx-3 ${
          form.formState.errors.searchQuery && "border-red-800 border-2"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-red-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none tect-xl focus-visible:ring-0 placeholder-gray-400"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full hover:bg-red-400"
        >
          <span className="hidden md:block">Reset</span>
          <Eraser className="md:hidden lg:block" />
        </Button>
        <Button
          type="submit"
          className="text-white rounded-full bg-green-700 hover:bg-green-500"
        >
          <span className="hidden md:block">Search</span>
          <Search className="md:hidden lg:block" />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
