var combo = {
	score: 0,
	time: 0,
	render: function () {
		ctx.fillStyle = "#fff";
		ctx.font = "40px Helvetica";
		ctx.textAlign = "left";
		ctx.fillText( "Combo: " + this.score, 970, 55);
	},
	add: function () {
		this.score += 1;
	},
	reset: function () {
		this.score = 0;
		this.time = 0;
	}
};