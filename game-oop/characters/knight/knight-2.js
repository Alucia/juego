function KnightHero(map, x, y) {
  Hero.call(this, map, x, y);

  // this.name = 'el caballero';
  // this.voice = 'Jorge';

  // this.getVoices(function (voices) {
  //   console.log(voices.filter(item => /^es\-/.test(item.lang)));
  // });
}

KnightHero.prototype = Object.create(Hero.prototype);
KnightHero.prototype.constructor = KnightHero;

// image property MUST be defined in prototype
KnightHero.prototype.image = 'characters/knight/knight.png';

// KnightHero.prototype.say = function () {
//   Hero.prototype.say.call(this);
//
//   document.body.style.backgroundColor = 'black';
//
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'transparent';
//   }, 1.5 * 1000);
// };
