var time = {
	limitDefault: 80,
	limit: 80,
	lv: 1,
	lvup: function () {
		lv += 0.2;
	},
	timeBar: function () {
		ctx.fillStyle = "#e74c3c";
		ctx.font = "25px Helvetica";
		ctx.fillText( "TIME", ( canvas.width / 2 ), 35);
		ctx.fillStyle = "#e74c3c";
		ctx.fillRect( canvas.width / 4, 50, this.limit * 7.5, 25 );
		ctx.fillStyle = "#c0392b";
		ctx.strokeRect( canvas.width / 4, 50, this.limit * 7.5, 25 );
	},
	start: function () {
		if( this.limit >= 0 )
		this.limit -= this.lv * 0.2;
		else
		{
			game.state = "over";
		}
	},
	add: function () {
		var add = 20 / this.lv;

		if( this.limit + add < this.limitDefault )
		{
			this.limit += add;
		}
		else if( this.limit + add > this.limitDefault )
		{
			this.limit += this.limitDefault - this.limit;
		}
		
	},
	del: function () {
		this.limit -= this.lv * 0.5;
	},
	reset: function () {
		this.limit = this.limitDefault;
	}
};