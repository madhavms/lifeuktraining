import { Link } from "react-router-dom";
import { LinkNewsLettterContentItem } from "../assets/LinksNewsLetterContent";

const ListItem = (item: LinkNewsLettterContentItem) => (
  <div>
    <div className="text-[#0F5276] text-lg md:text-xl lg:text-2xl font-bold mb-6">{item.heading}</div>
    <ul>
      {item.list?.map((item, index) => (
        <li className="mb-2 text-sm opacity-70" key={index}>
          <Link to={item.link}>{item.title}</Link>
          </li>
      ))}
    </ul>
  </div>
);

export default ListItem;
