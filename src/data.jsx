import javascript from "./assets/icons/javascript.svg"
import react from "./assets/icons/react.png"
import css from "./assets/icons/css.png"
import html from "./assets/icons/html.png"
import git from "./assets/icons/git.png"
import node from "./assets/icons/nodejs.png"
import ajax from "./assets/icons/ajax.png"
import mySQL from "./assets/icons/mySQL.svg"
import filezilla from "./assets/icons/filezilla.png"
import jQuery from "./assets/icons/jquery.svg"
import wordpress from "./assets/icons/wordpress.png"
import figma from "./assets/icons/figma.png"
import photoshop from "./assets/icons/photoshop.png"
import illustrator from "./assets/icons/illustrator.png"

import waitrose from "./assets/mockup-waitrose.png"
import pixelsketch from "./assets/mockup-pixelsketch.png"
import peartree from "./assets/mockup-peartree.png"
import mealmaker from "./assets/mockup-mealmaker.png"

export const data = {
    technologies: [
        {
            name: "React",
            url: react
        },
        {
            name: "JavaScript ES6",
            url: javascript
        },
        {
            name: "CSS3",
            url: css
        },
        {
            name: "HTML5",
            url: html
        },
        {
            name: "Git",
            url: git
        },
        {
            name: "Node.js",
            url: node
        },
        {
            name: "AJAX",
            url: ajax
        },
        {
            name: "MySQL",
            url: mySQL
        },
        {
            name: "FileZilla",
            url: filezilla
        },
        {
            name: "jQuery",
            url: jQuery
        },
        {
            name: "WordPress",
            url: wordpress
        },
        {
            name: "Figma",
            url: figma
        },
        {
            name: "Photoshop",
            url: photoshop
        },
        {
            name: "Illustrator",
            url: illustrator
        }
    ],
    projects: [
        {
            name: "1 Pear Tree Website",
            type: "commercial",
            languages: "CSS, JavaScript, PHP, WordPress",
            text: "This is a website I built for our client team at Kanda. I set up the files locally with a MySQL database. I populated the stylesheet to match the Figma prototype, and achieved features like the scroll-to-section using JavaScript. Using WordPress, the client team added content through Advanced Custom Fields, and I linked the fields to HTML elements using PHP.",
            code: false,
            image: peartree,
            url: "https://1peartreestreet.co.uk/"

        },
        {
            name: "MealMaker App",
            type: "Personal",
            languages: "React, CSS",
            text: "This app scans for recipes using inputted ingredients. The React Effect hook wraps an async await function to grab data from the API. State hooks update the UI and localStorage when incoming data changes, and props pass said data between components. Dependencies like React Router DOM and Framer Motion handle navigation and animation. In line with best practice, I used function components throughout.",
            code: "https://github.com/invictalex/meal-maker",
            image: mealmaker,
            url: "https://the-meal-maker.netlify.app/"

        },
        {
            name: "Waitrose Web-App",
            type: "commercial",
            languages: "CSS Bootstrap, React",
            text: "Also at Kanda, our premium product offering was a React app, which, at over 40,000 files, is far more complex than its website counterpart. The codebase was developed by PocketApp before I joined, so our developmental input was predominantly styling using Bootstrap. The experience of working on larger-scale apps like this one has been invaluable.",
            code: false,
            image: waitrose,
            url: "https://www.waitrosewestealing.com/"
        },
        {
            name: "Pixel Sketchpad",
            type: "personal",
            languages: "JavaScript, CSS",
            text: "Built to demonstrate the power of vanilla JavaScript ES6, this is sketchpad allows the user to paint pixel portraits. It uses ternary operators, template literals, and arrow functions throughout, making this game functional in just 105 lines of code. The dark mode feature efficiently uses JavaScript to toggle CSS variable values. If you’re on a PC, I’d urge you to give it a go.",
            code: "https://github.com/invictalex/pixel-sketch",
            image: pixelsketch,
            url: "https://the-pixel-sketch.netlify.app/"

        },
    ]
}
    