interface Subject{
    registerObserver(o: Observer): void
    removeObserver(o: Observer): void
    notifyObservers(): void
}

interface Observer{
    update(temperature: number): void
}

class Weather implements Subject{
    private temperature: number
    private observers: Observer[] = []

    setTemperature(temp: number){
        console.log("New temperature value : ${temp}")
        this.temperature = temp
        this.notifyObservers()
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o)
    }
    public removeObserver(o: Observer): void {
        let index = this.observers.indexOf(o)
        this.observers.splice(index, 1)
    }
    public notifyObservers(): void {
        for (let observer of this.observers){
            observer.update(this.temperature)
        }
    }
    
}

class Temperature{

}