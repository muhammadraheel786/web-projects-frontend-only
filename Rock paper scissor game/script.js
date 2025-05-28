let yourchoice=0;
let compchoise=0;

const choices=document.querySelectorAll(".class");
const mess=document.querySelector("#message");
const you=document.querySelector("#yourmove");
const comp=document.querySelector("#compmove");

//Generate computer's choice
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    choiceindx=Math.floor(Math.random()*3);
    return options[choiceindx];
};

const drawGame = () => {
    mess.innerText="The game was a draw!";
    mess.style.backgroundColor = "yellow";
    mess.style.color = "black";
};

//show winner case
const showinner=(userwin)=>{
    if(userwin)
    {
        mess.innerText="You win the game";
        mess.style.backgroundColor = "Green";
        mess.style.color = "white";
        yourchoice++;
        you.innerText=yourchoice;
    }
    else{
        
        mess.innerText="Computer win";
        mess.style.backgroundColor = "red";
        compchoise++
        comp.innerText=compchoise;
    }
};


//computer's choice pass to the function for display
const playGame = (userChoice)=>{
console.log("User choice is ",userChoice);
const finalcomputerchoice=gencompchoice();
console.log("Computer's choice is ",finalcomputerchoice);


if (userChoice === finalcomputerchoice) {
    drawGame();
} 
else{
    userwin=true;
    if(userChoice==="rock")
    {
        userwin=finalcomputerchoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userwin=finalcomputerchoice==="scissor"?false:true;
    }
    else
    {
        userwin=finalcomputerchoice==="rock"?false:true;
    }

    showinner(userwin);
}
};

//user choice using click event listener
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
}); 


