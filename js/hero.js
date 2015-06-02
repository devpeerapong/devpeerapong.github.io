var hero = {
	xDefault: 400,
	yDefault: 500,
	target: null,
	targetPosition: null,
	x: 400,
	y: 500,
	firstPosition: 400,
	hp: 100,
	atkPoint: 50,
	atk: function () {
		this.move = true;
		this.dir = true;
	},
	move: false,
	dir: true,
	hpbar: function () {
		ctx.fillStyle = "#2ecc71";
		ctx.fillRect( this.x - 25, this.y - 25, this.hp, 10 );
		ctx.fillStyle = "#27ae60";
		ctx.strokeRect( this.x - 25, this.y - 25, this.hp, 10 );
	},
	moveForward: function () {
		this.x += 30;

		if( this.x < this.xDefault + ( monster.x - this.xDefault) / 3)
		{
			this.y -= this.x*0.009;
		}
		else
		{
			this.y += this.x*0.004;
		}
	},
	moveBackword: function () {
		this.x -= 20;
		if( this.y != this.yDefault )
		{
			this.y = this.yDefault;
		}
	},
	atkFunc: function ( ) {
		if( this.target )
		{
			if( this.move && this.dir )
			{
				if( this.x > this.target.x - 48)
				{
					this.dir = false;
					this.atkP( this.target );
				}
				this.moveForward();
			}
			else if( this.move )
			{
				if( this.x < this.xDefault )
				{
					this.move = false;
					this.dir = true;
				}
				this.moveBackword();
			}
		}
		else
		{
			if( this.move )
			{
				if( this.x < this.xDefault )
				{
					this.move = false;
					this.dir = true;
				}
				this.moveBackword();
			}
		}
		
	},
	atkP: function ( ) {
		if( this.target.hp !== 0 )
		{
			if( this.target.hp - this.atkPoint <= 0 )
			{
				this.target.die();

				monsters.splice(this.targetPosition, 1);


				this.target = null;
				distance = 1200;
			}
			else
			{
				this.target.hp -= this.atkPoint;
			}

		}
		else
		{
			this.target.die();

			monsters.splice(0, 1);

			this.target = null;
			distance = 1200;
		}
	}
};