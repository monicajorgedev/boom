
const result = document.getElementById("result")
const userInput = document.getElementById("userInput")
const btnRestart = document.getElementById("restart")

let yourNumber;
let numberPC;
const numberRandom = (min, max)=> Math.floor((Math.random() * (max - min + 1)) + min);


//evento escucha input, da valor a los numeros usuario y pc, e inicia cuenta atrás
userInput.addEventListener("input", ()=>{
    yourNumber = userInput.value
    userInput.disabled = true
    numberPC = numberRandom(1,3)

//promesa que hace la cuenta atrás y con el then compara los números e introduce el resultado en el DOM
    const resultPromise = new Promise ((resolve, reject)=> {
        let timeLeft= 5;
        //función actualiza cuenta atrás
        const updateCountdown = ()=> {
            const countdown = document.getElementById("countdown")
            countdown.textContent = `Cuenta atrás: ${timeLeft} segundos`
            timeLeft--
            if(timeLeft <= -1){
                clearInterval(intervalId);
                countdown.textContent = ""
                resolve();   
            }
        }
        //actualiza la cuenta atras cada segundo
        const intervalId = setInterval(updateCountdown,1000);
        updateCountdown()

    }).then(() => {
        userInput.disabled=false
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
    })
})

//botón reinicia el juego
btnRestart.addEventListener("click", ()=> {
    result.innerHTML= ""
})



