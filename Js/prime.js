var a = [2,3,5,6,7,8,9,11];
a = a.filter((num) => {
    for(var i=2; i<= Math.sqrt(num);i++){
        if(num %i ==0)
        return false;
    }
    return true;
});
console.log(a);