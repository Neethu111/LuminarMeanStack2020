class employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
    getemployee()
    {
        console.log("name="+this.ename)
        console.log("eid="+this.eid)


    }
}
var emp=new employee(1001,"ajay")
emp.getemployee();