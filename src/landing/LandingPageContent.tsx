import React from "react";
import defaultIcon from "../assets/logo512.png";
import mattchoo from "../assets/mattchoo.jpg";
import beheard from "../assets/be_heard.png";
import EmailSVG from "../assets/EmailSVG";
import LinkedInSVG from "../assets/LinkedInSVG";
import ResumeSVG from "../assets/ResumeSVG";
import GithubSVG from "../assets/GithubSVG";
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
  constantPic?: string;
  clickableText: boolean;
}

interface IndexedSectionLayout {
  title: string;
  content: IconsTextLayout[];
  constantPic?: string;
  clickableText: boolean;
  hoverables: IconsTextLayout[];
}

const sectionContent: SectionLayout[] = [
  //first one is contact me
  {
    title: "Contact Me",
    constantPic: mattchoo,
    clickableText: true,
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
          icon: <ResumeSVG color="#FFFFFF" uniqueClass="resume1" />,
          iconAltText: "Resume",
          link: "https://github.com/matthewcn56/matthewcn/blob/main/src/assets/MatthewNieva_Resume.pdf",
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
          icon: <GithubSVG color="#FFFFFF" uniqueClass="github1" />,
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
          icon: <LinkedInSVG color="#FFFFFF" uniqueClass="linkedin1" />,
          iconAltText: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-nieva/",
          name: "LinkedIn",
        },
      },
      {
        plain: ", or ",
      },
      {
        hoverable: {
          icon: <EmailSVG color="#FFFFFF" uniqueClass="email2" />,
          iconAltText: "Email",
          link: "mailto:matthewcn56@gmail.com",
          name: "Email",
        },
      },
      {
        plain: ".",
      },
    ],
  },
  //second one is projects
  {
    title: "Experience/Projects",
    clickableText: false,
    content: [
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "IoT Wall Garden",
          link: "https://miravel.com",
          name: "IoT Wall Garden",
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "Bias By Us",
          link: "https://bias-by-us.netlify.app",
          name: "Bias By Us",
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "TasteBuds",
          link: "https://devpost.com/software/tastebuds",
          name: "TasteBuds",
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "PracticePlayback",
          link: "https://devpost.com/software/tastebuds",
          name: "Practice Playback",
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "EyeWalk",
          link: "https://devpost.com/software/tastebuds",
          name: "EyeWalk",
        },
      },
      {
        hoverable: {
          icon: beheard,
          iconAltText: "BeHeard",
          link: "https://devpost.com/software/be-heard",
          name: "BeHeard",
        },
      },
    ],
  },
  {
    title: "Fun Hobbies",
    clickableText: true,
    constantPic: mattchoo,
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
      console.log(hovIndex);
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
  const hoverables = indexedLayout.reduce((listed: IconsTextLayout[], curr) => {
    if (curr.hoverableIndex || curr.hoverableIndex === 0) listed.push(curr);
    return listed;
  }, []);
  console.log("hoverables is: " + Object.entries(hoverables));
  return {
    ...section,
    content: indexedLayout,
    hoverables: hoverables,
  };
});

export default indexedContent;
