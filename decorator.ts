abstract class Car{
    public description: string
    
    public getDescription(): string{
        return this.description
    }

    public abstract cost(): number
}

class ModelS extends Car{
    public description = "Model S"

    public cost(): number{
        return 73_000
    }
}

class ModelX extends Car{
    public description = "Model X"

    public cost(): number{
        return 77_000
    }
}

abstract class CarOptions extends Car{
    decoratedCar: Car
    public abstract getDescription(): string
    public abstract cost(): number
}

class AutoPilot extends CarOptions{
    decoratedCar: Car

    constructor(car: Car) {
        super()
        this.decoratedCar = car
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ", Autopilot"
    }    public cost(): number {
        return this.decoratedCar.cost() + 5_000
    }
}

class RearSeat extends CarOptions{
    decoratedCar: Car

    constructor(car: Car) {
        super()
        this.decoratedCar = car
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ", Rear seat"
    }    public cost(): number {
        return this.decoratedCar.cost() + 4_000
    }
}

let myTesla = new ModelS()
myTesla = new RearSeat(myTesla)

console.log(myTesla.getDescription())
console.log(myTesla.cost())