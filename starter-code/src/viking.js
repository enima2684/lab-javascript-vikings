// Soldier
class Soldier {

  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }

  isAlive(){
    return this.health > 0;
  }

}

// Viking
class Viking extends Soldier{


  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.isAlive()){
      return this.name + " has received "+ damage +" points of damage";
    }
    else{
      return this.name + " has died in act of combat"
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.isAlive()){
      return "A Saxon has received " + damage +" points of damage";
    }
    else{
      return "A Saxon has died in combat";
    }
  }

}



// War
class War{

  constructor(vikingArmy=[], saxonArmy=[]){
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
  }


  // Methods
  addViking(viking){
    this.vikingArmy.push(viking);
  }


  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }


  vikingAttack(){
    // 1. choose attacker from vikings
    var ixAttacker = Math.floor(Math.random()*this.vikingArmy.length);
    var attacker = this.vikingArmy[ixAttacker];

    // 2. choose the wounded saxon
    var ixOpponent = Math.floor(Math.random()*this.saxonArmy.length);
    var opponent = this.saxonArmy[ixOpponent];

    // 3. saxon receive the damage
    var out = opponent.receiveDamage(attacker.strength);

    // 4. remove it from the army if dead
    if(!opponent.isAlive()){
      this.saxonArmy.splice(ixOpponent, 1)
    }

    return out;
  }


  saxonAttack(){
    // 1. choose attacker from vikings
    var ixAttacker = Math.floor(Math.random()*this.saxonArmy.length);
    var attacker = this.saxonArmy[ixAttacker];

    // 2. choose the wounded saxon
    var ixOpponent = Math.floor(Math.random()*this.vikingArmy.length);
    var opponent = this.vikingArmy[ixOpponent];

    // 3. saxon receive the damage
    var out = opponent.receiveDamage(attacker.strength);

    // 4. remove it from the army if dead
    if(!opponent.isAlive()){
      this.vikingArmy.splice(ixOpponent, 1)
    }

    return out;

  }


  showStatus(){

    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }

  }

}
