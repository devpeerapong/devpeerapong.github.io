var canvas    = document.createElement( "canvas" );
var ctx       = canvas.getContext( "2d" );
canvas.width  = 1200;
canvas.height = 675;
document.body.appendChild(canvas);

ctx.font = "60px Helvetica";
ctx.textAlign="center";

var game = {
	state: "start",
	over: function () {
		ctx.textAlign = "center";
		ctx.fillStyle = "#c0392b";
		ctx.fillRect( canvas.width / 2 - 290, canvas.height/2 - 140 , 600, 300);
		ctx.fillStyle = "#e74c3c";
		ctx.fillRect( canvas.width / 2 - 300, canvas.height/2 - 150 , 600, 300);
		ctx.fillStyle = "#f1c40f";
		ctx.font = "70px Helvetica";
		ctx.fillText( "GAME OVER", ( canvas.width / 2 ), canvas.height / 2 + 20);
		ctx.font = "30px Helvetica";
		ctx.fillText( "Press Enter to Continue", ( canvas.width / 2 ), canvas.height / 2 + 80);
	},
	start: function ()
	{
		ctx.textAlign = "center";
		ctx.fillStyle = "#16a085";
		ctx.fillRect( canvas.width / 2 - 300, canvas.height/2 - 165 , 600, 100);
		ctx.fillStyle = "#fff";
		ctx.font = "40px Helvetica";
		ctx.fillText( "PRESS ENTER TO START", ( canvas.width / 2 ), canvas.height / 2 - 100);
	},
	effect: {
	}
};

	
str = str.toUpperCase();
var resource = str.split(" ");


var text = {
	wordPosition: Math.floor( ( Math.random() * resource.length ) ),
	wordToChar: function ( word ) {
		var wchar = [];
		for( var j = 0; j < word.length; j++ )
		{
			wchar.push( word.substring( j, j + 1 ) );
		}
		this.origin = word;
		this.char = wchar;
	},
	origin: null,
	char: null,
	show: 3,
	charPosition: 0,
	textPositionX: 30,
	textPositionY: 250,
	keyPosition: 0,
	alpha: 1,
	print: function ( wordPosition, fillStyle ) {
		var word = "";
		ctx.textAlign = "center";
		ctx.fillStyle = fillStyle;

		if( this.show > this.char.length )
		{
			this.show = this.char.length;
		}

		for( var i = this.keyPosition == 0 ? 0 : this.keyPosition + 1; i < this.show; i++ )
		{
			word += this.char[i];
		}
		ctx.fillText( word, ( canvas.width / 2 ), this.textPositionY);	
		ctx.strokeText( word, ( canvas.width / 2 ), this.textPositionY);	
	},
	printTrue: function ( wordPosition, fillStyle )
	{
		var word = "";
		ctx.textAlign = "center";
		ctx.fillStyle = fillStyle;

		if( this.show > this.char.length )
		{
			this.show = this.char.length;
		}

		for( var i = this.keyPosition == 0 ? 0 : this.keyPosition + 1; i < this.show; i++ )
		{
			word += this.char[i];
		}

		var wordBefore = word.slice(0, this.charPosition);
		var wordAfter = word.slice(this.charPosition);
		var distance = ctx.measureText( wordBefore ).width;

		ctx.fillText( word, ( canvas.width / 2 ), this.textPositionY);
		ctx.fillStyle = "#777777";
		ctx.fillText( wordAfter, ( canvas.width / 2 ) + distance/2, this.textPositionY);
	},
	reset: function () {
		this.charPosition = 0;
		this.keyPosition = 0;
		this.show = 3;
	}
};

var score = {
	score: 0,
	words: 0,
	render: function () {
		ctx.fillStyle = "#fff";
		ctx.font = "20px Helvetica";
		ctx.textAlign = "left";
		ctx.fillText( "Words: " + this.words, 20, 35);
		ctx.fillText( "Score: " + this.score, 20, 60);
	},
	endScore: function () {		
		ctx.fillText( "Words: " + this.words, ( canvas.width / 2 ) - 100, canvas.height / 2 - 70);
		ctx.fillText( "Score: " + this.score, ( canvas.width / 2 ) + 100, canvas.height / 2 - 70);	
	},
	reset: function() {
		this.score = 0;
		this.words = 0;
	}
};

addEventListener("keydown", function (e) {
		if( e.keyCode == 13 )
		{
			if( game.state != "play" )
			{
				score.reset();
			}
			game.state = "play";
		}

		if( game.state == "play" )
		{
			checkKey(String.fromCharCode(e.keyCode));
		}

		if( skills.skill > 0 && e.keyCode == 32 ) {
			skills.useSkill = true;
			skills.skill--;
		}
	}, false);

function checkKey( keyChar )
{
	if( keyChar == text.char[text.charPosition] )
	{
		text.show++;
		text.charPosition++;
	}
	else
	{
		text.reset();
		time.del();
		combo.reset();

	}

	if( text.charPosition == text.show - 1 )
	{
		hero.atk();
		text.reset();
		text.wordPosition = Math.floor( ( Math.random() * resource.length ) );
		text.print(resource[text.wordPosition], "#777");
		time.add();

		combo.time = Date.now();

		combo.add();

		if (combo.score > 2) {
			skills.add();
		}

		score.words += 1;
	}
};

var monster = new Monster();
var monsters = ["aaaa", monster];


var distance = 1200;
var now = Date.now();
var render = function () {

	text.wordToChar(resource[text.wordPosition]);

	if( bgReady )
	{
		ctx.drawImage( bgImage, 0, 0, 1450, 675 );
	}

	if( heroReady )
	{
		ctx.drawImage( heroImage, hero.x, hero.y, 48, 48 );

		hero.hpbar();
	}

	if( skillsReady )
	{
		if( skills.skill > 0 ) {
			for(var i = 1; i < skills.skill+1; i++) {
				ctx.drawImage( skillsImage, (90 + (i*35)), 610, 48, 48 );
			}
		}
	}

	if( boomReady && skills.useSkill ) {
		if(boomPos < boom.sprite.length) {
			ctx.drawImage(boomImage, boom.sprite[boomPos].left, boom.sprite[boomPos].top,100,100,canvas.width / 2 -400,canvas.height / 2 -400,800,800);
			boomPos++;
		} else {
			boomPos = 0;
			skills.useSkill = false;
		}
	}

	time.timeBar();
	score.render();
	combo.render();
	skills.render();

	if( hero.move )
	{
		hero.atkFunc( monster );
	}

	switch( game.state ){
		case "over":
			time.reset();
			game.over();
			score.endScore();
			monsters = ["aaaa"];
			hero.hp = 100;
			combo.reset();
			skills.reset();
			break;
		case "start":
			game.start();
			break;
		default:
			ctx.font = "60px Helvetica";
			text.print(resource[text.wordPosition], "#777");
			text.printTrue(resource[text.wordPosition], "#3e9ddd");
			time.start();

			if( monsterReady )
			{
				for( var i = 1; i < monsters.length; i++ )
				{
					ctx.drawImage( monsterImage, monsters[i].x, monsters[i].y, 48, 48 );

					monsters[i].hpbar();

					if( monsters[i].x > hero.x + 48)
					{
						monsters[i].move();
					}

					if( distance > monsters[i].x - hero.x )
					{
						distance = monsters[i].x - hero.x;
						hero.target = monsters[i];
						hero.targetPosition = i;
					}

					monsters[i].atkCheck( hero );

					if( skills.useSkill && monsters.length !== 0 ) {
						monsters[i].die();
						monsters.splice(i, 1);
						time.add();
					}

				}
			}


			var then = Date.now();

			if( then - now > 2000 )
			{
				now = then;
				var newMonster = new Monster();
				monsters.push( newMonster );
			}

			if( Date.now() - combo.time < 1500 === false )
			{
				combo.reset();
			}
			break;
	}
};

var main = function () {

	render();
	requestAnimationFrame( main );
};

main();