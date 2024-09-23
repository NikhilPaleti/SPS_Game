document.getElementById("ruleList").style.display="none"
document.getElementById("resultSheet").style.display="none"
document.getElementById("winSheet").style.display="none"

//This is to load the initial score on the front-page
if (localStorage.getItem('SPS_User_Score') !== null && localStorage.getItem('SPS_Opp_Score') !== null) {
    document.getElementById("mainYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
    document.getElementById("mainOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
}
else {
    localStorage.setItem('SPS_User_Score', 0);
    localStorage.setItem('SPS_Opp_Score', 0);
    document.getElementById("mainYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
    document.getElementById("mainOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
}

//Managing the rules button/list
const ruleButton = document.getElementById("rules")
ruleButton.addEventListener("click", () => {
    if(document.getElementById("ruleList").style.display=="none"){
        document.getElementById("ruleList").style.display = "block";
    }
    else if(document.getElementById("ruleList").style.display=="block"){
        document.getElementById("ruleList").style.display = "none";
    }
});
//Managing the "next" button if you win
const nextButton = document.getElementById("next")
nextButton.addEventListener("click", () => {
    document.getElementById("resultSheet").style.display="none";
    document.getElementById("mainSheet").style.display="none";
    document.getElementById("winSheet").style.display="flex";
    nextButton.style.display="none";
});
//Managing the Play Again button
const PAButton = document.getElementById("playAgain")
PAButton.addEventListener("click", () => {
    location.reload();

});
const PAButton2 = document.getElementById("playAgain2")
PAButton2.addEventListener("click", () => {
    location.reload();

});


const loser = document.getElementById("resLoss");
const winner = document.getElementById("resWin");
const tie = document.getElementById("resTie");


const stoneButton = document.getElementById("stone");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

stoneButton.addEventListener("click", () => {
    let compChoices = ['stone', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * compChoices.length);
    if (compChoices[randomIndex] == "stone"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResStone").style.display="block";
        document.getElementById("compResStone").style.display="block";
        tie.style.display="block";
        
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResStone").style.display="block";
        document.getElementById("yourResStone").style.animation = "lose-breathe 4s ease-in-out infinite"
        document.getElementById("compResPaper").style.display="block";
        document.getElementById("compResPaper").style.animation = "win-breathe 4s ease-in-out infinite"
        loser.style.display="block";

        localStorage.setItem('SPS_Opp_Score', parseInt(localStorage.getItem('SPS_Opp_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResStone").style.display="block";
        document.getElementById("yourResStone").style.animation = "win-breathe 4s ease-in-out infinite"
        document.getElementById("compResScissor").style.display="block";
        document.getElementById("compResScissor").style.animation = "lose-breathe 4s ease-in-out infinite"
        nextButton.style.display="block";
        winner.style.display="block";


        localStorage.setItem('SPS_User_Score', parseInt(localStorage.getItem('SPS_User_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    }
});


paperButton.addEventListener("click", () => {
    let compChoices = ['stone', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * compChoices.length);
    if (compChoices[randomIndex] == "stone"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResPaper").style.display="block";
        document.getElementById("yourResPaper").style.animation = "win-breathe 4s ease-in-out infinite"
        document.getElementById("compResStone").style.display="block";
        document.getElementById("compResStone").style.animation = "lose-breathe 4s ease-in-out infinite"
        nextButton.style.display="block";
        winner.style.display="block";
        
        localStorage.setItem('SPS_User_Score', parseInt(localStorage.getItem('SPS_User_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResPaper").style.display="block";
        document.getElementById("compResPaper").style.display="block";
        tie.style.display="block";

        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
        
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResPaper").style.display="block";
        document.getElementById("yourResPaper").style.animation = "lose-breathe 4s ease-in-out infinite"
        document.getElementById("compResScissor").style.display="block";
        document.getElementById("compResScissor").style.animation = "win-breathe 4s ease-in-out infinite"
        loser.style.display="block";
        
        localStorage.setItem('SPS_Opp_Score', parseInt(localStorage.getItem('SPS_Opp_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    }
});


scissorButton.addEventListener("click", () => {
    let compChoices = ['stone', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * compChoices.length);
    if (compChoices[randomIndex] == "stone"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResScissor").style.display="block";
        document.getElementById("yourResScissor").style.animation = "lose-breathe 4s ease-in-out infinite"
        document.getElementById("compResStone").style.display="block";
        document.getElementById("compResStone").style.animation = "win-breathe 4s ease-in-out infinite"
        loser.style.display="block";
        
        localStorage.setItem('SPS_Opp_Score', parseInt(localStorage.getItem('SPS_Opp_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResScissor").style.display="block";
        document.getElementById("yourResScissor").style.animation = "win-breathe 4s ease-in-out infinite"
        document.getElementById("compResPaper").style.display="block";
        document.getElementById("compResPaper").style.animation = "lose-breathe 4s ease-in-out infinite"
        nextButton.style.display="block";
        winner.style.display="block";

        localStorage.setItem('SPS_User_Score', parseInt(localStorage.getItem('SPS_User_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResScissor").style.display="block";
        document.getElementById("compResScissor").style.display="block";
        tie.style.display="block";

        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    }
});