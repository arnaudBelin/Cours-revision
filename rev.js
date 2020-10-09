class Player{

    constructor(force, life, shot, name){
        this._force = force;
        this._life = life;
        this._shot = shot;
        this._name = name;

    }

    set force(force) {
        this._force = force;
    }

    set life(life) {
        this._life = life;
    }

    set shot(shot) {
        this._shot = shot;
    }

    set name(name) {
        this._name = name;
    }

    get name() {

        return this._name;
    }

    get force() {

        return this._force;
    }

    get life() {

        return this._life;
    }

    get shot() {

        return this._shot;
    }

    hit(){
        return this._force * Math.floor(Math.random() * 10) / 10;
    }


}

class Dragon extends Player{}

class Knight extends Player{}

class Game{
    constructor(player1, player2){
        this._player1 = player1;
        this._player2 = player2;
    }

    run(){


        

        while(this._player1.life > 0 && this._player2.life > 0){
            const randomNumber = Math.floor(Math.random() * (2)) + 1;
            if(randomNumber === 1){
            let coup = this._player2.hit()
            this._player1.life -= coup 
            console.log(`La vie de ${this._player1.name} est de ${this._player1.life}`)
        }else{
            let coup = this._player1.hit()
            this._player2.life -= coup 
            console.log(`La vie de ${this._player2.name} est de ${this._player2.life}`)        }
        }

        



    }
}

const dragon = new Player(10, 1000, 0, "Max");
const knight = new Player(10, 1000, 0, "Igor");

const jeu = new Game(dragon, knight);

jeu.run();