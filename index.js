const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./Develop:lib/shapes");

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    createShape() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shapeElement}
        ${this.textElement}
        </svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.createShape();
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter three letters for the logo.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter the color of the text.",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?",
    },
    {
        type: "list",
        name: "imageShape",
        message: "What shape are you thinking?",
        choices: ["Square", "Triangle", "Circle"],
    },
];

function writeToFile(file, data) {
    fs.writeFile(file, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("Success!");
    });
}

async function runTest() {
    console.log("Starting test");
    let svgString = "";
    const svgFile = "logo.svg";
    const answers = await inquirer.prompt(questions);

    let userText = answers.text; // Use the user's input for text

    if (userText.length !== 3) {
        console.log("Please enter exactly 3 letters");
        return;
    }

    let userTextColor = answers.textColor;
    let userShapeColor = answers.shapeColor;
    let userShape;

    if (answers.imageShape === "Square" || answers.imageShape === "square") {
        userShape = new Square();
    } else if (answers.imageShape === "Triangle" || answers.imageShape === "triangle") {
        userShape = new Triangle();
    } else if (answers.imageShape === "Circle" || answers.imageShape === "circle") {
        userShape = new Circle();
    }

    userShape.setColor(userShapeColor);

    const svg = new Svg();
    svg.setTextElement(userText, userTextColor);
    svg.setShapeElement(userShape);
    svgString = svg.createShape();

    console.log("Generated logo.svg!")
    writeToFile(svgFile, svgString);
}

runTest();