
 function loadImage() {
  alert("Image is loaded");
}

function getBrowserType(){
	return("Browsertype");
}

function doSth () {
	var div1 = document.getElementById("once").innerHTML = "text";

}
let x= 0;
	let y= 0;
	let useless = setInterval(draw, 500);
	function draw(){
	let canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	
	if (x<150){
		ctx.fillRect(0,0,x,y);
		x = x+1;
		}
	else if (y<75){
		ctx.fillRect(0,0,x,y);
		y++;
	}
	
}
function onLoad() {
	let date = new Date();
	var out = document.getElementById("importantdiv");
	var div1 = document.createElement("div");
	var plattform = navigator.platform;
	var name = "Browsername is: " + navigator.appName;
	var engine = "Browserenginge is: " + navigator.product;
	div1.innerHTML = name + " <br> " + engine + " <br> and it runs on: " + plattform;;
	
	const key = "currentDate";
	let cookie = "string";
	cookie = getCookie(key);
	div1.innerHTML +=" <br> Das letzte Besuchsdatum ist: " + cookie;
	setCookie(key, date.getUTCFullYear());
	out.appendChild(div1);
	
	
	
	
}
	


function setCookie(key, value){
	document.cookie= key + "=" + value + ";";
}
function getCookie(key){
	let cookie = document.cookie;
	var split = cookie.split("=");
	if(split[0] == key) {
		return split[1];
	} else {
		return "noCookiesyet";
	}
	
}

function clock(){
		var timer = window.setTimeout("drawSine()", 10);
	var x=0.0;
	function drawSine(){
	var y = Math.sin(Math.PI * x++/100.0) * 100 + 200;
	drawPixel(x, y);
	window.setTimeout("drawSine()", 10);
	}
	function drawPixel(x, y){
	var newdiv = document.createElement("div");
	newdiv.className = "pixel";
	newdiv.style.top = y;
	newdiv.style.left = x;
	document.body.appendChild(newdiv);
	}
	// window.clearTimeout(timer); // removes timer
}