import defaultIcon from "../assets/logo512.png";

interface TextLayout {
  plain?: string;
  hoverable?: HoverableLayout;
}

interface HoverableLayout {
  icon: any;
  name: string;
  link: string;
  iconAltText: string;
}

interface SectionLayout {
  title: string;
  content: TextLayout[];
}

const sectionContent: SectionLayout[] = [
  //first one is default
  {
    title: "Contact Me!",
    content: [
      {
        plain:
          "Hey there, I'm Matt! I see that you are checking out my website :eyes:",
      },
      {
        plain: "You can contact me on ",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "Github",
          link: "https://github.com/matthewcn56",
          name: "Github",
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-nieva/",
          name: "LinkedIn",
        },
      },
    ],
  },
  //second one is projects
  {
    title: "Cool Projects",
    content: [
      {
        plain: "Here's some of my projects!",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-nieva/",
          name: "LinkedIn",
        },
      },
    ],
  },
  {
    title: "Fun Hobbies",
    content: [
      {
        plain: "Here's some of my projects!",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-nieva/",
          name: "LinkedIn",
        },
      },
    ],
  },
];

export default sectionContent;
