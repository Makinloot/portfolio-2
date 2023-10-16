import html from "/skills/html.png";
import css from "/skills/css.png";
import js from "/skills/js.png";
import ts from "/skills/ts.png";
import react from "/skills/react.png";
import node from "/skills/node.png";
import sass from "/skills/sass.png";
import firebase from "/skills/firebase.png";
import git from "/skills/git.png";
import tailwind from "/skills/tailwind.png";
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
