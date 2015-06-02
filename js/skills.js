var skills = {
	skill: 0,
	render: function () {
		ctx.fillStyle = "#fff";
		ctx.font = "30px Helvetica";
		ctx.textAlign = "left";
		ctx.fillText( "Skills: ", 18, 650);
	},
	add: function () {
		if(this.skill > 3) {
			return false;
		}
		this.skill += 1;
	},
	reset: function () {
		this.skill = 0;
		this.time = 0;
	},
	useSkill: false
};
