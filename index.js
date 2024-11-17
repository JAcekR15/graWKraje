let p = 0;
let C = 0;
let I = 0;
let gra = 1;
let dane = [];
let Eu = [];

async function pobierz() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  dane = await response.json();

  dane.forEach((element) => {
    if (element.continents[0] == "Europe") {
      Eu.push(element);
    }
  });
  console.log(Eu);
  losuj();
  return Eu;
}
pobierz();

async function losuj() {
  const Country = document.querySelector("#kraj");
  const img = document.querySelector("#flaga");

  let random = Math.floor(Math.random() * Eu.length);
  p = random;
  img.src = Eu[random].flags.png;
  Country.textContent = Eu[random].name.common;
  console.log(Eu[random].capital);
}

const gameDiv = document.createElement("div");
const nrGry = document.createElement("p");

gameDiv.appendChild(nrGry);
document.body.appendChild(gameDiv);

let his = document.createElement("div");
his.classList.add("his");
document.body.appendChild(his);
nrGry.textContent = `Gra ${gra}`;
his.appendChild(nrGry);

const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const life = document.querySelector("#life");

correct.textContent = 0;
incorrect.textContent = 0;
life.textContent = 3;

const btn = document.querySelector("#check");
btn.addEventListener("click", graP);

function graP() {
  const input1 = document.querySelector("#inp1");

  const ul = document.createElement("ul");
  his.appendChild(ul);

  const li = document.createElement("li");
  ul.appendChild(li);

  const imgHis = document.createElement("img");
  imgHis.src = Eu[p].flags.png;
  li.appendChild(imgHis);

  const countryName = document.createTextNode(Eu[p].name.common);

  if (input1.value == Eu[p].capital) {
    C++;
    correct.textContent = C;
    li.style.color = "green";
    input1.value = "";
  } else {
    I++;
    incorrect.textContent = I;
    life.textContent = 3 - I;
    li.style.color = "red";
    input1.value = "";
  }

  li.appendChild(countryName);

  if (I >= 3) {
    const totalAttempts = C + I;
    const percentage = ((C / totalAttempts) * 100).toFixed(2);
    const percentageText = document.createElement("p");
    percentageText.textContent = `Procent poprawnych odpowiedzi: ${percentage}%`;
    his.appendChild(percentageText);
    input1.value =   "";
    input1.style.display = "none";
    btn.style.background = "red";
    btn.textContent = "Reset";
    btn.removeEventListener("click", graP);
    btn.addEventListener("click", resetGame);
  } else {
    losuj();
  }
}

function resetGame() {
  const input2 = document.querySelector("#inp1");
  input2.style.display = "";
  C = 0;
  I = 0;
  gra++;
  correct.textContent = 0;
  incorrect.textContent = 0;
  life.textContent = 3;
  btn.style.background = "white";
  const nrGry = document.createElement("p");
  nrGry.textContent = `Gra ${gra}`;
  his = document.createElement("div");
  his.classList.add("his");
  his.appendChild(nrGry);
  document.body.appendChild(his);

  btn.textContent = "Sprawdź";
  btn.removeEventListener("click", resetGame);
  btn.addEventListener("click", graP);

  losuj();
}