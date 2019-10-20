var Weather = /** @class */ (function () {
    function Weather() {
        this.observers = [];
    }
    Weather.prototype.setTemperature = function (temp) {
        console.log("New temperature value : " + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    Weather.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Weather.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    Weather.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return Weather;
}());
var Temperature = /** @class */ (function () {
    function Temperature(weather) {
        this.subject = weather;
        weather.registerObserver(this);
    }
    Temperature.prototype.update = function (temperature) {
        console.log("Temperature: " + temperature);
    };
    return Temperature;
}());
var Fan = /** @class */ (function () {
    function Fan(weather) {
        this.subject = weather;
        weather.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Turning on");
        }
        else {
            console.log("Turning off");
        }
    };
    return Fan;
}());
var weatherStation = new Weather();
var temp = new Temperature(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
