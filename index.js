let dane;
let Eu = [];
const btn = document.querySelector("#check");
let p = 0;
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
  const img = document.querySelector("img");

  let random = Math.floor(Math.random() * Eu.length);
  p = random;
  img.src = Eu[random].flags.png;
  Country.textContent = Eu[random].name.common;
  console.log(Eu[random].capital);
}

btn.addEventListener("click", graP);

let C = 0;
const correct = document.getElementById("correct");
let I = 0;
const incorrect = document.getElementById("incorrect");


const his = document.createElement("historia");
const paragRA
his.classList.add("his")
document.body.appendChild(his)


function graP() {
  const inp = document.querySelector("input");
  const div = document.createElement("div");
  const imgH = document.createElement("img");
  const para = document.createElement("p")

  const img2 = document.createElement("img")
  if (inp.value == Eu[p].capital) {
    C++;
    correct.textContent = `Poprawne:${C}`;

    his.appendChild(div);
    his.appendChild(imgH);
    his.appendChild(para)
    para.textContent = Eu[p].name.common;
    imgH.src = Eu[p].flags.png;
    imgH.style.width = `40px`;
    imgH.style.height = `40px`;
    para.style.color = "green"
        imgH.style.marginLeft = `30px`
            inp.value = ""
    imgH.style.border = `1px solid black`;
  } else if (I == 4) {
    I++;
    incorrect.textContent = `Niepoprawne:${I}`;
    btn.disabled = "disabled";

    
    his.appendChild(div);
    his.appendChild(imgH);
    his.appendChild(para)
    para.textContent = Eu[p].name.common;
    imgH.src = Eu[p].flags.png;
    imgH.style.width = `40px`;
    imgH.style.height = `40px`;
    para.style.color = "red"
    imgH.style.border = `1px solid black`;
    imgH.style.marginLeft = `30px`
    inp.value = ""

    const his = document.createElement("historia");
    his.classList.add("his")
document.body.appendChild(his)
  } else {
    I++;
    inp.value = ""
    incorrect.textContent = `Niepoprawne:${I}`;

    his.appendChild(div);
    his.appendChild(imgH);
    his.appendChild(para)
    para.textContent = Eu[p].name.common;
    imgH.src = Eu[p].flags.png;
    imgH.style.width = `40px`;
    para.style.color = "red"
    imgH.style.height = `40px`;
    imgH.style.border = `1px solid black`;
        imgH.style.marginLeft = `30px`

  }

  losuj();
}
