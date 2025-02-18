function setup() { 
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 10; i++) {
		rays[i] = new CreateNewRay();
		rays[i].initialisation();
	};
	background(38,47,55);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// Ptite bite
//var time = 0;
var rays = [];
var colors = [[204,173,126],[112,196,163],[204,126,126]];

function CreateNewRay(){
	
};
CreateNewRay.prototype = {
	initialisation : function(){
    let index_color = Math.floor(random(0, 3));
		this.x = width/2;
		this.y = height/2;
		this.speed_x = random(-2, 2);
		this.speed_y = random(-2, 2);
		this.diameter = 20
		this.R_color = colors[index_color][0];
		this.green_color = colors[index_color][1];
		this.blue_color = colors[index_color][2];
	},

	redessine : function(){
    noStroke();
		fill(this.R_color, this.green_color, this.blue_color);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.x = this.x + this.speed_x;
		this.y = this.y + this.speed_y;
		if(this.x > width-this.diameter/2){
			this.speed_x = -1*Math.abs(this.speed_x);
		}
		if(this.x < this.diameter/2){
			this.speed_x = Math.abs(this.speed_x);
		}
		if(this.y > height-this.diameter/2){
			this.speed_y = -1*Math.abs(this.speed_y);
		}
		if(this.y < this.diameter/2){
			this.speed_y = Math.abs(this.speed_y);
		}
	}
}

function draw() {

	for (var i = 0; i < rays.length; i++) {
		rays[i].redessine();
	};
}