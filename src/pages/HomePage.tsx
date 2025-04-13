import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        {/* 
            flex = enables flexbox
            flex-col = changes direction to column, for stacking items vertically
        */}
        <div className="bg-red-300 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            {/* 
                -mt-16 = "-" negative number, t stands for top, creates the overlapping effect
            */}
            <h1 className="text-5xl font-bold tracking-tight text-red-600">
                Tuck into a takeway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={ landingImage } />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeway even faster!
                </span>
                <span>
                    Download the QuickBite App for faster ordering and personalized recommendations
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
    </div>
  );
};

export default HomePage;