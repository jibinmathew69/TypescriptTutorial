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

class LightToMicroAdapter implements androidint{
    iphoneDevice: iphone

    constructor(iphone: iphone) {
        this.iphoneDevice = iphone
    }

    useUSB(): void {
        console.log("using microUSB")
        this.iphoneDevice.useLighting()
    }
}

let iphoneDevice = new iphone()
let adapter = new LightToMicroAdapter(iphoneDevice)

adapter.useUSB()