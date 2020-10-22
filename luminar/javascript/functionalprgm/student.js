class student
{
    constructor(rol,name,total,course)
    {
        this.rol=rol;
        this.name=name;
        this.total=total;
        this.course=course;

    }
    getstudent=()=>{
        console.log(this.rol)
        console.log(this.name)
        console.log(this.total)
        console.log(this.course)
    }
}
var obj=new student(10,"anu","220","BCA")
var obj1=new student(10,"anil","200","MCA")
var obj2=new student(10,"ammu","300","BCA")
var obj3=new student(10,"binu","200","BBA")
var std=[];
std.push(obj)
std.push(obj1)
std.push(obj2)
std.push(obj3)

var bcastud=std.filter(obj=>obj.course=="BCA")
console.log(bcastud)

console.log("...........")
var stud=std.filter(obj=>obj.total>250)
console.log(stud)


console.log("................")
//var tot=std.filter(obj=>obj.course=="BCA").map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
var tot=bcastud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log(tot)

console.log("................")
var maxtotal=std.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(maxtotal)

console.log(std)


/*for(item of std)
{
    if(item.total>200)
    {
        console.log(item.name+" "+item.rol)
    }
}
/*for (item of std)
{
    if(item.course=="BCA")
    {
        console.log(item.name)
    }
}*/


/*for(item of std)
{
    if(item.corse=="BCA")
    {   
        var tot=[];
        tot.push(item.total)
        var sum=tot.reduce((num1,num2)=>num1+num2)
        console.log(sum)
    }
}*/
