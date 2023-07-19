export interface LinkNewsLettterContentItem {
  id: number;
  type: contentType;
  src?: string;
  redirect?: string;
  heading?: string;
  list?: { title: string; link: string }[];
  fields?: Field[];
  buttonText?: string;
}

interface Field {
  type: string;
  placeholder: string;
}

enum contentType {
  image = "image",
  list = "list",
  form = "form",
}

export const LinkNewsLettterContent: LinkNewsLettterContentItem[] = [
  { id: 1, type: contentType.image, src: "make_it_in_the_uk.png", redirect:"" },
  {
    id: 2,
    type: contentType.list,
    heading: "Popular Links",
    list: [
      { title: "About", link: "/lifeuktraining/about" },
      { title: "UK job market", link: "/lifeuktraining/uk-job-market" },
      { title: "UK job sectors", link: "/lifeuktraining/uk-job-sectors" },
      { title: "Living in the UK", link: "/lifeuktraining/living-in-uk" },
      { title: "Visa & residence", link: "/lifeuktraining/visa-residence" },
      { title: "Application process", link: "/lifeuktraining/application-process" },
    ],
  },
  {
    id: 3,
    type: contentType.list,
    heading: "Important Services",
    list: [
      { title: "Newsletter", link: "/lifeuktraining/newsletter" },
      { title: "Contact", link: "/lifeuktraining/contact" },
    ],
  },
  {
    id: 4,
    type: contentType.form,
    heading: "Join our news letter",
    fields: [
      { type: "text", placeholder: "Name" },
      { type: "email", placeholder: "Email" },
    ],
    buttonText: "Sign up for free",
  },
];
