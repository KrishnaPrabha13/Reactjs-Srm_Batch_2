let names = ["Ravi", "Ram", "Raja", "Rajesh"];
console.log(names.length);


const newarray = names.map((ele,idx) => {
    if(idx %2 ==0){
        return `Er.${names[idx]}`;
    }
    else{
        return `Dr.${names[idx]}`;
    }
    return `Dr.${x}`;
});

console.log(newarray);
