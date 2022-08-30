const gameContainer = document.getElementById("game");
const divScore =document.querySelector('#score')
const countDiv =document.querySelector('#count')
const body =document.querySelector('body')
const divBest =document.querySelector('#bscore')
const lowS =localStorage.getItem('low-score');

let count =0;
let score =0;
let bestScore =0;

const imgPic = [
  {imgSrc:"img/yj1.jpeg",name:'yj1'},
  {imgSrc:"img/yj2.jpeg",name:'yj2'},
{imgSrc:"img/yj3.jpeg",name:'yj3'},
{imgSrc:"img/yj4.jpeg",name:'yj4'},
{imgSrc:"img/yj5.jpeg",name:'yj5'},
{imgSrc:"img/yj6.jpeg",name:'yj6'},
{imgSrc:"img/yj1.jpeg",name:'yj1'},
{imgSrc:"img/yj2.jpeg",name:'yj2'},
{imgSrc:"img/yj3.jpeg",name:'yj3'},
{imgSrc:"img/yj4.jpeg",name:'yj4'},
{imgSrc:"img/yj5.jpeg",name:'yj5'},
{imgSrc:"img/yj6.jpeg",name:'yj6'}
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(imgPic);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(imgPic) {
  for (let color of imgPic) {
    // create a new div
    const div = document.createElement('div')
const imgOut = document.createElement('img')
const backDiv =document.createElement('div')
// console.log(color.imgSrc)
    // give it a class attribute for the value we are looping over
    div.classList.add ('card');
    imgOut.classList.add ('face')
    backDiv.classList.add ('back')
   div.classList.toggle(color.imgSrc)
    imgOut.src = color.imgSrc
    
    gameContainer.appendChild(div)
    div.appendChild(imgOut)
    div.appendChild(backDiv)

    // call a function handleCardClick when a div is clicked on
   div.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(div);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
 
event.target.classList.toggle('toggleCard')
   
if (event.target){
count++;
countDiv.innerText =`Count :${count}`
}  
 
// match card 
const clicked = event.target
clicked.classList.add('selected');
const clickedCard = document.querySelectorAll('.selected')
if(clickedCard.length === 2){
  // If matched
if(clickedCard[0].className === clickedCard[1].className) {
score+=2;
divScore.innerText =`Score: ${score}`
clickedCard.forEach((card)=>{
card.classList.remove('selected')
card.style.pointerEvents ='none';
 })

}else{
// If wrong
clickedCard.forEach(card =>{
setTimeout(function(){
card.style.backgroundColor =''
card.classList.remove('selected');
card.classList.remove('toggleCard')
            
 },1000);
})

}
}

  if(score === 12){
    alert('YOU GOT ALL MATCHED')
   
    console.log(lowS)
    }
    
if(count === 24){
  alert('GAME OVER')
gameContainer.innerHTML = ''

divScore.innerText =`Score: ${score}`
countDiv.innerText =`Count :${count}`
let lowS =localStorage.getItem('low-score') || Infinity;
if(score < lowS ){
  localStorage.setItem('low-score',score)
  
 }
 divBest.innerText =`Best Score:${lowS}`
 console.log(divBest)

 console.log(lowS)
}

  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);


}




// startBtn
const startBtn =document.querySelector('button')
startBtn.addEventListener('click',()=>{
gameContainer.innerHTML = ''
createDivsForColors(imgPic);
score=0;
divScore.innerText =`Score: ${score}`
count=0;
countDiv.innerText =`Count :${count}`
})

// restartBtn
const restartBtn = document.querySelector('.restart')

restartBtn.addEventListener('click',()=>{
gameContainer.innerHTML = ''
createDivsForColors(shuffledColors);
score=0;
divScore.innerText =`Score: ${score}`

count=0
countDiv.innerText =`Count :${count}`
})



// when the DOM loads



/* */


