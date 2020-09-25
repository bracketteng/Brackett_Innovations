function PrintName(){
    var n = document.getElementById('name').value;
    document.getElementById('p1').innerHTML='I am sorry ' + n + ' we are currently non-funtional, please visit us later!';
}
function PrintContent(){
    var p = document.getElementById('phone').value;
    var e = document.getElementById('email').value;
    document.getElementById('p2').innerHTML='We will try to contact you later by ' + p + ', ' + e;
}