import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaArrowsToCircle, FaHandshake } from "react-icons/fa6";
import { WhyMakeItInUKCardInterface } from "../assets/WhyMakeItInUKContent";

interface IconMap {
  [key: string]: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
}

const iconMap: IconMap = {
  AiOutlineCheckCircle: AiOutlineCheckCircle as React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>,
  FaArrowsToCircle: FaArrowsToCircle as React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>,
  FaHandshake: FaHandshake as React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>,
};

const getIcon = (icon: string) => {
  const IconComponent = iconMap[icon];
  return (
    <div className="border border-gray-300 rounded-full m-2 w-16 h-16 flex justify-center items-center">
      <div className="bg-[#0F5276] w-4/5 h-4/5 rounded-full flex justify-center items-center">
        <IconComponent style={{ color: "white", fontSize: "24px" }} />
      </div>
    </div>
  );
};

const Card = (data: WhyMakeItInUKCardInterface) => {
  return (
    <div
      key={data.title}
      className="bg-white px-3 py-16 rounded shadow flex flex-col text-center justify-start items-center gap-7 w-full md:w-90"
    >
      <div className="flex items-center justify-center">
        {getIcon(data.icon)}
      </div>
      <h3 className="text-[#0F5276] text-lg md:text-xl lg:text-2xl font-bold">
        {data.title}
      </h3>
      <p className="text-base mx-4 md:text-sm lg:text-base text-gray-700">
        {data.content}
      </p>
    </div>
  );
};

export default Card;
