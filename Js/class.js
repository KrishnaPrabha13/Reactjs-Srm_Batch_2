class Animal 
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color ;
        if(this.constructor == Animal)
        {
            throw new Error("Animal feature");
        }
    }
    leg()
    {
        console.log(`${this.name} has four leg`);
    }
}
class Lion extends Animal
{
    constructor(name,color)
    {
        super(name,color);
        this.color = color;
    }
    feature()
    {
        console.log(`Lion is rude`);
    }
}

let  l = new Lion("White Lion","Brown");
l.leg();
l.feature();