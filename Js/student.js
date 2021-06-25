var std = [{id:1, name: "Priya", address: "Mogappair",city: "Chennai",marks: 80},
{id:2, name: "Diya", address: "Anna Nagar",city: "Chennai",marks: 60},
{id:3, name: "Lavanya", address: "Avadi",city: "Chennai",marks: 70},
{id:4, name: "Abi", address: "Avadi",city: "Chennai",marks: 70}
];

std.sort((a,b) => {
    let x = a.name.toLowerCase(),
        y = b.name.toLowerCase();
    
    if( x<y){
        return -1;
    }

    if(x >y){
        return 1;
    }

    return 0;
});
console.log(std.sort());
