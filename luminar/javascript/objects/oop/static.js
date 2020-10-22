class student
{
    static get collegeName()
    {
        var clgname="Luminar";
        return clgname;
    }
    static printCollegename()
    {
        var clgname="Luminar";
        console.log(clgname);
    }
    setstudent(rol,name)
    {
        this.rol=rol;
        this.name=name;
    }
    getstudent()
    {
        console.log("name"+this.name);
        console.log("rol"+this.rol);
        student.printCollegename();
    }
}
class myclass extends student{

}
var obj=new myclass();
obj.setstudent(25,"neethu")
obj.getstudent()
console.log(myclass.collegeName);