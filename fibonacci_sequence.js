var message = "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown";

function FibonacciSecret(message){
  var s = '';
   for(var i = 0; i < 10; i++) {
       s += message.replace(/\s+/g,'').substr(getNthValue(i), 1).toUpperCase();
       if(i != 9) {
           s += "-";
       }
   }

   function getNthValue(n) {
       if(n <= 1) {
           return n;
       }
       if(n > 1) {
           return getNthValue(n-1) + getNthValue(n-2);
       }
   }
   return s;
}

console.log(FibonacciSecret(message)); // "T-H-H-E-D-V-C-E-M-T"
