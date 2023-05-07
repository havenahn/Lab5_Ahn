// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  var voices = [];
  var select = document.getElementById("voice-select");
  synth.onvoiceschanged = function() {
    //get voices
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  }
  //get button to make it speak
  var button = document.getElementsByTagName("button");
  var text = document.getElementById("text-to-speak");
  button[0].addEventListener('click', function(){
    const utters = new SpeechSynthesisUtterance(text.value);
    const selected = select.selectedOptions[0].getAttribute("data-name");
    console.log(selected);
    for (let i = 0; i < voices.length; i++) {
      console.log(voices[i].name);
      if (voices[i].name === selected) {
        utters.voice = voices[i];
        break;
      }
    }
    synth.speak(utters);
  });
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
    });
};
    button.addEventListener('click', function(){
      const utters = new SpeechSynthesisUtterance(text.value);
      const selected = voiceSelect.selectedOptions[0].getAttribute("data-name");
    });


  
    

    var button = document.getElementsByTagName("button");
    var text = document.getElementsByName("text-to-speak");
    console.log(text.value);

  //})
  //when you press button, make it speak
  HTMLElement.addEventListener('click', function(){
    const utters = new SpeechSynthesisUtterance(text.value);
    const selected = voiceSelect.selectedOptions[0].getAttribute("data-name");
  })*/