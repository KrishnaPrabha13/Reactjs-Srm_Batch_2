var std = [{id:1, name: "Priya", address: "Mogappair",city: "Chennai",marks: 80},
{id:2, name: "Diya", address: "Anna Nagar",city: "Chennai",marks: 60},
{id:3, name: "Lavanya", address: "Avadi",city: "Banglore",marks: 70},
{id:4, name: "Abi", address: "Avadi",city: "Pune",marks: 70}];


std.sort(function(a,b) {
    let x = a.name.toUpperCase(),
        y = b.name.toUpperCase();
    
    if( x<y){
        return -1;
    }

    if(x >y){
        return 1;
    }
});
std.sort(function(a,b)  {
    let x = a.city.toUpperCase(),
        y = b.city.toUpperCase();
    
    if( x<y){
        return -1;
    }

    if(x >y){
        return 1;
    }
});

console.log(std);