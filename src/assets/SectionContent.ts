interface SectionContentInterface {
  id: number;
  heading: string;
  description: string;
  sectionData: string;
  imageUrl?: string;
}

export const sectionContent: SectionContentInterface[] = [
  {
    id: 1,
    heading: "Make it in the UK",
    description:
      "Let us help you navigate through the tedious task of migrating to the United Kingdom with Make it in the UK. We help individuals from around the world who are looking to secure a job in the United Kingdom and eventually settle down, making the UK their main place of abode for the long term. This enhances the quality of life and long-term security for their loved ones for generations to come.",
    sectionData:
      "Getting a work visa in the UK seems tedious, so you can partner with Make it in the UK to ease the process. Let our team of in-house experts take care of the rest. From documentation to costs, we will keep you informed at all points from the beginning to the end.",
    imageUrl:
      "makeinuk_1.jpeg",
  },
  {
    id: 2,
    heading: "National Employer Partnerships",
    description:
      "Supporting employers: Make it in the UK works hand in hand in partnership with the public sector, government, private, and charitable organizations across the whole breadth of the United Kingdom to help them recruit, secure, and integrate individuals from abroad.",
    sectionData:
      "Getting a work visa in the UK seems tedious, so you can partner with Make it in the UK to ease the process. Let our team of in-house experts take care of the rest. From documentation to costs, we will keep you informed at all points from the beginning to the end.",
    imageUrl:
      "makeinuk_2.jpeg",
  },
  {
    id: 3,
    heading: "Work permits issued since Brexit",
    description:
      "There were 277,069 work-related visas granted in the year ending March 2022 (including dependants). This was a 129% increase on the year ending March 2021 and is 50% higher than in the year ending March 2020.",
    sectionData:
      "There were 388,919 grants to main applicants in the year ending December 2022, which represented just under two thirds (65%) of all work visas. This is 82% higher than prior to the pandemic in 2019, and 80% more than in the year ending September 2021, although it should be noted that annual figures are unable to account for changes in travel patterns following the pandemic.",
    imageUrl:
      "makeinuk_3.jpeg",
  },
];
