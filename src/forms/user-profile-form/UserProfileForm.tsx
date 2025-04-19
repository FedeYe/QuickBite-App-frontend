import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";
import BoldFormLabel from "@/components/BoldFormLabel";
import { Send } from "lucide-react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg p-5 md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold"> User Profile Form</h2>
          <FormDescription className="text-gray-500 mb-2">
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <BoldFormLabel>Email</BoldFormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <BoldFormLabel>Name</BoldFormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage className="italic text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <BoldFormLabel>Address Line 1</BoldFormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage className="italic text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <BoldFormLabel>City</BoldFormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage className="italic text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <BoldFormLabel>Country</BoldFormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage className="italic text-red-500" />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            type="submit"
            className="text-white bg-black hover:bg-gray-500"
          >
            <Send/>Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
