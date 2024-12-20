let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
let border = document.querySelector("#bord")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 0.9;       
    text_speak.pitch = 0.8;    
    text_speak.volume = 1;     
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()

    if (hours >= 0 && hours < 12)
        speak("hello, Good Morning Sir")
    if (hours >= 12 && hours < 16)
        speak("hello, Good After Noon Sir")
    else
        speak("hello, Good Evening Sir")

}

window.addEventListener('load',()=>{
    wishMe()
})
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript

    takeCommands(transcript.toLowerCase())
}

function takeCommands(message){
    btn.style.opacity="1"
    voice.style.opacity="0"
    border.style.opacity="1"
      if(message.includes("hello") || message.includes("hi") || message.includes("hye") || message.includes("hello Ravish") || message.includes("hi Ravish")) {
          speak("Hello sir, How can i help you ?")
      }

      else if(message.includes("who are you")|| message.includes("what is your name")){
        speak("My name is Ravis a virtual voice assistant made by Dinaish Sir")
      }
      else if(message.includes("how are you")) {
        speak("I'm good dude! make your queries ")
      }
      else if(message.includes("who is your creator") || message.includes("who made you") ||message.includes("who is your owner")) {
        speak("Dinaish sir is my Creator")
      }
      else if(message.includes("open youtube") || message.includes("launch youtube") || message.includes("go to youtube")) {
        speak("alright")
        speak("opening youtube")
        window.open("https://www.youtube.com", "_blank")
      }
      else if(message.includes("open facebook") || message.includes("launch facebook") || message.includes("go to facebook")) {
        speak("alright")
        speak("opening facebook")
        window.open("https://www.facebook.com", "_blank")
      }
      else if(message.includes("open google") || message.includes("launch google") || message.includes("go to google")) {
        speak("alright")
        speak("opening google")
        window.open("https://www.google.com", "_blank")
      }
      else if(message.includes("open instagram") || message.includes("launch instagram") || message.includes("go to instagram")) {
        speak("alright")
        speak("opening instagram")
        window.open("https://www.instagram.com", "_blank")
      }
      else if(message.includes("open calculator") || message.includes("launch calculator") || message.includes("go to calculatotr")) {
        speak("alright")
        speak("opening calculator")
        window.open("calculator://")
      }
      else if(message.includes("open whatsapp") || message.includes("launch whatsapp") || message.includes("go to cwhatsapp")) {
        speak("alright")
        speak("opening whatsapp")
        window.open("whatsapp://")
      }
      else if(message.includes("time") || message.includes("what is the time right now") || message.includes("what is current time")) {
       let Time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(Time)
      }
      else if(message.includes("date") || message.includes("what is the time right now") || message.includes("what is the day today")) {
       let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
       speak(date)
      }

      else{
        let finalText = "This is what i found on internet regarding" + message.replace("Ravish","") || message.replace("Ravesh","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Ravish","") || message.replace("Ravesh","")}`)
        
    }

  content.innerText="Ask Something Again"
}

btn.addEventListener('click', () => {
    recognition.start()
    btn.style.opacity="0"
    voice.style.opacity="1"
    border.style.opacity="0"
    
})
