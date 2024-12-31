let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".win-msg-container");
let msg = document.querySelector("#win-msg");
let turn = document.querySelector("#turn");
let reset = document.querySelector(".reset-color");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "0";
      box.style.backgroundColor = "#27A300";
      box.style.boxShadow = "0px 0px 10px 5px #27A300";
      box.style.color = "#ECFFEB";
      turn.style.backgroundColor = "#FF0000";
      turn.style.boxShadow = "0px 0px 10px 5px #FF0000";
      turn.style.color = "#000";
      turn.innerText = "X";
      reset.style.backgroundColor = "#FF0000";
      reset.style.boxShadow = "0px 0px 10px 5px #FF0000";
      reset.style.color = "#000";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.backgroundColor = "#FF0000";
      box.style.boxShadow = "0px 0px 10px 5px #FF0000";
      turn.style.backgroundColor = "#27A300";
      turn.style.boxShadow = "0px 0px 10px 5px #27A300";
      turn.style.color = "#ECFFEB";
      turn.innerText = "0";
      reset.style.backgroundColor = "#27A300";
      reset.style.boxShadow = "0px 0px 10px 5px #27A300";
      reset.style.color = "#ECFFEB";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};