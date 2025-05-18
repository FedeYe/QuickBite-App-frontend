import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  if (!orders) {
    return (<span>No orders found</span>);
  }

  return (
    <Tabs defaultValue="orders">
      <TabsList className="bg-gray-50">
        <TabsTrigger
          value="orders"
          className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-gray-400 px-4 py-2 rounded-md transition"
        >
          Orders
        </TabsTrigger>
        <TabsTrigger
          value="manage-restaurant"
          className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-gray-400 px-4 py-2 rounded-md transition"
        >
          Manage Restaurant
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} {orders?.length > 1 ? "active orders" : "active order"}</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
