//const { e } = require("mathjs");

//const { e } = require("mathjs");

class employee
{
    constructor(eid,ename,desig,sal)
    {
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=sal;

    }
    getemp=()=>
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);

    }

}
var obj=new employee(100,"ajay","dev",21000)
var obj1=new employee(1001,"anu","tester",25000)
var obj2=new employee(1002,"jay","dev",20000)
var emp=[];
emp.push(obj)
emp.push(obj1)
emp.push(obj2)
for(e of emp)
{
    if(e.salary>20000)
    {
        console.log(e.ename+e.salary)
    }
}
for(e of emp)
{
    if(e.desig=="tester")
    {
        console.log(e.ename+e.salary)
    }
}