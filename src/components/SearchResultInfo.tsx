import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Restaurants found in {city}
            <Link to="/" className="pl-1 text-sm font-semibold cursor-pointer text-blue-500 hover:text-blue-400 hover:underline">Change Location</Link>
        </span>
    </div>
  );
};

export default SearchResultInfo;
