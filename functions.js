// one way to make function
function onePlusAvg ( x , y) {
    console.log("Done")
    return 1+ ( x+y)/2
    
}

//another way to make function
const hello = ()=> {
    console.log("Hey hello , how are you man")
}

// actual code
a = 1;
b = 2;
c = 3;

console.log("One plus average of a and b is ", onePlusAvg(a, b ))
console.log("One plus average of a and b is ", onePlusAvg(b, c ))
console.log("One plus average of a and b is ", onePlusAvg(a, c ))
hello();