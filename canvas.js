// In HTML5 and JavaScript, the <canvas> element is used to draw graphics, animations, and images dynamically on a web page. It provides a drawing context that can be accessed and manipulated using JavaScript.

// Get the canvas element
//const canvas = document.getElementById("canvas");: This line retrieves the canvas element with the id "canvas" using the getElementById method and assigns it to the variable canvas.
const canvas = document.getElementById("canvas");
console.log(canvas);

// context is a variable that represents the 2D drawing context of the <canvas> element.

// The 2D drawing context (ctx) provides a set of methods and properties that allow you to draw and manipulate graphics on the canvas. It is obtained by calling the getContext("2d") method on the canvas element.

// Once you have the drawing context , you can use its methods to draw shapes, lines, text, and images on the canvas.

// Get the 2D drawing context

//Here, the 2D drawing context is obtained by calling the getContext("2d") method on the canvas element. The context is assigned to the variable contex for further use.
const context = canvas.getContext("2d");

// Set the fill color
//This line sets the fill color of the shapes drawn on the canvas. In this case, the color is set to red.
context.fillStyle = "black";

// Set the stroke color
//Here, the stroke color is set to blue. The stroke color is used for the outline of shapes.
// context.strokeStyle = "black";

// Set the stroke width
//This line sets the width of the stroke, which determines the thickness of the outline. In this case, the width is set to 3 pixels.
context.lineWidth = 3;

// Draw a filled rectangle
//The fillRect method is called to draw a filled rectangle on the canvas. The parameters specify the x and y coordinates of the top-left corner of the rectangle, followed by its width and height.
const paddleWidth = 50;
const paddleHight = 10;

context.fillRect(120, 130, paddleWidth, paddleHight);

// Draw a rectangular outline
// Here, the strokeRect method is called to draw an outline of the rectangle. It uses the same parameters as fillRect to specify the position and dimensions of the rectangle.
// context.strokeRect(50, 50, 40, 10);
