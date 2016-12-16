var code = "src";
var userinput = "";
var position = code[userinput]
var  CodePosition = 0;

function success() {
  var redirect = confirm("Would you like to see the source code of this website?");
  CodePosition = 0;
   if (redirect == true) {
       window.location.href = 'https://github.com/joshuacassidy/Web-Design-Project-2016';
   }
}

document.addEventListener('keydown', function(e) {
  var key = e.key;

  // var userinput = code[CodePosition];

key ==  code[CodePosition] ?  (function() {

CodePosition++
console.log(CodePosition);
CodePosition === code.length ?  success() : null

}())  : CodePosition = 0;








//   var x = 1;
// (function(x) {
//   console.log(x);
// }(x))
//
// var y = false;
// !function(y) {
//   console.log(y);
// }(true)
//
//
// if(alert()){
//  userinput = "";
//   CodePosition = 0;
// }


//   if (key == userinput) {
//
//      CodePosition++;
//
//     if ( CodePosition == code.length)
//       alert();
//       // if(alert()){
//       //    CodePosition = 0;
//       //
//       // }
//   } else{
//      CodePosition = 0;
// }
});
