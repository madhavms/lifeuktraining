interface AnyQuestionContentInterface {
  heading: string;
  content: string;
  imageUrl: string;
}

interface AnyQuestionStatsInterface {
  count: number;
  field: string;
  hasPlus?: boolean;
}

export const AnyQuestionContent: AnyQuestionContentInterface = {
  heading: "Do you have any questions?",
  content: `Let us advise you on your opportunities to work and live in the UK. Our Recruitment Migration Consultants will support you with any questions you may have to make sure you have complete peace of mind in making your migration journey with Make it in the UK.`,
  imageUrl: "anyquestions.jpg"
};

export const AnyQuestionStats: AnyQuestionStatsInterface[] = [
  {
    count: 167292,
    field: "Work permits issued 2021",
  },
  {
    count: 388020,
    field: "Work permits issued 2022",
  },
  {
    count: 525200,
    field: "20% Conversion",
    hasPlus: true,
  },
];
