var limit=50;
var i=1;
oddsum=0;
evensum=0;
while(i<=limit)
{
    if(i%2==0)
    {
        evensum+=i;
    }
    else{
        oddsum+=i;
    }
    i++;
}
console.log(+oddsum);
