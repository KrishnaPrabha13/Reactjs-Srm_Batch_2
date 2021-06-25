function isNumeric(str){
    if(typeof str!= "string")
    return false;

    return !isNaN(str) && !isNaN(parseFloat(str))
}
var ans = isNumeric("50");
if(ans ==true)
{
    console.log("It is Numeric");
}
else{
    console.log("It is not Numeric");
}
        