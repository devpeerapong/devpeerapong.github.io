function Monster() {
	this.x = 1200;
	this.y = 500;
	this.yDefault = 500;
	this.hp = 100;
	this.atkPoint = 10;
	this.atk = false;
	this.dir = true;
	this.lastAttack = Date.now();
	this.attackStatus = false;
	this.atkP = function () {
		if( hero.hp !== 0 )
		{
			if( hero.hp - this.atkPoint <= 0 )
			{
				game.state = "over";
			}
			else
			{
				hero.hp -= this.atkPoint;
			}
		}
		else
		{
			game.state = "over";
		}
	};
	this.hpbar = function () {
	ctx.fillStyle = "#e74c3c";
	ctx.fillRect( this.x - 25, this.y - 25, this.hp, 10 );
	ctx.fillStyle = "#c0392b";
	ctx.strokeRect( this.x - 25, this.y - 25, this.hp, 10 );
	};
	this.moveForward = function () {
		this.y -= 10;
	};
	this.moveBackword = function () {
		this.y += 10;
	};
	this.atkCheck = function ( hero ) {
		if( this.x < hero.xDefault + 60 && Date.now() - this.lastAttack > 2000 )
		{
			this.atk = true;
			this.atkMove();
		}

		if( this.attackStatus )
		{
			this.attackStatus = false;
			this.atkP();
		}

		
	};

	this.atkMove = function ( hero ) {
		if( this.atk && this.dir )
		{
			if( this.y < this.yDefault - 30 )
			{
				this.dir = false;
			}
			this.moveForward();
		}
		else if( this.atk )
		{
			if( this.y > this.yDefault - 20 )
			{
				this.lastAttack = Date.now();
				this.attackStatus = true;
				this.atk = false;
				this.dir = true;
			}
			this.moveBackword();
		}
	};

	this.move = function () {
		this.x -= 2;
	};

	this.die = function () {
		score.score += 500;

		if( hero.hp > 100 === false )
		{
			hero.hp += 5;
		}
	};

	this.bombPos = 0 ;
}