import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2 } from "lucide-react";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <span className="flex items-center">
        <Loader2 className="mr-2 h-4 2-4 animate-spin" />
        Loading ...
      </span>
    );
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  };

  return (
    <div className="space-y-10 px-3 md:px-0">
        {orders.map((order)=>(
            <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
                <OrderStatusHeader order={order} />
                <div className="grid gap-10 md:grid-cols-2">
                    <OrderStatusDetail order={order} />
                    <AspectRatio ratio={16/5}>
                        <img src={order.restaurant.imageUrl} className="rounded object-cover h-full w-full"/>
                    </AspectRatio>
                </div>
            </div>
        ))}
    </div>
  );
};

export default OrderStatusPage;
