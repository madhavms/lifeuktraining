interface MarketPotentialContentInterface {
  heading: string;
  content: string;
}

interface MarketPotentialStatsInterface {
  count: number;
  field: string;
  plus?: boolean;
}

export const MarketPotentialContent: MarketPotentialContentInterface = {
  heading: "Work Permit Market Potential",
  content: `The actual potential magnitude for the high number of work permits
    that can actually be acquired independently is quite staggering, to
    say the least. With not even 0.01% of the companies eligible to employ
    international workers have applied up until December 2022. We are a
    step ahead of the rest with a multitude of employer partnerships
    stretching the whole breadth of the United Kingdom.`,
};

export const MarketPotentialStats: MarketPotentialStatsInterface[] = [
  {
    count: 451734,
    field: "Estimated work permit 2023",
  },
  {
    count: 5508935,
    field: "Businesses in the UK",
  },
  {
    count: 111017870,
    field: "20% Conversion",
  },
  {
    count: 4782,
    field: "Network of business partners",
  },
];
