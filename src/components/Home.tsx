import { useEffect, useRef } from "react";
import { sectionContent } from "../assets/SectionContent";
import Card from "../utils/Card";
import {
  MarketPotentialContent,
  MarketPotentialStats,
} from "../assets/MarketPotentialContent";
import ScrollArrow from "../utils/ScrollArrow";
import {
  AnyQuestionContent,
  AnyQuestionStats,
} from "../assets/AnyQuestionContent";
import {
  WhyMakeItInUKCard,
  WhyMakeItInUKContent,
} from "../assets/WhyMakeItInUKContent";
import { LinkNewsLettterContent } from "../assets/LinksNewsLetterContent";
import ComponentSelector from "../utils/ComponentSelector";
import MarqueeList from "./MarqueeList";
import { MarqueeImageList } from "../assets/MarqueeImageList";

const Home = () => {
  return (
    <div>
      <ImageOverlayComponent />
      <SectionComponent />
      <MarketPotentialComponent />
      <AnyQuestions />
      <ScrollArrow />
      <WhyMakeItInUK />
      <MarqueeList marqueeImageList={MarqueeImageList}/>
      <LinksNewsLetter />
    </div>
  );
};

const ImageOverlayComponent = () => {
  return (
    <div className="relative">
      <div className="image-container">
        <img
          src="4-scaled.webp"
          alt="UK"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-3 justify-center items-start lg:ml-[130px] md:ml-[90px] sm:ml-[50px] p-4 text-white">
        <h5 className="text-[20px] lg:text-[28px] md:text-[22px] font-bold mb-4 font-sans">
          SOLVING YOUR MIGRATION PUZZLE! We make sure all the pieces fit!
        </h5>
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-[30px] lg:text-[82px] md:text-[50px] font-bold font-sans">
            Make it in the UK
          </h1>
          <h1 className="text-[30px] lg:text-[82px] md:text-[50px] font-bold font-sans">
            Prosper together!
          </h1>
        </div>
        <h5 className="text-[18px] lg:text-[28px] md:text-[22px] font-bold mb-4 font-sans">
          Whatever freedom means for you, take the plunge and go where you’re
          treated best!
        </h5>
        <p className="text-[14px] lg:text-[16px] md:text-[15px] mb-4 text-[#E9EBEF]">
          We help you see the world differently, discover opportunities you may
          never have imagined and achieve results that bridge what is with what
          can be.
        </p>
      </div>
    </div>
  );
};

const SectionComponent = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-start ml-[10vw] gap-4 mt-[2vh] md:mt-[6vh] lg:mt-[12vh]">
      {sectionContent.map((section) => (
        <section key={section.id} className="bg-white mb-10 max-w-[90ch]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-1">
              <h3 className="text-[22px] lg:text-[34px] lg:w-[18ch] md:text-[26px] text-[#0F5276] font-bold mb-4">
                {section.heading}
              </h3>
              <p className="text-gray-700 opacity-85 lg:w-[36ch] text-[16px]">
                {section.description}
              </p>
            </div>
            <div className="order-2">
              <div className="w-full h-[30vh] lg:w-[40vw] lg:h-[40vh] rounded-md bg-[#0f5276] flex justify-center items-center">
                <img
                  src={section.imageUrl}
                  alt="Image"
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[120ch] mt-5">
            <p className="text-gray-700 mb-4">
              <span className="text-[16px]">{section.sectionData}</span>
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

const MarketPotentialComponent = () => {
  const counterRef = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const targetAttr = entry.target.getAttribute("data-target");
          const target = targetAttr ? +targetAttr : 0;
          const increment = target / 100; // Adjust the speed of counting animation (in milliseconds)

          const updateCount = () => {
            const dataIndexAttr = entry.target.getAttribute("data-index");
            const hasPlus = entry.target.getAttribute("data-plus");
            const dataIndex = dataIndexAttr ? +dataIndexAttr : 0;
            const counterElement = counterRef.current[dataIndex];

            if (counterElement) {
              const count = +counterElement.innerText
                .replace(/\+/g, " ")
                .replace(/,/g, "");

              if (count < target) {
                const nextCount = Math.ceil(count + increment);
                counterElement.innerText =
                  nextCount.toLocaleString() + (hasPlus ? "+" : "");
                requestAnimationFrame(updateCount);
              } else {
                counterElement.innerText =
                  target.toLocaleString() + (hasPlus ? "+" : "");
              }
            }
          };

          updateCount();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    counterRef.current.forEach((counter) => {
      if (counter) {
        observer.observe(counter);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0f5276] flex flex-col md:flex-row gap-5 justify-center items-center p-20">
      <div className="text-white  flex flex-col justify-start items-start">
        <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-[14ch] font-bold mb-4">
          {MarketPotentialContent.heading}
        </h1>
        <p className="text-base opacity-75 max-w-[40ch]">
          {MarketPotentialContent.content}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        {MarketPotentialStats.map((stat, index) => {
          return (
            <div
              key={stat.field}
              className="flex flex-col gap-5 text-white text-center border border-white border-opacity-20 p-6"
            >
              <h2
                className="text-xl md:text-2xl lg:text-4xl w-26" // Set a fixed width for the counter element
                ref={(el) => (counterRef.current[index] = el)}
                data-target={stat.count}
                data-index={index}
                data-plus={stat.plus}
              >
                0
              </h2>
              <p className="text-base opacity-85">{stat.field}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AnyQuestions = () => {
  const counterRef = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const targetAttr = entry.target.getAttribute("data-target");
          const target = targetAttr ? +targetAttr : 0;
          const increment = target / 100; // Adjust the speed of counting animation (in milliseconds)

          const updateCount = () => {
            const dataIndexAttr = entry.target.getAttribute("data-index");
            const hasPlus = entry.target.getAttribute("data-plus");
            const dataIndex = dataIndexAttr ? +dataIndexAttr : 0;
            const counterElement = counterRef.current[dataIndex];

            if (counterElement) {
              const count = +counterElement.innerText
                .replace(/\+/g, " ")
                .replace(/,/g, "");

              if (count < target) {
                const nextCount = Math.ceil(count + increment);
                counterElement.innerText =
                  nextCount.toLocaleString() + (hasPlus === "true" ? "+" : "");
                requestAnimationFrame(updateCount);
              } else {
                counterElement.innerText =
                  target.toLocaleString() + (hasPlus === "true" ? "+" : "");
              }
            }
          };

          updateCount();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    counterRef.current.forEach((counter) => {
      if (counter) {
        observer.observe(counter);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col md:flex-row gap-10 justify-center items-center bg-white mb-10 mt-16 ml-3 mr-3">
        <div className="flex flex-col justify-center items-start ml-4">
          <h3 className="text-[22px] lg:text-[34px] lg:w-[18ch] md:text-[26px] text-[#0F5276] font-bold mb-4">
            {AnyQuestionContent.heading}
          </h3>
          <p className="text-gray-700 lg:w-[36ch] text-[16px]">
            {AnyQuestionContent.content}
          </p>
        </div>
        <div>
          <div className="w-[70vw] h-[30vh] md:w-[40vw] lg:h-[44vh] rounded-md bg-[#0f5276] flex justify-center items-center">
            <img
              src={AnyQuestionContent.imageUrl}
              alt="Image"
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 ml-[15vw] mr-[15vw] md:ml-[10-vw] md:mr-[10vw] mb-[10vh]">
        {AnyQuestionStats.map((stat, index) => {
          return (
            <div
              key={stat.field}
              className="flex flex-col gap-5 text-[#0F5276] text-center border border-[#0F5276] border-opacity-50 p-10"
            >
              <h2
                className="text-xl md:text-2xl lg:text-4xl w-26" // Set a fixed width for the counter element
                ref={(el) => (counterRef.current[index] = el)}
                data-target={stat.count}
                data-plus={stat.hasPlus ? true : false}
                data-index={index}
              >
                0
              </h2>
              <p className="text-base">{stat.field}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WhyMakeItInUK = () => {
  return (
    <div className="mt-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url(pexels-aleksejs-bergmanis-681335-scaled.jpg)",
        }}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center gap-5 p-16">
          <h2 className="text-white text-3xl text-center font-bold">
            {WhyMakeItInUKContent.title}
          </h2>
          <p className="text-white text-lg text-center mt-4">
            {WhyMakeItInUKContent.first_line}
          </p>
          <p className="text-white text-lg text-center mt-4">
            {WhyMakeItInUKContent.second_line}
          </p>
        </div>
      </div>

      <div className="w-full h-1/2 bg-gray-200">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row gap-8 mt-10 mb-10 mx-4">
              {WhyMakeItInUKCard.map((data) => Card(data))}
            </div>
            <button className="bg-[#0F5276] text-white rounded w-[24ch] h-10 mb-16">
              Invest in your future today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinksNewsLetter = () => {
  return (
    <div>
      <div className="w-screen h-[490px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="london_eye.jpeg"
          alt="london_eye.jpeg"
        />
      </div>
      <div className="flex flex-col md:flex-row mt-24 mb-16 justify-start md:justify-center md:items-start ml-[5vw] mr-[5vw] gap-8 md:gap-16">
        {LinkNewsLettterContent.map((data) => (
          <div key={data.id}>{ComponentSelector(data)}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
