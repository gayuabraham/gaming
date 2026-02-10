let mathnum = Math.floor(Math.random() * 10) + 1;
console.log(mathnum);

const result = document.getElementById("result");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

function change() {
  const entered = Number(document.getElementById("num").value);

  result.classList.remove("win", "lose");

  if (entered === mathnum) {
    result.textContent = "YOU WIN 🎉";
    result.classList.add("win");
            
  } else {
    result.textContent = "YOU LOSE 💀";
    result.classList.add("lose");

  }
}


