// var change = document.getElementById('amount');
// console.log(Add);
function change(){
    var totalAmount = Number(document.getElementById('totalAmount').value);
    var amount = Number(document.getElementById('amount').value);
    document.getElementById('amount').value=0;
    totalAmount = amount+totalAmount;
    console.log(amount);
    document.getElementById('totalAmount').value=totalAmount;
    document.getElementById("output").innerHTML+="<div id='temp'>"+totalAmount+"</div>"
    // var heading = document.getElementById('heading');
    // heading.innerHTML='helloooo';


}