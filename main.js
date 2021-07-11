var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
var mouse_event = "";
var last_x,last_y;
var color = "black";
var line_width = 3;

if (width<998){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
mouse_event = "mousedown";
color = document.getElementById("color").value;
line_width = document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;

    
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e) {
color = document.getElementById("color").value;
line_width = document.getElementById("line_width").value;
last_x = e.touches[0].clientX - canvas.offsetLeft;
last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}

function clear_Area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}