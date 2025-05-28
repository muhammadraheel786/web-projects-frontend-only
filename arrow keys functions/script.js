const count=document.getElementById("count");
const increment=document.getElementById("increment");
const decrement=document.getElementById("decrement");

let counter=0;
function incre(){
    counter++;
    count.innerText=`${counter}`;
    decrement.style.backgroundColor="green";
};
function decre(){
    counter--;
    count.innerText=`${counter}`;
    increment.style.backgroundColor="red";
};

increment.addEventListener("click", incre);
decrement.addEventListener("click", decre);

document.addEventListener("keydown", function(event){
    if(event.key==="ArrowUp"){
        incre();
    }
    else if(event.key==="ArrowDown"){
        decre();
    }
});