// Ask the user for a number and print wheather each number from 1 to that number is even or odd.
let val = prompt("enter Any Number");
for(let i=1; i<=val;i++){
    if(i%2==0){
        console.log(`${i}This  Number is even`);
    }
   else {
    console.log(`${i}this number is odd`);

}   
}