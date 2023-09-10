var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operand3=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute("data-value");
        if(value=="+"){
operator=
        }
        else if(value=="="){

        }
        else{
            display.innerText +=value;
        }
    })
}