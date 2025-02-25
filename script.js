const msg = document.querySelector("#diplayWinner");
const boxes = document.querySelectorAll(".boxes");
const resetbtn = document.querySelector("#resetButton");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let Turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (Turn0) {
      //   console.log("Turn 0");
      box.innerHTML = "O";
      Turn0 = false;
    } else {
      //   console.log("Turn 1");
      box.innerHTML = "x";
      Turn0 = true;
    }
    box.disabled = true;
    CheckWinner();
  });
});

const CheckWinner = () => {
  for (let pattern of winPattern) {
    let pov1 = boxes[pattern[0]].innerText;
    let pov2 = boxes[pattern[1]].innerText;
    let pov3 = boxes[pattern[2]].innerText;

    if (pov1 != "" && pov2 != "" && pov3 != "") {
      if (pov1 == pov2 && pov2 == pov3) {
        // console.log("winner", pov1);
        showWinner(pov1);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.classList.remove("hide");
  msg.innerText = `Congratulation! The Winner is ${winner}`;
  disablebtn();
};
const disablebtn = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enablebtn = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};
resetbtn.addEventListener("click", () => {
  enablebtn();
  Turn0 = true;
  msg.classList.add("hide");
});
