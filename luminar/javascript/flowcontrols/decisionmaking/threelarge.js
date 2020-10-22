var num1 = 40;
var num2 = 50;
var num3 = 30;

if ((num1 > num2) & (num1 > num3)) {
    if (num2 > num3) {
        console.log("num2 is second largest");
    }
    else {
        console.log("num3 is second largwest")
    }

}
else if ((num2 > num1) & (num2 > num3)) {
    if (num1 > num3) {
        console.log("num1 is second largest");
    }
    else {
        console.log("num3 is second largwest")
    }}
else if ((num3 > num1) & (num3 > num2)) {
        if (num2 > num1) {
            console.log("num2 is second largest");
        }
        else {
            console.log("num1 is second largwest")
        }
    }
    else if ((num1 == num2) & (num3 == num2)) {
        console.log("Equal");
    }


