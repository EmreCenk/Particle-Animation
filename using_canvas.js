

var canvas = document.querySelector("canvas") //selecting the canvas from the html


//Making canvas full screen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Setting a variable for the canvas 2d context object:

var c = canvas.getContext("2d");

var x,y,w,h;

x=100;
y=100;
w=50;
h=50;
c.fillRect(x,y,w,h);