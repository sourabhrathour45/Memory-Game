let cards = document.querySelectorAll('.card');
let counter = 0;
let cardOne, cardTwo, cardOneIndex, cardTwoIndex;
let temp;
let timer = document.querySelector('.timer');
let intervalID,winCounter=0;
let flag = null;
let isChecking = false;

function clickHandler(event){

    if(isChecking){
        return;
    }

    if(!flag){
        flag =-1;
         intervalId = setInterval(function(){
            timer.innerText = timer.innerText - 1;
            checkTimer();
            checkResult();
          },1000)
    }

counter++
let text = event.currentTarget.querySelector('.text')
text.style.display = 'inline';

if(counter===1) cardOne = text.innerText;
if(counter===2) cardTwo = text.innerText;

for(let i=0; i<cards.length; i++){
 if(cards[i]==event.currentTarget){
    temp = i;
 }
}


if(counter===1) cardOneIndex = temp;
if(counter===2) cardTwoIndex = temp;


if(counter>=2){
    isChecking = true;
    setTimeout(()=>{
     counter =0;
     checkForMatch()
     vanishText();
     isChecking = false;

    },500)
}


}


function checkTimer(){
    if(timer.innerHTML==0){
        clearInterval(intervalId);
    }

}



function checkResult() {
    winCounter = 0;
    for (card of cards) {
        if (card.style.visibility == "hidden") {
            winCounter++;
        }
    }
    
    if (winCounter === 20) {
        timer.innerText = "You Win";
        clearInterval(intervalId);
    } else if (timer.innerText == "0") {
        timer.innerText = "You Lose";
        clearInterval(intervalId);
    }
}



function vanishCards(){
cards[cardOneIndex].style.visibility = 'hidden';
cards[cardTwoIndex].style.visibility = 'hidden';
console.log(cardOneIndex);
console.log(cardTwoIndex);
}

function vanishText(){
    if(cardOne!=cardTwo){
        cards[cardOneIndex].querySelector('.text').style.display = 'none';
        cards[cardTwoIndex].querySelector('.text').style.display = 'none';
     
    }
}

function checkForMatch(){
    if(cardOne==cardTwo){
        vanishCards();
    }

}




for(card of cards){
    card.addEventListener('click', clickHandler)
}

