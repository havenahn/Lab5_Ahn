// explore.js

/*const synth = window.speechSynthesis;
var voice = [];
function populateVoiceList() {
  speechSynthesis.addEventListener("voiceschanged", () => {
    const voice = synth.getVoices();

    for (let i = 0; i < voice.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voice[i].name} (${voice[i].lang})`;

      if (voice[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice[i].lang);
      option.setAttribute("data-name", voice[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  });
  return voice;
}*/

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  var voices = [];
  var select = document.getElementById("voice-select");
  synth.onvoiceschanged = function() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      select.appendChild(option);
    }
    var button = document.getElementsByTagName("button");
    var text = document.getElementById("text-to-speak");
    console.log(text);
    button[0].addEventListener('click', function(){
      const utters = new SpeechSynthesisUtterance(text.value);
      const selected = select.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selected) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utters);
    });
  console.log(voices);
  };
    /*var button = document.getElementsByTagName("button");
    var text = document.getElementById("text-to-speak");
    console.log(text);
    button[0].addEventListener('click', function(){
      const utters = new SpeechSynthesisUtterance(text.value);
      const selected = select.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selected) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utters);
    });*/
};
    /*button.addEventListener('click', function(){
      const utters = new SpeechSynthesisUtterance(text.value);
      const selected = voiceSelect.selectedOptions[0].getAttribute("data-name");
    });*/


  
    

    /*var button = document.getElementsByTagName("button");
    var text = document.getElementsByName("text-to-speak");
    console.log(text.value);*/

  //})
  //when you press button, make it speak
  /*HTMLElement.addEventListener('click', function(){
    const utters = new SpeechSynthesisUtterance(text.value);
    const selected = voiceSelect.selectedOptions[0].getAttribute("data-name");
  })*/