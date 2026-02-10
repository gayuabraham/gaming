// let balance = 20000;

// function update(){
//    document.querySelector(".amt").innerHTML= amt.toLocalString()
// }

// function showmsg(){
//    document.querySelector(".msg").innerHTML = msg;
//    document.querySelector(".num").value = "";
// }
// function deposite(){
//    let amount = parseInt(document.querySelector(".num").value);
// }
// if(amount >0){
//    amt += amount;
//    update()
//    showmsg(`$("deposited successfully)`)
// }else{
//    showmsg("please enter the valid amount")
// }
// let change = document.getElementById("user");
// console.log(change.textContent);
// function dot(){
//    change.textContent = "byee"
// }



// function add (){
//    let num1 =Number (document.getElementById("num1").value);
// let num2 = Number(document.getElementById("num2").value);
// let result = document.getElementById("result")
//    let tolal = num1 + num2;
//    result.textContent = tolal;
// }


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

    winSound.currentTime = 0;   
    winSound.play();            
  } else {
    result.textContent = "YOU LOSE 💀";
    result.classList.add("lose");

    loseSound.currentTime = 0;
    loseSound.play();
  }
}

