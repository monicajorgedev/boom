
const result = document.getElementById("result")
const userInput = document.getElementById("userInput")
const btnRestart = document.getElementById("restart")

let yourNumber;
let numberPC;
const numberRandom = (min, max)=> Math.floor((Math.random() * (max - min + 1)) + min);


//evento escucha input, da valor a los numeros usuario y pc, e inicia cuenta atrás
userInput.addEventListener("input", ()=>{
    yourNumber = userInput.value
    numberPC = numberRandom(1,3)

    countdownFunction() 
    //promesa que compara numeros y da el resultado
    const resultPromise = new Promise ((resolve)=> {
        setTimeout(()=> {
          if (numberPC == yourNumber) {
            result.innerHTML = ""
            result.insertAdjacentHTML("afterbegin",`<div class="green"><p>Enhorabuena, has salvado el mundo</p></div>`)
            result.insertAdjacentHTML("beforeend",
                `<div class="black"><p>Tu número ${yourNumber} es el mismo que el número ${numberPC}.</p></div>`)
          } else {
            result.innerHTML = ""
            result.insertAdjacentHTML("afterbegin",`<div class="orange"><p>La bomba ha estallado</p></div>`)
            result.insertAdjacentHTML("beforeend",
                `<div class="black"><p>Tu número ${yourNumber} es distinto que el número ${numberPC}.</p></div>`)
        }
        },6000)
})
    })


//funcion cuenta atrás
const countdownFunction = ()=> {
let timeLeft= 5;
//función actualiza cuenta atrás
const updateCountdown = ()=> {
    const countdown = document.getElementById("countdown")
    countdown.textContent = `Cuenta atrás: ${timeLeft} segundos`
    timeLeft--
    if(timeLeft < -1){
        clearInterval(intervalId);
        countdown.textContent = ""   
    }
}
//actualiza la cuenta atras cada segundo
const intervalId = setInterval(updateCountdown,1000);
updateCountdown()
}


btnRestart.addEventListener("click", ()=> {
    result.innerHTML= ""
})



