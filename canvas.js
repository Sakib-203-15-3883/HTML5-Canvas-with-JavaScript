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

// creates a circle

//This line sets the fill color of the shapes drawn on the canvas. In this case, the color is set to blue.
context.fillStyle = "blue";

// context.lineWidth = 2;

//This line calculates the x-coordinate of the center of the canvas by dividing the canvas width by 2.
const centerX = canvas.width / 2;

//Similarly, this line calculates the y-coordinate of the center of the canvas by dividing the canvas height by 2.
const centerY = canvas.height / 2;

//Here, the radius of the circle is set to 100 pixels.
const radius = 5;

//This line begins a new path. It clears any existing path or sub-paths and allows you to start drawing a new shape.

context.beginPath();

//The arc() method is used to draw a circular arc or a full circle. It takes several parameters: the x-coordinate and y-coordinate of the center, the radius, the starting angle (in radians), and the ending angle (in radians). In this case, the starting angle is 0, and the ending angle is 2 * Math.PI, which corresponds to a full circle.

//The parameters passed to arc() define the properties of the arc or circle:

// centerX: This is the x-coordinate of the center of the arc or circle. It specifies the horizontal position on the canvas where the arc or circle will be centered.

// centerY: This is the y-coordinate of the center of the arc or circle. It specifies the vertical position on the canvas where the arc or circle will be centered.

// radius: This is the radius of the arc or circle. It determines the distance from the center to the outer edge of the arc or circle.

// 0: This is the starting angle of the arc in radians. In this case, the angle is set to 0, which corresponds to the rightmost point of the circle.

// 2 * Math.PI: This is the ending angle of the arc in radians. In this case, it is set to 2 * Math.PI, which is equivalent to 360 degrees or a full circle. Math.PI represents the value of pi (approximately 3.14159), and 2 * Math.PI represents the angle required for a full circle.

context.arc(centerX, centerY, radius, 0, 2 * Math.PI);

//This line fills the current path with the fill color specified by fillStyle. In this case, it fills the circle with the color blue.
context.fill();

// // Draw the circle outline
// context.beginPath();
// context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
