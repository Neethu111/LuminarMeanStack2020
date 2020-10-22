var data = "hello hai hello hai hello";
var words = data.split("");
var obj = {}
for (word of words) {
    if (word in obj) {
        obj[word] += 1;
    }

    else {
        obj[word] = 1;
    }
}
console.log(obj)