const userbill=document.getElementById("itemPrice");
const add=document.getElementById("addButton");
const reset=document.getElementById("resetButton");
const result=document.getElementById("totalAmount");
const warning=document.getElementById("warningMessage");


let bill=0,final=0;

function additems(){
    bill=Number(userbill.value);

    if(isNaN(bill)||bill<=0)
    {
        alert("Please Enter a valid Number");
        userbill.value="";
        return;
    }
final+=bill;

result.innerText=`${final}`;

if(final>100)
{
    warning.style.display="block";
}

userbill.value="";

};

add.addEventListener("click", additems);

reset.addEventListener("click", function(){
    result.innerText="0";
    warning.style.display="none";

}
);