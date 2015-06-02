var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

var skillsReady = false;
var skillsImage = new Image();
skillsImage.onload = function () {
	skillsReady = true;
};
skillsImage.src = "images/bomb.png";

var boomReady = false;
var boomImage = new Image();
boomImage.onload = function () {
	boomReady = true;
};
boomImage.src = "images/boom.png";