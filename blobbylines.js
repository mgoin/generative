let t = 0;
let wave = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	t += 0.00;
	
	noiseDetail(3, 0.5);
	for (let i = -200; i < width+200; i++) {
    let amount = map(i, 0, width, t, t+20);
    wave[i] = abs(cos(amount));
    wave[i] += noise(amount);
  }

	translate(width/2, height/2)
	for (let angle = 0; angle < PI; angle += 0.1){
		rotate(PI/30.0 + 0.5);
		for (let i = 0; i < wave.length; i += 5) {
			wscale = 300
			stroke(1);
			circle(i, height/2, wave[i]*wscale);
		}
	}
	noLoop()

}
