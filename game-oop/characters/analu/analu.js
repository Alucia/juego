function analu(map,x,y){
	Hero.call(this,map, x, y);
}

analu.prototype = Object.create(Hero.prototype);
analu.prototype.constructor = analu;


analu.prototype.image = 'characters/analu/analu.png';