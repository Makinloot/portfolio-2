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
        icon: react,
        name: "react",
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
];
