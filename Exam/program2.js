class tweets
{
    constructor(pname,tweet)
    {
        this.pname=pname;
        this.tweet=tweet;
    }
    gettweets=()=>
    {
      console.log(this.pname)
      console.log(this.tweet)
    }
}

var obj1= new tweets("sachin",1)
var obj2=new tweets("sehwag",1)
var obj3=new tweets("kholi",1)
var obj4=new tweets("sachin",2)
var obj5=new tweets("kholi",1)

var tweet=[]
tweet.push(obj1)
tweet.push(obj2)
tweet.push(obj3)
tweet.push(obj4)
tweet.push(obj5)

console.log(tweet)
console.log("user with maximum number of tweets")
console.log("........................................")
var max=tweet.map(obj=>obj.tweet).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(max)


//var filter=tweet.map(obj=>obj.pname).filter((obj1,obj2)=>obj1.pname==obj2.pname)
//console.log(filter)

console.log("username and total number of tweets in sorting order")
console.log("........................................")
var sort=tweet.map(obj=>obj.tweet).sort((obj1,obj2)=>obj1-obj2)
//for(username of sort)
//{
    //console.log(this.pname)
//}
console.log(sort)





