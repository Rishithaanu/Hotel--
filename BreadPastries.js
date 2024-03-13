var num =0;

function inc(){
    num++;
    if(num>=50)
    {
        num=50;
        document.getElementById("inpt").value=num;
    }
    else{
        document.getElementById("inpt").value=num;
    }
}
function dec(){
    num--;
    if(num<=0)
    {
        num=0;
        document.getElementById("inpt").value=num; 
    }
    else{
        document.getElementById("inpt").value=num;
    }
}
var price = 50;
function total(){
    var totalPrice = price*num;
    document.getElementById("total").innerHTML=`Total Order Price :`+totalPrice+`$/-`;
}
function submit(){
    document.getElementById("submit").innerHTML=`Your Order Confirmed!`
}