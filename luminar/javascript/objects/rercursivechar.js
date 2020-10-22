var pattern="ABABABAB";
var data=pattern.split("");

var obj={};
for(item in data)
{
  
obj["word"]=item
}
console.log(obj);