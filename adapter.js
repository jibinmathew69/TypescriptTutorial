var iphone = /** @class */ (function () {
    function iphone() {
    }
    iphone.prototype.useLighting = function () {
        console.log("lighting charger");
    };
    return iphone;
}());
var pixel = /** @class */ (function () {
    function pixel() {
    }
    pixel.prototype.useUSB = function () {
        console.log("USB charger");
    };
    return pixel;
}());
var LightToMicroAdapter = /** @class */ (function () {
    function LightToMicroAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightToMicroAdapter.prototype.useUSB = function () {
        console.log("using microUSB");
        this.iphoneDevice.useLighting();
    };
    return LightToMicroAdapter;
}());
var iphoneDevice = new iphone();
var adapter = new LightToMicroAdapter(iphoneDevice);
adapter.useUSB();
