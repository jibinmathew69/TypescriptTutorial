interface Subject{
    registerObserver(o: Observer): void
    removeObserver(o: Observer): void
    notifyObserver(): void
}

interface Observer{
    update(temperature: number): void
}

class Weather implements Subject{
    private temperature: number

    setTemperature(temp: number){
        console.log("New temperature value : ${temp}")
        this.temperature = temp
    }
    
    registerObserver(o: Observer): void {
        throw new Error("Method not implemented.");
    }
    removeObserver(o: Observer): void {
        throw new Error("Method not implemented.");
    }
    notifyObserver(): void {
        throw new Error("Method not implemented.");
    }
    
}

class Temperature{

}