class employee1
{
    constructor(eid,name,desig,join,resign)
    {
        this.eid=eid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign;

    }
    getemp=()=>{
        console.log("this.eid")
        console.log("this.name")
        console.log("this.desig")
        console.log("this.join")
        console.log("this.resign")
    }
    var ob1=new employee1(100,"ajay","devop",1981,2003)
    var ob2=new employee1(101,"vijay","devop",1992,2008)
    var ob3=new employee1(102,"bijoy","ba",1999,2007)
    var ob4=new employee1(103,"jhon","ba",1989,2010)
    var ob5=new employee1(104,"danie","qa",2009,2014)

    var ob6=new employee(105,"lari","qa",1987,2010)
    var emp=[];
    emp.push(ob1)
    emp.push(ob2)
    emp.push(ob3)
    emp.push(ob4)
    emp.push(ob5)
    emp.push(ob6)

    console.log(emp)