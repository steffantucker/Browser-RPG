/**
 * Player stats:
 * 	name						players name
 * 	hp							health points
 * 	equipedAttack		item equiped for attack
 * 	equipedDefend		item equiped for defense
 * 	items						array of items in inventory, does not included equiped items
 * 	isAlive					returns hp.current > 0
 *
 * Methods:
 *  attack					attacks, returns damage dealt
 * 	defend					defends, returns amount of damage blocked
 * 	damage					damages player
 * 	heal						heals player
 * 	equip						equips an item (by id?)
 * 	addItem					adds item to inventory
 */

function Player(name) {
	this.name = name;
	this.hp = {current: 20, max: 20};
	this.equipedAttack = null;
	this.equipedDefense = null;
	this.items = [];
	this.score = 0;

	this.attack = function() {
		return Math.floor(Math.random() * 6) + 1 + this.equipedAttack
			? this.equipedAttack.baseValue
			: 0;
	};
	this.defend = function() {
		return Math.floor(Math.random() * 6) + 1 + this.equipedDefense
			? this.equipedDefense.baseValue
			: 0;
	};
	this.heal = function(amount) {
		this.hp.current += amount;
		if (this.hp.current > this.hp.max) this.hp.current = this.hp.max;
	};
	this.damage = function(amount) {
		this.hp.current -= !this.equipedDefense
			? amount
			: amount > this.equipedDefense.baseValue
				? 0
				: amount - this.equipedDefense.baseValue;
	};
	this.addItem = function(item) {
		this.items.push(item);
	};
	this.equip = function(itemId) {
		if (this.items.find(item => item.id === itemId) !== 'undefined') {
			const item = this.items.findIndex(item => item.id === itemId);
			if (this.items[item].type === 'defense')
				this.equipedDefense = this.items.splice(item, 1)[0];
			else this.equipedAttack = this.items.splice(item, 1)[0];
		}
	};
	this.printInventory = function() {
		// TODO: make this function
	};
	this.printInfo = function() {
		// TODO: make this function
	};
}

Player.prototype = {
	get isAlive() {
		return this.hp.current > 0;
	}
};
