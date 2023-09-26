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
            name: "Waitrose Web-App",
            type: "commercial",
            text: "Also at Kanda, our premium product offering was a React app for the clients wanting a more interactive experience. I was part of the development team which deployed this app which, at over 40,000 files, is far more complex than its website counterpart. The codebase was developed by PocketApp before I joined the company, so our developmental input was largely in a styling capacity. The experience of working on larger-scale apps like this one has been invaluable.",
            code: false,
            image: waitrose,
            url: "https://google.com"
        },
        {
            name: "MealMaker App",
            type: "Personal",
            text: "This app scans the web for potential recipes based on inputted ingredients. The React Effect hook was combined with an async await function to grab data from the API. I used State hooks to update the UI and localStorage whenever incoming data changes, and props to pass said data between components. I used dependencies like React Router DOM and Framer Motion for navigation and animation. Each component is functional rather class, in line with best practice.",
            code: "https://google.com",
            image: mealmaker,
            url: "https://google.com"

        },
        {
            name: "1 Pear Tree Website",
            type: "commercial",
            text: "This is a website I built for our client team at Kanda. I set up the files locally, using MySQL for the database. I populated a CSS stylesheet to match the Figma prototype, the left-fixed nav-panel a standout feature. I used JavaScript for functionality like the scroll-to-section feature. I set up the project on WordPress, the client team added content through Advanced Custom Fields, and I linked the fields to HTML elements using PHP.",
            code: false,
            image: peartree,
            url: "https://google.com"

        },
        {
            name: "Pixel Sketchpad",
            type: "personal",
            text: "Built to demonstrate the power of vanilla JavaScript, this is a sketchpad which allows the user to paint pixel portraits. Showing off JS ES6, it uses ternary operators, template literals, and arrow functions throughout, making this game functional in just 105 lines of code. The dark mode feature efficiently uses JavaScript to toggle CSS variable values. Though the concept is simple, the UI is satisfying – if you’re on a PC, I’d urge you to give it a go.",
            code: "https://google.com",
            image: pixelsketch,
            url: "https://google.com"

        },
    ]
}
    