import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12 mx-5 md:mx-0">
      <div className="bg-gray-50 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:px-24 lg:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-red-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          searchQuery=""
          placeHolder="Search by City"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Download the QuickBite App for faster ordering and personalized
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
