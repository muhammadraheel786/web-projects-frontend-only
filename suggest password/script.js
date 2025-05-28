const show=document.querySelector(".toggle-icon");
const input=document.querySelector("#password");
const suggest=document.querySelector("#class");

const togglePassword=()=>{
    if(input.type==="text")
    {
        input.type="password";
    }
    else{
        input.type="text";
    }
}

show.addEventListener("click", togglePassword);

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr2 =[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let arr3=  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr4=[ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'];


const random = () => {

    let val = Math.floor(Math.random() * arr.length); 
    let final = arr[val]; 

    let val1 = Math.floor(Math.random() * arr2.length); 
    let final2 = arr2[val1]; 

    let val2 = Math.floor(Math.random() * arr3.length); 
    let val5 = Math.floor(Math.random() * arr3.length); 
    let val6 = Math.floor(Math.random() * arr3.length); 

    let final3 = arr3[val2]; 
    let final6 = arr3[val5];
    let final8 = arr3[val6];
    let final0=final3*final8;
    let final9=final3*final6;

    let val3 = Math.floor(Math.random() * arr4.length); 
    let final4 = arr4[val3]; 

    input.value = `${final6}${final}${final9}${final2}${final0}${final3}${final4}${final8}`; 
};

suggest.addEventListener("click", random);
