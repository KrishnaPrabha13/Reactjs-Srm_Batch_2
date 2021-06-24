let student = new Map();

let std1 = {a:1};
let std2 = {b:1};
let std3 = {c:1};

student.set(std1, "Ram");
student.set(std2, "Priya");
student.set(std3, "Ravi");

student.forEach((val,key) => {
    console.log(val+ ","+key);
});
console.log(student.has(std3));