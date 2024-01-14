//arrays
//javascript array copy operation create shallow copies
//shallow copy vs deep copy
const arr=[1,2,3,4]
//data type for arraysws is not fixed in js
console.log(arr)
//other way to declare arrays
const arr1=new Array("ritik","rai");
console.log(arr1)
//accessing elements in array
console.log(arr[0])
//array methods
arr.push(5);
//push adds elements at the end of the array
console.log(arr)
arr.pop();
//pop removes element from the end of the array
console.log(arr)
//to add element at the strat of the array we use unshift
arr.unshift(0);
console.log(arr)
//to remove element from the start of the array we use shift
arr.shift();
console.log(arr);
//to check whether array contains the element
let ans=arr.includes(7);
console.log(ans)
//to find indexOf element in the array
console.log(arr.indexOf(4));
//slice vs splice
//slice does'nt manipulate the array while splice manipulates it
console.log(arr)
console.log(arr.slice(1,3))
console.log(arr)
console.log(arr.splice(1,3));
console.log(arr);
//splice includes the entire range while slice does'nt include the last specified index

