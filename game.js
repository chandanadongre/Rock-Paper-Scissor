let user=0;
let com=0;

const choose=document.querySelectorAll(".choose");
const message=document.querySelector("#message");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const generateCompChoice=()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const drawGame=()=>{
    // console.log("game was draw");
    message.innerText="Draw! Play again";
    message.style.backgroundColor="grey";
}

const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScore.innerText=user;
        // console.log("you win");
        message.innerText=`You win:) ${userChoice} beats ${compChoice}`  ;
        message.style.backgroundColor="green";
    }
    else{
        com++;
        compScore.innerText=com;
        // console.log("you lose");
        message.innerText=`You lose:( ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //generate computer choice->modular mode
    const compChoice=generateCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp can be scissors or paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choose.forEach((choice)=>{ //choose is the container which contains diff id for diff img
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
