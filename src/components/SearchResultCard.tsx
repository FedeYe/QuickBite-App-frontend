import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-3
       group hover:bg-red-100 p-1 rounded-2xl"
    >
      <AspectRatio ratio={16 / 6}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div>
        <h3 className="text-2xl font-bold  tracking-tight mb-2 group-hover:underline group-hover:text-gray-900">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
          <div id="cuisines-list" className="flex flex-row flex-wrap">
            {restaurant.cuisines.map((item, index) => (
              <span className="flex">
                <span>{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div id="delivery-info" className="flex flex-col gap-2">
            <div className="flex items-center gap-1 texct-green-600">
              <Banknote className="text-green-600" />
              Delivery from € {(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
            <div className="flex items-center gap-1">
              <Clock />
              {restaurant.estimatedDeliveryTime} mins
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
