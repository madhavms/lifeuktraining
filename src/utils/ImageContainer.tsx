import { Link } from "react-router-dom";
import { LinkNewsLettterContentItem } from "../assets/LinksNewsLetterContent";

const ImageContainer = (item: LinkNewsLettterContentItem) => {
  return (
    <div className="flex justify-center items-center ">
      <Link to={""}>
      <img
        className="w-96 h-22 sm:w-44 sm:h-22 object-cover"
        src={item.src}
        alt={item.src}
      />
      </Link>
    </div>
  );
};

export default ImageContainer;
