var curnum=0, numb2=0;
var op=false, opcode="";

const zero = document.getElementById("0");
zero.addEventListener('click', function () {
    curnum*=10;
    curnum+=0;
    text.innerText=curnum;
})

const one = document.getElementById("1");
one.addEventListener('click', function () {
    curnum*=10;
    curnum+=1;
    text.innerText=curnum;
})

const two = document.getElementById("2");
two.addEventListener('click', function () {
    curnum*=10;
    curnum+=2;
    text.innerText=curnum;
})

const three = document.getElementById("3");
three.addEventListener('click', function () {
    curnum*=10;
    curnum+=3;
    text.innerText=curnum;
})

const four = document.getElementById("4");
four.addEventListener('click', function () {
    curnum*=10;
    curnum+=4;
    text.innerText=curnum;
})

const five = document.getElementById("5");
five.addEventListener('click', function () {
    curnum*=10;
    curnum+=5;
    text.innerText=curnum;
})

const six = document.getElementById("6");
six.addEventListener('click', function () {
    curnum*=10;
    curnum+=6;
    text.innerText=curnum;
})

const seven = document.getElementById("7");
seven.addEventListener('click', function () {
    curnum*=10;
    curnum+=7;
    text.innerText=curnum;
})

const eight = document.getElementById("8");
eight.addEventListener('click', function () {
    curnum*=10;
    curnum+=8;
    text.innerText=curnum;
})

const nine = document.getElementById("9");
nine.addEventListener('click', function () {
    curnum*=10;
    curnum+=9;
    text.innerText=curnum;
})

const plus = document.getElementById("plus");
plus.addEventListener('click', function () {
    numb2=curnum;
    curnum=0;
    text.innerText=curnum;
    op=true;
    opcode="plus";
})

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    numb2=curnum;
    curnum=0;
    text.innerText=curnum;
    op=true;
    opcode="minus";
})

const multi = document.getElementById("multi");
multi.addEventListener('click', function () {
    numb2=curnum;
    curnum=0;
    text.innerText=curnum;
    op=true;
    opcode="multi";
})

const div = document.getElementById("div");
div.addEventListener('click', function () {
    numb2=curnum;
    curnum=0;
    text.innerText=curnum;
    op=true;
    opcode="div";
})

const equal = document.getElementById("=");
equal.addEventListener('click', function () {
    if(op == true){
        if(opcode == "plus"){
            curnum=numb2+curnum;
            text.innerText=curnum;
        }
        else if(opcode == "minus"){
            curnum=numb2-curnum;
            text.innerText=curnum;
        }
        else if(opcode == "multi"){
            curnum=numb2*curnum;
            text.innerText=curnum;
        }
        else if(opcode == "div"){
            if(curnum == 0 && numb2==0){
                text.innerText="NAN";
            }
            else if(numb2 == 0){
                text.innerText="Infinity";
            }
            curnum=numb2/curnum;
            text.innerText=curnum;
        }
    }
    else{
        text.innerText=curnum;
    }
})

const C = document.getElementById("C");
C.addEventListener('click', function () {
    curnum=0
    text.innerText=curnum;
})

const display=document.getElementById("text");