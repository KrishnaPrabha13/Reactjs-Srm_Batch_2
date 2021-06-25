let student = new Map();

let std1 = {a:1};
let std2 = {b:1};
let std3 = {c:1};

student.set(std1, "Ram");
student.set(std2, "Priya");
student.set(std3, "Ravi");

console.log(student.get(std1));
console.log(student.delete(std2));
console.log(student.get(std2));

