const input=document.getElementById("user1");
const button=document.getElementById("button");
const result=document.getElementById("result");
const body=document.querySelector("body");

let val;
function backchanger(){
val=input.value.trim();
if (val) {
    document.body.style.backgroundColor = val;
    result.innerText = `Background is ${val}`;
} else {
    result.innerText = "Please enter a valid color!";
}

};

button.addEventListener("click",backchanger);