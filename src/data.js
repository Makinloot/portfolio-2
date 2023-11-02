import { v4 as uuidv4 } from "uuid";
import html from "/skills/html.svg";
import css from "/skills/css.svg";
import js from "/skills/js.svg";
import ts from "/skills/ts.svg";
import react from "/skills/react.svg";
import node from "/skills/node.svg";
import sass from "/skills/sass.svg";
import firebase from "/skills/firebase.svg";
import git from "/skills/git.svg";
import tailwind from "/skills/tailwind.svg";
import purpledminds from "/projects/purpledminds.png";
import languageCorpus from "/projects/language-corpus.png";
import netflix from "/projects/netflix.png";
import ashKnight from "/illustrations/ash-knight.png";
import sunKnight from "/illustrations/sun-knight.png";
import malenia from "/illustrations/malenia.png";
import theFall from "/illustrations/the-fall.png";
import mohg from "/illustrations/mohg.png";
import promisedChildren from "/illustrations/promised-children.png";
import games from "/projects/games.png";
import weather from "/projects/weather.png";
import lizaPf from "/projects/pf-liza.png";
// import sqlite from "/skills/sqlite.png";
import batushka from "/illustrations/batushka.png";
import p4 from "/illustrations/p4.png";
import eldenLord from "/illustrations/elden-lord.png";
import echoes from "/illustrations/echoes.png";
import illustrator from "/skills/ai.svg";
import photoshop from "/skills/photoshop.svg";

export const technologies = [
  {
    id: uuidv4(),
    icon: html,
    name: "HTML",
  },
  {
    id: uuidv4(),
    icon: css,
    name: "CSS",
  },
  {
    id: uuidv4(),
    icon: sass,
    name: "SCSS",
  },
  {
    id: uuidv4(),
    icon: js,
    name: "Javascript",
  },
  {
    id: uuidv4(),
    icon: ts,
    name: "Typescript",
  },
  {
    id: uuidv4(),
    icon: react,
    name: "React / React Native",
  },
  {
    id: uuidv4(),
    icon: node,
    name: "Node JS",
  },
  {
    id: uuidv4(),
    icon: firebase,
    name: "Firebase",
  },
  {
    id: uuidv4(),
    icon: git,
    name: "Git",
  },
  {
    id: uuidv4(),
    icon: tailwind,
    name: "Tailwind CSS",
  },
  {
    id: uuidv4(),
    icon: illustrator,
    name: "Adobe Illustrator",
  },
  {
    id: uuidv4(),
    icon: photoshop,
    name: "Adobe Photoshop",
  },
];

export const projects = [
  {
    id: uuidv4(),
    img: purpledminds,
    name: "Purpledminds",
    link: "https://purpledminds.com",
    tech: [
      {
        id: uuidv4(),
        icon: react,
        name: "react",
      },
      {
        id: uuidv4(),
        icon: tailwind,
        name: "tailwind",
      },
    ],
    description:
      "Portfolio of company Purpledminds. Static website with beautiful, responsive & modern deisgn with framer motion animations",
  },
  {
    id: uuidv4(),
    img: languageCorpus,
    name: "Language Corpus",
    link: "http://corpora.iliauni.edu.ge/search_words",
    tech: [
      {
        id: uuidv4(),
        icon: html,
        name: "html",
      },
      {
        id: uuidv4(),
        icon: css,
        name: "css",
      },
      {
        id: uuidv4(),
        icon: js,
        name: "js",
      },
    ],
    description:
      "Website of Illia State University, where every text data which Illiauni owns can be searched and filtered. This is one of my first projects where I worked with team of backened developers & designers.",
  },
  {
    id: uuidv4(),
    img: netflix,
    name: "Netflix clone",
    link: "https://dynamic-paprenjak-586a86.netlify.app",
    tech: [
      {
        id: uuidv4(),
        icon: react,
        name: "react",
      },
      {
        id: uuidv4(),
        icon: sass,
        name: "sass",
      },
      {
        id: uuidv4(),
        icon: firebase,
        name: "firebase",
      },
    ],
    description:
      "Netflix clone, fully responsive, where user can watch film trailers. This website uses firebase authentication as well as TMDB API",
  },
  {
    id: uuidv4(),
    img: games,
    name: "Karma games",
    link: "https://beautiful-salamander-e8d545.netlify.app",
    tech: [
      {
        id: uuidv4(),
        icon: react,
        name: "react",
      },
      {
        id: uuidv4(),
        icon: ts,
        name: "typescript",
      },
      {
        id: uuidv4(),
        icon: sass,
        name: "sass",
      },
    ],
    description:
      "Karma games, dynamic website to search, save, scroll through new games. This is made using RAWG api. One of my first Typescript project which helped me understand types in javascript.",
  },
  {
    id: uuidv4(),
    img: weather,
    name: "Weather",
    link: "https://ornate-marshmallow-18e926.netlify.app",
    tech: [
      {
        id: uuidv4(),
        icon: react,
        name: "react",
      },
      {
        id: uuidv4(),
        icon: ts,
        name: "typescript",
      },
      {
        id: uuidv4(),
        icon: sass,
        name: "sass",
      },
    ],
    description:
      "Weather, one of my first web application. Here user can search different cities/countries weather. Fully responsive with beautiful design.",
  },
  {
    id: uuidv4(),
    img: lizaPf,
    name: "Artist Portfolio",
    link: "https://deluxe-nougat-af091d.netlify.app",
    tech: [
      {
        id: uuidv4(),
        icon: react,
        name: "react",
      },
      {
        id: uuidv4(),
        icon: tailwind,
        name: "tailwind",
      },
    ],
    description:
      "Artist portfolio, with animations, responsive and zoomable images.",
  },
];

export const illustrationProjects = [
  {
    id: uuidv4(),
    img: ashKnight,
    name: "Ash Knight",
  },
  {
    id: uuidv4(),
    img: sunKnight,
    name: "Solaire of Astora",
  },

  {
    id: uuidv4(),
    img: malenia,
    name: "Goddess of Rot",
  },

  {
    id: uuidv4(),
    img: batushka,
    name: "The False Promise",
  },
  {
    id: uuidv4(),
    img: p4,
    name: "suicide is legal",
  },
  {
    id: uuidv4(),
    img: eldenLord,
    name: "the first elden lord",
  },
  {
    id: uuidv4(),
    img: echoes,
    name: "echoes",
  },
  {
    id: uuidv4(),
    img: theFall,
    name: "The Fall",
  },
  {
    id: uuidv4(),
    img: mohg,
    name: "Birth of a Dynasty",
  },
  {
    id: uuidv4(),
    img: promisedChildren,
    name: "the promised children",
  },
];
