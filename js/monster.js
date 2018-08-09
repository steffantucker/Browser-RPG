/**
 * Monster stats:
 * 	name						random, from list
 * 	hp							random in range
 * 	equipedAttack		item equiped for attack, random from list
 * 	equipedDefense	item equiped for defense, random from list
 *
 * Methods:
 * 	attack					returns amount of damage dealt
 * 	defend					returns amount of damage not taken
 *
 * TODO: make 3 enemy classes, with a range of health and attack power
 */

const names = [
	'Zero Cool',
	'Crash Override',
	'Johnny Mnemonic',
	'Neo',
	'Acid Burn',
	'The Phantom Phreak',
	'Cereal Killer',
	'Lord Nikon',
	'The Plague',
	'c0mrade',
	'Dark Dante',
	'George Hotz'
];

function Monster() {
	const points = Math.floor(Math.random() * 20) + 5;
	this.hp = {current: points, max: points};
	this.name = names[Math.floor(Math.random() * names.length)];

	this.attack = function() {
		return Math.floor(Math.random() * 6) + 1;
	};
	this.defend = function() {
		return Math.floor(Math.random() * 6) + 1;
	};
	this.damage = function(amount) {
		this.hp.current -= amount;
	};
}

Monster.prototype = {
	get isAlive() {
		return this.hp.current > 0;
	}
};
