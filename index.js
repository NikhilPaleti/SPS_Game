document.getElementById("ruleList").style.display="none"
document.getElementById("resultSheet").style.display="none"
document.getElementById("winSheet").style.display="none"


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


const ruleButton = document.getElementById("rules")
ruleButton.addEventListener("click", () => {
    if(document.getElementById("ruleList").style.display=="none"){
        document.getElementById("ruleList").style.display = "block";
    }
    else if(document.getElementById("ruleList").style.display=="block"){
        document.getElementById("ruleList").style.display = "none";
    }
});



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
        
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResStone").style.display="block";
        document.getElementById("compResPaper").style.display="block";

        localStorage.setItem('SPS_Opp_Score', parseInt(localStorage.getItem('SPS_Opp_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResStone").style.display="block";
        document.getElementById("compResScissor").style.display="block";

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
        document.getElementById("compResStone").style.display="block";
        
        localStorage.setItem('SPS_User_Score', parseInt(localStorage.getItem('SPS_User_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResPaper").style.display="block";
        document.getElementById("compResPaper").style.display="block";

        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
        
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResPaper").style.display="block";
        document.getElementById("compResScissor").style.display="block";
        
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
        document.getElementById("compResStone").style.display="block";
        
        localStorage.setItem('SPS_Opp_Score', parseInt(localStorage.getItem('SPS_Opp_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "paper"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResScissor").style.display="block";
        document.getElementById("compResPaper").style.display="block";

        localStorage.setItem('SPS_User_Score', parseInt(localStorage.getItem('SPS_User_Score'))+1);
        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    } 
    else if (compChoices[randomIndex] == "scissor"){
        document.getElementById("mainSheet").style.display="none";
        document.getElementById("resultSheet").style.display="block";
        document.getElementById("yourResScissor").style.display="block";
        document.getElementById("compResScissor").style.display="block";

        document.getElementById("resYourScoreVAR").innerHTML = localStorage.getItem('SPS_User_Score');
        document.getElementById("resOppScoreVAR").innerHTML = localStorage.getItem('SPS_Opp_Score');
    }
});