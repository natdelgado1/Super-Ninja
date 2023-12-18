class ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName= () =>{
        console.log(this.nombre);
    }
    showStats= () => {
        console.log(this.nombre,this.salud, this.velocidad, this.fuerza);
    }
    drinkSake= () =>{
        this.salud+= 10;
    }

}

class sensei extends ninja{
    constructor(nombre){
        super("","");
        this.nombre= nombre;
        this.salud = 200;
        this.fuerza=10;
        this.velocidad = 10;
        this.sabiduría = 10;
    }

    speakWisdom= () =>{
        this.drinkSake();
        console.log("El verdadero conocimiento es conocer la extensión de la propia ignorancia");
    }
}

const newNinja = new ninja ("Ninja", 2);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
newNinja.showStats();

const splinter = new sensei ("Splinter");
splinter.sayName();
splinter.showStats();
splinter.drinkSake();
splinter.speakWisdom();
