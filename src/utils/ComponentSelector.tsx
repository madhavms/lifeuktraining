import { LinkNewsLettterContentItem } from "../assets/LinksNewsLetterContent";
import FormComponent from "./FormComponent";
import ListItem from "./ListItem";
import ImageContainer from "./ImageContainer";

const ComponentSelector = (item: LinkNewsLettterContentItem) => {
  switch (item.type) {
    case "form":
      return <FormComponent {...item} />;
    case "list":
      return <ListItem {...item} />;
    case "image":
      return <ImageContainer {...item} />;
  }
};

export default ComponentSelector;
