import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const orderArrivalTime = new Date(order.createdAt);

    orderArrivalTime.setMinutes(
      orderArrivalTime.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = orderArrivalTime.getHours();
    const minutes = orderArrivalTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (ORDER_STATUS.find(
      (o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span> Order Status: {getOrderStatusInfo()?.label}</span>
        <span> Expected by: {getExpectedDelivery()}</span>
      </h1>
      <Progress
        className="h-2 animate-pulse bg-gray-200 [&>div]:bg-red-500"
        value={getOrderStatusInfo()?.progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
