var number=123;
var sum=0;
while(number>0)
{
   var digit=number%10; 
   
   sum+=digit*digit*digit;
   number=Math.floor(number/10);

}
if (sum == number) {
    console.log(`num is an Armstrong number`);
}
else {
    console.log(`num is not an Armstrong number.`);
}