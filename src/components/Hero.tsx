import hero from "../assets/hero.png"

const Hero = () => {
  return(
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
        {/*
            w-full = sets the object to always take full width of its container 
            max-h-[600px] = sets a max height 
            object-cover =  this makes the img keep its aspect ratio, to avoid distortions
        */}
    </div>
  );
};

export default Hero;