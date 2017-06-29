
function Analu(map,x,y){
	Hero.call(this,map, x, y);
	this.name = "Analu";
	this.voice = "Google UK English Female";
}

Analu.prototype = Object.create(Hero.prototype);
Analu.prototype.constructor = Analu;


Analu.prototype.image = 'characters/analu/analu.png';

Analu.prototype.say = function(){
	const voice = this.voice;
	const speech = new SpeechSynthesisUtterance();

	this.getVoices(function(voices){
		speech.text = 'Hola, me llamo ' + this.name ;
		speech.voice = voices.find(function(item){
			return item.name === voice;
		});
		speechSynthesis.speak(speech);
	}.bind(this));
};
  