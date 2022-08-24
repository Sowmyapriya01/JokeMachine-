const jokeBtn = document.querySelector("#joke-btn")
const speakBtn = document.querySelector("#speak-btn")
const jokeText = document.querySelector("#joke")

const speakSynth = window.speechSynthesis

let joke = null

jokeBtn.addEventListener("click",()=>{
    
    fetch(`https://icanhazdadjoke.com/`,{
        headers:{
            Accept : "application/json"
        }
    })
      .then((res) => res.json())
      .then((res) => {
        jokeText.innerText = res.joke
        joke = res.joke;
      })
})
speakBtn.addEventListener("click",()=>{
let utterance = new SpeechSynthesisUtterance(joke)
utterance.volume = 1
speakSynth.speak(utterance)
 })