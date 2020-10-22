var employee={eid:1001,ename:"nee",desig:"devops"}
console.log(employee);
console.log(employee.ename);
console.log("salary"  in employee);
employee["salary"]=2500;
console.log(employee);
employee["salary"]+=5000;
console.log(employee);