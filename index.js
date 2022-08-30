const calculator = {
    rightHand: +prompt('enter rightHand'),
    operator : prompt("operator"),
    leftHand: +prompt('enter leftHand'),
    result: 0,
    mashin: function () {
        switch (this.operator) {
            case '*':
            this.result = this.rightHand * this.leftHand;
            break;
            case '+':
            this.result = this.rightHand + this.leftHand;
            break;
            case '/':
            this.result = this.rightHand / this.leftHand;
            break;
            case '-':
            this.result = this.rightHand - this.leftHand;
            break;
            default:
            this.result= 000;
            break;
        };
    },
    show: function () {console.log(this.result)},   
};
calculator.mashin();
calculator.show();