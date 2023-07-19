import { MarqueeImageInterface } from "../assets/MarqueeImageList";

interface MarqueeListProps {
    marqueeImageList: MarqueeImageInterface[];
  }

const MarqueeList:React.FC<MarqueeListProps> = ({marqueeImageList}) => {
  return (
    <div>
      <div className="marquee-container">
        <div id="marq1" className="marquee-content">
          {marqueeImageList.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="marquee-image"
            />
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default MarqueeList;