var n1, n2;
let val;
function put1(val){
    document.getElementById("put").value+=val;
    console.log(document.getElementById("put").value);
}
function clr(){
    document.getElementById("put").value='';
}
function solve(){
    let x = document.getElementById("put").value
    let y = eval(x)
    document.getElementById("put").value = y
}

function history(){
    
}