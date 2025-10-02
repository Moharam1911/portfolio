
function add(){
    if(!isNaN(x) && !isNaN(y))
     {return x+y ; }
    else {
        alert('Enter Numbers not Strings');
    }
}

function sub(){
    if(!isNaN(x) && !isNaN(y))
        {return x-y ; }
       else {
           alert('Enter Numbers not Strings');
       }
   }  


function mul(){
    if(!isNaN(x) && !isNaN(y))
        {return x*y ; }
       else {
           alert('Enter Numbers not Strings');
       }
   }

function div(){
    
    if(!isNaN(x) && !isNaN(y))
        {    

            if(y!=0) {  
    
                 return x/y; 
            }
                else { 
                alert("ERROR! The Second Number Is Not Valid") ;
                return null ; 
            }
        }
    else {
                 alert('Enter Numbers not Strings');
        }
   
    
    

    }
  



function calc() {
let x = parseFloat(document.getElementById("in1").value)  ;
let y = parseFloat(document.getElementById("in2").value) ; 
let o = document.getElementById("op").value ; 
let Res = document.getElementById("res");
    if (o=="+"){
          Res.innerHTML = add();

    }
  else if (o=="-") {
        Res.innerHTML = sub();
  }
  else if (o=="*"|| o=="x"|| o=="X") {
    Res.innerHTML = mul();
  }
  else if (o=="/") {
    Res.innerHTML = div();
  }
} 