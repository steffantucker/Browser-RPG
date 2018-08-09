/**
 * Item properties:
 * 	name				random?
 * 	type				defense or attack
 * 	baseValue		base attack or defense value
 * 	id					item id
 */

const names = {
	attack: ['injector', 'virus', 'pkill', 'taskkill', 'malware', 'bloatware'],
	defense: ['antivirus', 'processhardener', 'VPN', 'watercooling']
};

const Item = function() {
	let id = 0;

	return function() {
		this.id = id++;
		this.type = Math.random() < 0.5 ? 'defense' : 'attack';
		this.name =
			names[this.type][Math.floor(Math.random() * names[this.type].length)];
		this.baseValue = Math.floor(Math.random() * 10) + 1;
	};
};

Item.prototype.toString = function() {
	return `${this.name}: ${this.type} +${this.baseValue}`;
};
