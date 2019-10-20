class Weather{
    private temperature: number

    setTemperature(temp: number){
        console.log("New temperature value : ${temp}")
        this.temperature = temp
    }
}
