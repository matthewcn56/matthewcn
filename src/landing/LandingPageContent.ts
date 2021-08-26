import defaultIcon from "../assets/logo512.png";
//import Resume from "../assets/MatthewNieva_Resume.pdf";
interface TextLayout {
  plain?: string;
  hoverable?: HoverableLayout;
}

interface IconsTextLayout extends TextLayout {
  hoverableIndex?: number;
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

interface IndexedSectionLayout {
  title: string;
  content: IconsTextLayout[];
}

const sectionContent: SectionLayout[] = [
  //first one is default
  {
    title: "Contact Me",
    content: [
      {
        plain:
          "Here's everything you need to contact me or learn about me at a glance.",
      },
      {
        plain: "See what I've done with my ",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "Resume",
          link: "https://github.com/matthewcn56",
          name: "Resume",
        },
      },
      {
        plain: ".",
      },
      {
        plain: "Contact me via",
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
        plain: ",",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-nieva/",
          name: "LinkedIn",
        },
      },
      {
        plain: ",",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "Email",
          link: "mailto:matthewcn56@gmail.com",
          name: "Email",
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

const indexedContent: IndexedSectionLayout[] = sectionContent.map((section) => {
  let hovIndex = 0;
  const indexedLayout: IconsTextLayout[] = section.content.map((sect) => {
    if (sect.hoverable) {
      const laidOut = {
        ...sect,
        hoverableIndex: hovIndex,
      };
      hovIndex++;
      return laidOut;
    } else {
      return {
        ...sect,
      };
    }
  });
  return {
    title: section.title,
    content: indexedLayout,
  };
});

export default indexedContent;
