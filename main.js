const rank = document.querySelector(".rank");
const quote = document.querySelector(".quote");
const dice = document.querySelector(".dice");

async function generateRandomQuotes (){
   const data = await fetch("https://api.adviceslip.com/advice");
   const {slip} = await data.json();
   rank.innerText = `Advice #${slip.id}`;
   quote.innerText = `"${slip.advice}"`

}
dice.addEventListener("click", generateRandomQuotes);