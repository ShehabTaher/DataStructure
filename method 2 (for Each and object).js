
let arr1= [12, 13, 6, 10];
let arr2= [13, 10, 16, 15];

let joined = arr1.concat(arr2);

const count = {} ;
joined.forEach(element => {
    count[element] = (count[element] || 0) + 1;
});
console.log(count);
let key;
let sum = 0 ;

for(key in (count)){
  let value = count[key];
    if(value === 1){

      sum += parseInt(key);
    }
    
}
console.log(sum);