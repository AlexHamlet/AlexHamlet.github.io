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
			d: Math.random()*mp,
			rgba: " " + (Math.random() * 255) + " ," + (Math.random() * 255) + " ," + (Math.random() * 255) + " ",
			rgbc:  randomColor() + " ," + randomColor() + " ," + randomColor(),
		});
	}
	
	function randomColor(){
		return Math.floor(Math.random()*255);
	}
	
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		//ctx.fillStyle = "rgb(" + p.rgbc + ")";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.fillStyle = "rgb(" + p.rgbc + ")";
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
					particles[i].x =  Math.random()*W
					particles[i].y =  -10;
			}
		}
	}
	
	setInterval(draw, 33);
};