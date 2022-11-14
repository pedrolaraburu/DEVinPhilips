function paramInf(){
    let res = 0;
    for(i=0; i< arguments.length; i++){
        res += arguments[i];
    }
    return res;
}


console.log(paramInf(2, 3));         // 5
console.log(paramInf(-10, 1));       // -9
console.log(paramInf(1, 1, 1, 1));   // 4
console.log(paramInf());             // 0
 
