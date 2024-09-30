import img1 from "./assets/image-equilibrium.jpg";
import img2 from "./assets/image-avatar.png";
import ic1 from "./assets/icon-ethereum.svg";
import ic2 from "./assets/icon-clock.svg";
import { FaRegEye } from "react-icons/fa";
const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D1A2D]">
      <div className="bg-[#15273E] p-6 rounded-2xl shadow-lg max-w-sm">
        <div className="relative group cursor-pointer">
          <img
            className="rounded-2xl w-full object-cover group-hover:opacity-75"
            src={img1}
            alt="Equilibrium"
          />
          <div className="absolute inset-0 bg-[#0194A4] opacity-0 group-hover:opacity-50 rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
            <FaRegEye className="text-white text-4xl" />
          </div>
        </div>
        <div className="p-5">
          <h5 className="text-white text-2xl font-bold mb-2 hover:brightness-200 hover:text-[#01A1B9] cursor-pointer">
            Equilibrium #3429
          </h5>
          <p className="text-[#7085A3] mb-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-[#10F6F5]">
              <img src={ic1} alt="" />
              <span>0.041 ETH</span>
            </div>
            <div className="text-[#7085A3] flex gap-2 items-center">
              <img src={ic2} alt="" />
              <span>3 days left</span>
            </div>
          </div>
          <div className="flex items-center border-t border-gray-600 pt-4">
            <img
              className="w-8 h-8 rounded-full border-[1px] border-white"
              src={img2}
              alt="Creator avatar"
            />
            <p className="ml-3 text-[#7085A3]">
              Creation of{" "}
              <span className="text-white hover:brightness-200 hover:text-[#01A1B9] cursor-pointer ">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
