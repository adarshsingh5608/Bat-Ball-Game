
function playgame(userchoice) {
  const choice = ["Bat", "Ball", "Stump"];
  const computerchoice = choice[Math.floor(Math.random() * 3)];
  let result = "";

  if (userchoice == computerchoice) {
    result = "It's a Draw";
  } 
  else if (
    (userchoice == "Bat" && computerchoice == "Ball") ||
    (userchoice == "Ball" && computerchoice == "Stump") ||
    (userchoice == "Stump" && computerchoice == "Bat")
  ) {
    result = "You Win";
  } 
  else {
    result = "Computer Wins";
  }

  document.getElementById("result").innerHTML = `
    You chose: <b>${userchoice}</b><br>
    Computer chose: <b>${computerchoice}</b><br>
    <span style="font-size:24px">${result}</span>
  `;

}
