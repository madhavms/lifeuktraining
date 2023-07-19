interface WhyMakeItInUKContentInterface {
  title: string;
  first_line: string;
  second_line: string;
}

export interface WhyMakeItInUKCardInterface {
  title: string;
  content: string;
  icon: string;
}

export const WhyMakeItInUKContent: WhyMakeItInUKContentInterface = {
  title: "Why Make it in the UK?",
  first_line:
    "Make it in the UK is the key to a life of opportunity that will steer you in the right direction with complete peace of mind and tranquility for life. We appreciate how valuable your time is, so let us handle the small details while you focus on what matters.",
  second_line:
    "Frustrated by professionals who are all talk and little action? Let our no-nonsense, personalised approach pick up the pace.",
};

export const WhyMakeItInUKCard: WhyMakeItInUKCardInterface[] = [
  {
    title: "We walk the walk",
    icon: "AiOutlineCheckCircle",
    content:
      "Our knowledge is based on centuries of collective first-hand experience in the recruitment and migration sectors. Avoid the guesswork and put our highly talented and experienced team to work for you.",
  },
  {
    title: "You come first",
    icon: "FaArrowsToCircle",
    content: `We work on all aspects of your migration puzzle to ensure each piece is a perfect fit. Nothing is left to chance. We focus only on what you need and don’t waste time with anything else.`,
  },
  {
    title: "With you all the way",
    icon: "FaHandshake",
    content: `Moving abroad may seem daunting, but you won’t have to do it alone.
    We run point to eliminate problems, sort paperwork, and tie up loose ends, saving you time, effort, and money by advising on systems and procedures.`,
  },
];
