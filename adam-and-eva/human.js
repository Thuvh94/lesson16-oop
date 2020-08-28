function Human(name,gender,weight) {
    this.name = name;
    this.gender = true;
    this.weight = weight;
    this.talk = function (msg) {
        document.write(this.name + " talks " + msg);
    }
    this.eatApple = function (apple) {
        if(this.getAppleWeight(apple) > 0) {
            this.weight++;
            apple.decrease();
            console.log(this.weight);
        }
    }
    this.getAppleWeight = function (apple) {
        return apple.weight;
    }
}
