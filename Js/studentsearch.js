var std = [ {id:1, name: "Priya", address: "Mogappair",city: "Chennai",marks: 20,pincode:600023},
            {id:2, name: "Diya", address: "Anna Nagar",city: "Chennai",marks: 60,pincode:600050},
            {id:3, name: "Lavanya", address: "Paris",city: "Chennai",marks: 30,pincode:600040},
            {id:4, name: "Abi", address: "Avadi",city: "Chennai",marks: 40,pincode:600023}
];

let std1 = std.map(fun);
//iteration
function fun(value,index,array)
{
    return value;
}
console.log("Iteration");
console.log(std1);

//search
var search = std.find(obj =>{
    return obj.address =="Avadi";
})
console.log("Search");
console.log(search);

delete std[0];
console.log("Delete");
console.log(std[0]);



