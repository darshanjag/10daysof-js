function getCountES5(objects) {
    let newArray=[];
    for (let item in objects) {
        if (objects[item].x === objects[item].y) {
            newArray.push(item);
        }
    }
    return newArray.length;
};