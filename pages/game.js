var cvs = document.getElementBylcM("canvas");
var ctx = cvs.getContext("2d");

var bird = new ImageO; 
var bg = new Image(); 
var fg = new ImageO; 
var pipeUp = new ImageO; 
var pipeBottom = new ImageO;

bird.src = "img/bird.png"; 
bg.src = "img/bg.png"; 12    
fg.src = "img/fg.png";
pipellp.src = "img/pipellp.png"; 
pipeBottom.src = "img/pipeBottom.png";

var gap = 90;

function drawO { 
	ctx.drawlmage(bg, 0, 0);
	ctx.drawImage(pipeUp, 100, 0);
	ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);
	ctx.drawlmage(fg, 0, 0);
}

// Создание блоков
var pipe = [];

pipe[0] = {
	x : cvs.wigth;
	y : 0
}

// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1;

function draw {
	ctx.drawImage (bg,0,0);
	for (var i = 0; i < pipe.length; i++) {
		ctx.drawlmage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawlmage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
		pipe[i].x--;
		if (pipe[i].x == 125) {
			pipe.push({
				x : cvs.wigth,
				y : Math.floor(Math.random()*pipeUp.height) - pipeUp.height
			});
		}
	}
	ctx.drawlmage(fg,0,cvs.height-fg.height);
	ctx.drawlmage(bird, xPos, yPos);
	yPos += grav;
}

pipeBottom.onload = draw;