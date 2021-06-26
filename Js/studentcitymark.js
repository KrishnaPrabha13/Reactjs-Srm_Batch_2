var std = [ {id:1, name: "Priya", address: "Mogappair",city: "Chennai",marks: 20,pincode:600023},
            {id:2, name: "Diya", address: "Anna Nagar",city: "Chennai",marks: 60,pincode:600050},
            {id:3, name: "Lavanya", address: "Avadi",city: "Chennai",marks: 30,pincode:600040},
            {id:4, name: "Abi", address: "Avadi",city: "Chennai",marks: 40,pincode:600023}
];


let amark= std.map(amark =>{
    let m = amark.marks+20;
    if(amark.pincode ==600023)
    {
       m=m + 15;
    }
    console.log(`Id: ${amark.id}, Name: ${amark.name},  Address: ${amark.address}, City: ${amark.city},  Marks: ${m}, Pincode: ${amark.pincode}`);
});