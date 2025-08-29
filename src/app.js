import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const tlds = ['.com', '.net', '.org', '.io'];

function generateDomains() {
  const domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tlds.length; l++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + tlds[l]);
        }
      }
    }
  }

  return domains;
}

document.addEventListener("DOMContentLoaded", () => {
  const domainEl = document.getElementById("domain");
  const btn = document.getElementById("newDomain");

  const domains = generateDomains();

  domainEl.textContent = domains[Math.floor(Math.random() * domains.length)];


  btn.addEventListener("click", () => {
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    domainEl.textContent = randomDomain;
    console.log(randomDomain);
  });
});
