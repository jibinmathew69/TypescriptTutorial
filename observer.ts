interface Subject{
    registerObserver(o: Observer): void
    removeObserver(o: Observer): void
    notifyObserver()
}

interface Observer{

}

class Weather{
    private temperature: number

    setTemperature(temp: number){
        console.log("New temperature value : ${temp}")
        this.temperature = temp
    }
}

class Temperature{

}