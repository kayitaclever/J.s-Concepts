let num=[10,30,3,8,7,16,45];
let i=0;
let sum=0;
let product=1;
while(i<num.length){
    console.log(num[i]);
    sum+=num[i]
    product*=num[i]
   
    i++
}
console.log({sum});
console.log({product})