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
import games from "/projects/games.png";
import weather from "/projects/weather.png";
import medsoft from "/projects/medsoft.png";
import sqlite from "/skills/sqlite.png";
import sin from "/illustrations/sin.png";
import illustrator from "/skills/ai.svg";
import photoshop from "/skills/photoshop.svg";

export const technologies = [
  {
    id: 0,
    icon: html,
    name: "HTML",
  },
  {
    id: 1,
    icon: css,
    name: "CSS",
  },
  {
    id: 2,
    icon: sass,
    name: "SCSS",
  },
  {
    id: 3,
    icon: js,
    name: "Javascript",
  },
  {
    id: 4,
    icon: ts,
    name: "Typescript",
  },
  {
    id: 5,
    icon: react,
    name: "React / React Native",
  },
  {
    id: 6,
    icon: node,
    name: "Node JS",
  },
  {
    id: 7,
    icon: firebase,
    name: "Firebase",
  },
  {
    id: 8,
    icon: git,
    name: "Git",
  },
  {
    id: 9,
    icon: tailwind,
    name: "Tailwind CSS",
  },
  {
    id: 10,
    icon: illustrator,
    name: "Adobe Illustrator",
  },
  {
    id: 11,
    icon: photoshop,
    name: "Adobe Photoshop",
  },
];

export const projects = [
  {
    id: 0,
    img: purpledminds,
    name: "Purpledminds",
    link: "https://purpledminds.com",
    tech: [
      {
        id: 0,
        icon: react,
        name: "react",
      },
      {
        id: 1,
        icon: tailwind,
        name: "tailwind",
      },
    ],
    description:
      "Portfolio of company Purpledminds. Static website with beautiful, responsive & modern deisgn with framer motion animations",
  },
  {
    id: 1,
    img: languageCorpus,
    name: "Language Corpus",
    link: "http://corpora.iliauni.edu.ge/search_words",
    tech: [
      {
        id: 0,
        icon: html,
        name: "html",
      },
      {
        id: 1,
        icon: css,
        name: "css",
      },
      {
        id: 2,
        icon: js,
        name: "js",
      },
    ],
    description:
      "Website of Illia State University, where every text data which Illiauni owns can be searched and filtered. This is one of my first projects where I worked with team of backened developers & designers.",
  },
  {
    id: 2,
    img: netflix,
    name: "Netflix clone",
    link: "https://dynamic-paprenjak-586a86.netlify.app",
    tech: [
      {
        id: 0,
        icon: react,
        name: "react",
      },
      {
        id: 1,
        icon: sass,
        name: "sass",
      },
      {
        id: 2,
        icon: firebase,
        name: "firebase",
      },
    ],
    description:
      "Netflix clone, fully responsive, where user can watch film trailers. This website uses firebase authentication as well as TMDB API",
  },
  {
    id: 3,
    img: games,
    name: "Karma games",
    link: "https://beautiful-salamander-e8d545.netlify.app",
    tech: [
      {
        id: 0,
        icon: react,
        name: "react",
      },
      {
        id: 1,
        icon: ts,
        name: "typescript",
      },
      {
        id: 2,
        icon: sass,
        name: "sass",
      },
    ],
    description:
      "Karma games, dynamic website to search, save, scroll through new games. This is made using RAWG api. One of my first Typescript project which helped me understand types in javascript.",
  },
  {
    id: 4,
    img: weather,
    name: "Weather",
    link: "https://ornate-marshmallow-18e926.netlify.app",
    tech: [
      {
        id: 0,
        icon: react,
        name: "react",
      },
      {
        id: 1,
        icon: ts,
        name: "typescript",
      },
      {
        id: 2,
        icon: sass,
        name: "sass",
      },
    ],
    description:
      "Weather, one of my first web application. Here user can search different cities/countries weather. Fully responsive with beautiful design.",
  },
  {
    id: 5,
    img: medsoft,
    name: "Medsoft Task",
    link: "https://medsoft-task.onrender.com",
    tech: [
      {
        id: 0,
        icon: react,
        name: "react",
      },
      {
        id: 1,
        icon: tailwind,
        name: "tailwind",
      },
      {
        id: 2,
        icon: node,
        name: "nodejs",
      },
      {
        id: 3,
        icon: sqlite,
        name: "sqlite",
      },
    ],
    description:
      "lorem ipsum dolor rame rume rime rame rume rime rame rume rimeasdsadas asdasdasad asdasd asda asd as da d",
  },
];

export const illustrationProjects = [
  {
    id: 0,
    img: ashKnight,
    name: "Ash Knight",
  },
  {
    id: 1,
    img: sunKnight,
    name: "Solaire of Astora",
  },
  {
    id: 2,
    img: malenia,
    name: "Goddess of Rot",
  },
  {
    id: 3,
    img: theFall,
    name: "The Fall",
  },
  {
    id: 4,
    img: sin,
    name: "Sin",
  },
];
