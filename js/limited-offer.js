setTimeout(() => {
  const counterS = document.getElementById("seconds");
  const counterM = document.getElementById("minutes");
  const counterH = document.getElementById("hours");
  const counterD = document.getElementById("days");

let countS = parseInt(counterS.textContent) || 0;
let countM = parseInt(counterM.textContent) || 0;
let countH = parseInt(counterH.textContent) || 0;
let countD = parseInt(counterD.textContent) || 0;

  function updateCounter() {
    countS--;

    if(countS < 0){
      countS = 59;
      countM--;
    }

    if(countM < 0){
      countM = 59;
      countH--;
    }

    if(countH < 0){
      countH = 23;
      countD--;
    }

    counterS.textContent = countS;
    counterM.textContent = countM;
    counterH.textContent = countH;
    counterD.textContent = countD;
  }

  setInterval(updateCounter, 1000);
}); 