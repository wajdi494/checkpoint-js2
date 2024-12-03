//reverse string
function reverseString(str) {
    
    var char = str.split("").reverse().join("")
  
  
    return char
  }
  //Count Characters
  function Occurrences(str, letter) {
    var countString=0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            countString++
        }
    }

    return countString
}
//Capitalize words
function capitalize(str){
    var array=str.split(" ")
    for(var i=0;i<array.length;i++){
       var c=array[i][0]
         array[i]= c.toUpperCase()+array[i].slice(1)
        
    }
    return array.join(" ")
}
//sum
function sum(array){
    var result=0
    for (var i=0;i<=array.length-1;i++){
       result =result+array[i]
    }
    return result
 }
 //max
 function max(array){
    var result=0
    
    
    for(var i=0; i<=array.length-1;i++){
    if(result<=array[i]){
    
    result=array[i]
    }
       }
       return result
    }
    //filter array
    function remove(array, element) {
        var result=0
        for(var i=0;i<=array.length;i++){
         if(array[i]===element){
            array.splice(i,1)
         }
        }
        return array
      }
      //factorial
      function factorial(n) {
        var i=1
        var fact=1
      while(i<=n){
    fact= fact*i 
      i++
     }
     return fact
     }
     //prime number
     function primeNumber(n){
        var count=0
        for(var i=1;i<=n;i++){
            if(n%i==0){
                count++
            }
        }
        return count==2
    }
    //fibonacchi
    function fib(n){
        var a=1
        var b=1
        var result=0
        var i=2
        if(n<2){
            result=1
        }
        while(i<=n){
            result=a+b
            a=b
            b=result
            i++
        }
        return result
     }