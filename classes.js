function Polygon(arg) {
    this.arg = arg;
    this.perimeter = function () {
        let perimeter = 0;
        for (let i = 0; i < this.arg.length; i++) {
            perimeter += this.arg[i];
        }
        return perimeter;
    }
}