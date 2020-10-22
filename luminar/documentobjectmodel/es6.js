
var hone=document.querySelector("#first")
var data=hone.textContent;
alert(data)
var lst=document.querySelectorAll("li")

for(let item of lst)
{
    item.style.color="red";
}

var meth=document.querySelector("#first")
{
    meth.style.color="green"
}

//var list=document.querySelectorAll(".two")
//{
    //for(let ls of list)
    //{
        //ls.style.color="blue"
    //}
//}

var list=document.querySelectorAll(".two")
{
    list.forEach(obj=>obj.style.color="blue")
}

