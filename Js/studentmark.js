let std = [{id:1, name: "Priya", address: "Mogappair",city: "Chennai",marks: 80},
           {id:2, name: "Diya", address: "Anna Nagar",city: "Chennai",marks: 60},
           {id:3, name: "Lavanya", address: "Avadi",city: "Banglore",marks: 70},
           {id:4, name: "Abi", address: "Avadi",city: "Pune",marks: 70}];


let amark = std.map(amark =>{
    let m = amark.marks + 20;
    console.log(`Id: ${amark.id}, Name: ${amark.name},  Address: ${amark.address}, City: ${amark.city},  Marks: ${m}`);
});



