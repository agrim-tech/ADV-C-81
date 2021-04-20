canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color ="#1a1a1a";

canvas.addEventListener("mousedown",mouseclick);

function mouseclick(e){
    color =document.getElementById("input").value;
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    console.log(mouse_x);
    console.log(mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(){
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouse_x,mouse_y,45,0,2*Math.PI);
    ctx.stroke();   
}
function clearArea() {
     ctx.clearRect(0, 0, canvas.width, canvas.height); 
}