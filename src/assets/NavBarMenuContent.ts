interface MenuContent {
  id: number;
  title: string;
  link: string;
}

interface NavBarLogoContent {
  id: number;
  src: string;
  linkTo: string;
  alt: string;
}

export const MenuContent: MenuContent[] = [
  {
    id: 1,
    title: "Working in the UK",
    link: "/uklifetraining/working-in-the-uk",
  },
  {
    id: 2,
    title: "Visa & residence",
    link: "/uklifetraining/visa-residence",
  },
  {
    id: 3,
    title: "Living in the UK",
    link: "/uklifetraining/living-in-uk",
  },
  {
    id: 4,
    title: "UK job sectors",
    link: "/uklifetraining/uk-job-sectors",
  },
  {
    id: 5,
    title: "Application process",
    link: "/uklifetraining/application-process",
  },
  {
    id: 6,
    title: "Service",
    link: "/uklifetraining/service",
  },
  {
    id: 7,
    title: "About",
    link: "/uklifetraining/about",
  },
];

export const NavBarLogoContent: NavBarLogoContent[] = [
  {
    id: 1,
    src: "make_it_in_the_uk.png",
    linkTo: "/uklifetraining/",
    alt: "make it in the uk logo",
  },
  {
    id: 2,
    src: "make_it_in_the_uk_2.png",
    linkTo: "/uklifetraining/",
    alt: "make it in the uk logo 2",
  },
];
