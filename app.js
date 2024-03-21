let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");  

let turnO = true; //PlayerX, PlayerO

let oClr = "blue";
let xClr = "red";

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnO) {
            box.style.color = "blue";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true; 
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let winnerText = (winner) => {
    if(winner==="O"){
        msg.style.color = oClr;
        }
        else {
            msg.style.color = xClr;
        }
}

const showWinner = (winner) => {
    // winnerText();
    msg.innerText = `Congraulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let patterns of winPatterns ){
        // console.log(patterns[0], patterns[1], patterns[2]);
        // console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);
        // console.log(boxes[patterns[0]].innerText, boxes[patterns[1]].innerText, boxes[patterns[2]].innerText);
        let pos1value = boxes[patterns[0]].innerText;
        let pos2value = boxes[patterns[1]].innerText;
        let pos3value = boxes[patterns[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos2value != ""){
            if(pos1value===pos2value && pos1value == pos3value){
                console.log("Winner is: ", pos1value);
                winnerText(pos1value);
                showWinner(pos1value);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame); 
