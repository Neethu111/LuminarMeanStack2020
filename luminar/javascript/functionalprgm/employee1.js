class employee {
    constructor(eid, name, desig, join, resign) {
        this.eid = eid;
        this.name = name;
        this.desig = desig;
        this.join = join;
        this.resign = resign;

    }
    getemp = () => {
        console.log("this.eid")
        console.log("this.name")
        console.log("this.desig")
        console.log("this.join")
        console.log("this.resign")
    }
}
var ob1 = new employee(100, "ajay", "devop", 1981, 2003)
var ob2 = new employee(101, "vijay", "devop", 1992, 2008)
var ob3 = new employee(102, "bijoy", "ba", 1999, 2007)
var ob4 = new employee(103, "jhon", "ba", 1989, 2010)
var ob5 = new employee(104, "danie", "qa", 2009, 2014)

var ob6 = new employee(105, "lari", "qa", 1987, 2010)
var emp = [];
emp.push(ob1)
emp.push(ob2)
emp.push(ob3)
emp.push(ob4)
emp.push(ob5)
emp.push(ob6)
console.log(emp)

console.log("All employee name and designation")
console.log(".....................................")
var namedesig=emp.map(obj1=>obj1.name+"  :  "+obj1.desig)
console.log(namedesig)

console.log("Employee details whose desig equals devops")
console.log("............................................")
var desig=emp.filter(obj=>obj.desig=="devop")
console.log(desig)

console.log("Employees working in 80s")
console.log("...............................")
var work=emp.filter(obj=>obj.join>1980 &  obj.join<1990)
console.log(work)


console.log("Experience > 9 years ")
console.log("........................")
var experience=emp.map(obj=>obj.resign-obj.join).filter(obj=>obj>9)
console.log(experience)

console.log("Employees based on joining years")
console.log("...................................")
var sort=emp.map(obj=>obj.join).sort((obj1,obj2)=>obj1-obj2)
console.log(sort)



