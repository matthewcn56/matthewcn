import React from "react";
import Image from "next/image";
import gme from "../public/static/gme.svg";
import lastfm from "../public/static/lastfm.svg";
import strava from "../public/static/strava.svg";
import defaultIcon from "../public/logo512.png";
import mattchoo from "../public/static/mattchoo.jpg";
import beheard from "../public/static/beheard.svg";
import emailLight from "../public/static/lightMode/emailLight.svg";
import linkedInLight from "../public/static/lightMode/linkedInLight.svg";
import resumeLight from "../public/static/lightMode/resumeLight.svg";
import githubLight from "../public/static/lightMode/githubLight.svg";
import miravelLight from "../public/static/lightMode/miravelLight.svg";
import tastebuds from "../public/static/tastebuds.svg";
import teachla from "../public/static/teachla.svg";
import eyewalk from "../public/static/eyewalk.svg";
interface TextLayout {
  plain?: string;
  fullLine?: boolean;
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
  displaySVG?: any;
  extraText?: string;
}

interface SectionLayout {
  title: string;
  header: string;
  content: TextLayout[];
  constantPic?: any;
  clickableText: boolean;
  defaultText?: string;
}

export interface IndexedSectionLayout extends SectionLayout {
  content: IconsTextLayout[];
  hoverables: IconsTextLayout[];
}

const sectionContent: SectionLayout[] = [
  //first one is contact me
  {
    title: "Contact",
    header: "Matthew Nieva",
    constantPic: mattchoo,
    clickableText: true,
    content: [
      {
        plain: `Here's everything you need to contact me or learn about me at a
            glance.`,
        fullLine: true,
      },
      {
        plain: `See what I've done with my`,
      },
      {
        hoverable: {
          icon: resumeLight,
          iconAltText: "Resume",
          link: "./MatthewNieva_Resume.pdf",
          name: "Resume",
        },
      },
      {
        plain: `. Contact me via`,
      },
      {
        hoverable: {
          icon: githubLight,
          iconAltText: "Github",
          link: "https://github.com/matthewcn56",
          name: "Github",
        },
      },
      {
        plain: `,`,
      },
      {
        hoverable: {
          icon: linkedInLight,
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
          icon: emailLight,
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
    title: "Experience",
    header: "Projects / Work",
    defaultText: `
        These are some of my past projects that I have worked on. Click or hover
        over one of the project titles to learn more about it. Click on their
        icon to view their deployment if it's a website, or go to its project
        page if it's something else!
      `,
    clickableText: false,
    content: [
      {
        hoverable: {
          icon: miravelLight,
          iconAltText: "IoT Wall Garden",
          link: "https://miravel.com",
          name: "IoT Wall Garden",
          displaySVG: miravelLight,
          extraText: `
              Working with Miravel, I set up the Internet of Things
              infrastructure for a smart garden system. From writing
              Server-On-Chip device firmware, developing the mobile client,
              connecting the two both locally via WiFi, and processing data
              streams via the cloud, I've helped make the smart garden system
              smart!
            `,
        },
      },
      {
        hoverable: {
          icon: teachla,
          iconAltText: "Bias By Us",
          link: "https://bias-by-us.netlify.app",
          name: "Bias By Us",
          extraText: `
              With TeachLA, outside of training our dev-team in web-dev as a
              training director, I am working on developing an interactive
              website that teaches about bias within machine learning
              algorithms! As our lead developer, I review others' code and have
              set up our product architecture, enabling our React website to
              communicate with our serverless NLP model hosted on AWS!
            `,
        },
      },
      {
        hoverable: {
          icon: tastebuds,
          iconAltText: "TasteBuds",
          link: "https://devpost.com/software/tastebuds",
          name: "TasteBuds",
          extraText: `
              Working with some friends over Spring Break for LA Hacks 2021, we
              developed an IoT smart dining hall system that helped students
              figure out which dining halls were occupied, where their friends
              were, and what the menu of the day was! I worked as a full-stack
              developer of the mobile app for it, connecting our front-end to
              our database and set-up an autonomous webscraper on GCP to figure
              out the daily menu using UCLA's Dining Hall page. We won the Best
              Network Hack Award!
            `,
        },
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "PracticePlayback",
          link: "https://devpost.com/software/music-mate",
          name: "Practice Playback",
          extraText: `
              Working with a friend for MakeHarvard 2021, we developed an IoT
              system that helped music students practice their instruments by
              playing back user-uploaded sheet music on a microcontroller! I
              worked on the mobile app for our system and connected it to our
              Firebase database hosted on GCP. We won the Best Software
              Component Award!
            `,
        },
      },
      {
        hoverable: {
          icon: eyewalk,
          iconAltText: "EyeWalk",
          link: "https://github.com/matthewcn56/EyeWalk",
          name: "EyeWalk",
          extraText: `
              As the lead developer of my team for the Innovate@UCLA Young Tech
              Professional Bootcamp, I made a pedestrian routing-app in
              React-Native that harnessed public and crowdsourced data to
              display the safest walking routes within a city utilizing the
              GoogleMaps API and ArcGIS data, processing the data with our
              express server. My team won the bootcamp after presenting to
              judges from industry!
            `,
        },
      },
      {
        hoverable: {
          icon: beheard,
          iconAltText: "BeHeard",
          link: "https://devpost.com/software/be-heard",
          name: "BeHeard",
          extraText: `
              For XHacks 2021, I worked with some friends to develop a global
              news platform centralized on activism and powered by NLP! I
              developed user authentication and database manipulation for our
              Flask backend, deployed it to a CI/CD pipeline with AWS, and
              connected it to our front-end built in React Native. We won the
              Best Startup Track Award!
            `,
        },
      },
    ],
  },
  {
    title: "Hobbies",
    header: "Fun Stuff",
    clickableText: true,
    constantPic: mattchoo,
    content: [
      {
        plain: "Outside of school, I enjoy running,",
      },
      {
        plain: "playing and listening to music,",
      },
      {
        plain: "and a whole lot more!",
        fullLine: true,
      },
      {
        plain: "Check out what I'm up to on my",
      },
      {
        hoverable: {
          icon: defaultIcon,
          iconAltText: "whatcha-up-to-mattchoo",
          link: "https://github.com/matthewcn56",
          name: "Blog",
        },
      },
      {
        plain: ",",
      },
      {
        plain: "what I've been listening to on",
      },
      {
        hoverable: {
          icon: lastfm,
          iconAltText: "LastFM",
          link: "https://www.last.fm/user/Mattchooachoo",
          name: "LastFM",
        },
      },
      {
        plain: ",",
      },
      {
        plain: "where I've been running on",
      },
      {
        hoverable: {
          icon: strava,
          iconAltText: "Strava",
          link: "https://www.strava.com/athletes/90911676",
          name: "Strava",
        },
      },
      {
        plain: ",",
      },
      {
        plain: "some fun songs I've performed for",
      },
      {
        hoverable: {
          icon: gme,
          iconAltText: "GME",
          link: "https://www.youtube.com/watch?v=gvbFsFFYLCE",
          name: "GME @ UCLA",
        },
      },
      {
        plain: ",",
      },
      {
        plain: "or other fun projects on my projects page!",
      },
    ],
  },
];

const indexedContent: IndexedSectionLayout[] = sectionContent.map((section) => {
  let hovIndex = 0;
  const indexedLayout: IconsTextLayout[] = section.content.map((sect) => {
    if (sect.hoverable) {
      //console.log(hovIndex);
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
  //console.log("hoverables is: " + Object.entries(hoverables));
  return {
    ...section,
    content: indexedLayout,
    hoverables: hoverables,
  };
});

export default indexedContent;
