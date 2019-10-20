var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var AutoPilot = /** @class */ (function (_super) {
    __extends(AutoPilot, _super);
    function AutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    AutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Autopilot";
    };
    AutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return AutoPilot;
}(CarOptions));
var RearSeat = /** @class */ (function (_super) {
    __extends(RearSeat, _super);
    function RearSeat(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearSeat.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Rear seat";
    };
    RearSeat.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearSeat;
}(CarOptions));
var myTesla = new ModelS();
myTesla = new RearSeat(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
