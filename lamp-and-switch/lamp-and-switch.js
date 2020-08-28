function ElectricLamp() {
    this.status = false;
    this.turnOff = function () {
        console.log("Off");
    }
    this.turnOn = function () {
        console.log("On");
    }
}

function SwitchButton() {
    this.status = false;
    this.lamp = ElectricLamp;
    this.connectToLamp = function (lamp) {
        lamp.status = true;
        this.status = true;
    }
    this.switchOff=function () {
        if (this.status&&lamp.status)
        lamp.turnOff();
    }
    this.switchOn = function () {
        if (this.status&&lamp.status)
        lamp.turnOn();
    }
}