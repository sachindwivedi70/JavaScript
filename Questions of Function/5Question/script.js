//Pass a ffunction into another function and execute it inside .
function abcd(val){
    val();
}
abcd(function(){
    console.log("hey");
});