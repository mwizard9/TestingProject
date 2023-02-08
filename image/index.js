let arr = [22,33,44];
let a = arr.map((value,index,array)=>{
console.log(value,index,array)
return value+index;
})
console.log(a)