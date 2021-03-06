let sineSketch = p =>{
	var colorPicker,angleSlider,rectSlider;
	p.setup = function(){
		p.createCanvas(400,400);
		p.angleMode(p.DEGREES);
		p.rectMode(p.CENTER);
		colorPicker = p.createColorPicker('#000000');
		angleSlider = p.createSlider(25,360,100,5);
		rectSlider = p.createSlider(5,300,5,5);
	}
	p.draw = function(){
		p.background(colorPicker.color());
		p.noFill();
		p.translate(p.width/2, p.height/2);
		
		for (let i = 0; i <rectSlider.value(); i++) {
			p.push();
			p.rotate(p.sin(p.frameCount+i)*angleSlider.value()*1.5);
			p.strokeWeight(2);
			var r = p.map(p.sin(p.frameCount), -1, 1, 50, 255);
			var g = p.map(p.cos(p.frameCount/2), -1, 1, 50, 255);
			var b = p.map(p.sin(p.frameCount*4), -1, 1, 50, 255);
			if(p.mouseIsPressed){
				p.stroke(p.random(0, 255),p.random(0, 255),p.random(0, 255));
				// p.background(0);
			}
			else{
				p.stroke(r,g,b,80);
			}
			
			p.rect(0, 0, 250-i*1.5, 250-i*1.5,(rectSlider.value()/2)-i/2);
			p.pop();
		}
		
		
	}
}

var draw2 = new p5(sineSketch, window.document.getElementById('drawing2'));