function multipyBy (arr){
    let add = [arr[0]*2]
for (let i = 0; i < arr.length; i++){
   add.push(arr[i]*2)
}
return add;
}
console.log(multipyBy([2,3,7,9,5]));