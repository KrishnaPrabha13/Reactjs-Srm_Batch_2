let names = ["Ravi", "Ram", "Raja", "Rajesh"];
console.log(names.length);


const newarray = names.map((ele,idx) => {
    if(idx %2 !=0){
        return `Dr.${names[idx]}-San`;
   }
});
console.log(newarray);