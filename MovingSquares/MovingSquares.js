window.onload = function(){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var mp = 50;
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*4+1,
			d: Math.random()*mp
		});
	}
	
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgb(255,255,255)"; //"rgb(" + Math.floor(Math.random()*256)+"," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.fillRect(p.x, p.y, 10, 10);
		}
		update();
	}
	
	var angle = 0;
	function update()
	{
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;

			if(p.x > W || p.x < 0 || p.y > H)
			{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
			}
		}
	}
	
	setInterval(draw, 33);
};