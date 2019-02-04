function RectangleES5(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

//ES6 syntax
class RectangleES6 {
    constructor(a, b) {
        this.length = a;
        this.width = b;
        this.perimeter = 2 * (a + b);
        this.area = a * b;
    };
}