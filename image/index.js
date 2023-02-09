let arr = [22,33,44];
let a = arr.map((value,index,array)=>{
    //this can print value,index and array
console.log(value,index,array)
return value+index;
})
console.log(a)


let b = arr.map((value)=>{
    //it only print the value of the array
  console.log(value)  
  return value
})
console.log(b)

let c= arr.map((aa,index)=>{
    console.log(index)
    return index
})
console.log(c)