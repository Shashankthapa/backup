class Showroom{

    constructor(name, cc, engine,{kit1,kit2}){
        this.name = name;
        this.cc = cc;
        this.engine = engine;
        this.kit1 = kit1;
        this.kit2 = kit2;
    }

    display(){
        return `The bike's name is ${this.name}, power output is  : ${this.cc}. Engine name is : ${this.engine} and the kit is ${this.kit1} and ${this.kit2}`;
    }
}

class Retails extends Showroom{

    constructor(name,cc,engine,kit,color){
        super(name,cc,engine,kit);
        this.color = color;
    }

    display_r(){
        return `${super.display()} and the color is : ${this.color}`;
    }
}

let s2 = new Retails("Himalayan",452,"Sherpa-X",{"kit1" : "leg-guard", "kit2" : "hand-guard"},"Black");

console.log(s2.display_r());
