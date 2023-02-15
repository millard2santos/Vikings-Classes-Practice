// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        return this.health > 0 
        ?`${this.name} has received ${damage} points of damage`
        : `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health -= damage
        return this.health > 0 
        ? `A Saxon has received ${damage} points of damage`
        : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]
        
        const event = saxon.receiveDamage(viking.strength)
        this.saxonArmy.splice(randomSaxon,1)

        return event
        
    }
    saxonAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]
        
        const event = viking.receiveDamage(saxon.strength)
        console.log(this.vikingArmy.findIndex(e=> e.health <=0));
        if(viking.health <= 0)
        this.vikingArmy.splice(randomViking,1)
        



        return event
        
    }

    showStatus(){
        return this.saxonArmy.length === 0 
        ? 'Vikings have won the war of the century!'
        : this.vikingArmy.length === 0 
        ? 'Saxons have fought for their lives and survived another day...'
        : 'Vikings and Saxons are still in the thick of battle.'
    }

}
