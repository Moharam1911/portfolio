
function add(x,y){
    if(!isNaN(x) && !isNaN(y))
     {return x+y ; }
    else {
        alert('Enter Numbers not Strings');
    }
}

function sub(x,y){
    if(!isNaN(x) && !isNaN(y))
        {return x-y ; }
       else {
           alert('Enter Numbers not Strings');
       }
   }  


function mul(x,y){
    if(!isNaN(x) && !isNaN(y))
        {return x*y ; }
       else {
           alert('Enter Numbers not Strings');
       }
   }

function div(x,y){
    
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
          Res.innerHTML = add(x,y);

    }
  else if (o=="-") {
        Res.innerHTML = sub(x,y);
  }
  else if (o=="*"|| o=="x"|| o=="X") {
    Res.innerHTML = mul(x,y);
  }
  else if (o=="/") {
    Res.innerHTML = div(x,y);
  }
} 