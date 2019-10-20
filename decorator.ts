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

