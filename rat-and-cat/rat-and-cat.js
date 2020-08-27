function Rat(name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;
    this.makeNoise = function (msg) {
        document.write(msg);
    };
}

function Cat(name,weight,maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.makeNoise = function (msg) {
        document.write(msg);
    };
    this.catchRat = function (rat) {
        if(this.maxSpeed > rat.speed){
            document.write("I got you meo meo!");
            this.eatRat(rat);
        }
    };
    this.eatRat = function (rat) {
        if(rat.status){
            document.write("I ate this rat!");
            this.weight = this.weight + rat.weight;
            rat.status = false;
        }
    };
}