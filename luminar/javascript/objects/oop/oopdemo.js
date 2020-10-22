class person
{
    setperson(age,name)
    {
        
        this.sge=age;
        this.name=name;

    }
    getperson()
    {
        console.log("age="+this.age);
        console.log("name="+this.name);
        
    }

}
var obj=new person();
obj.setperson(25,"neethu");
obj.getperson()