interface iphoneint{
    useLighting(): void
}

interface androidint{
    useUSB(): void
}

class iphone implements iphoneint{
    public useLighting(){
        console.log("lighting charger")
    }
}

class pixel implements androidint{
    public useUSB(){
        console.log("USB charger")
    }
}