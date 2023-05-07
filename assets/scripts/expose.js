// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var select = document.getElementById("horn-select");
  var image = document.getElementsByTagName("img");
  var audio = document.getElementsByTagName("audio")
  
  //change pics and set audio when selected
  select.addEventListener('change', function(){
    console.log(select.selectedOptions[0].value);
    if(select.selectedOptions[0].value === "air-horn"){
      image[0].src = "assets/images/air-horn.svg";
      audio[0].src = "assets/audio/air-horn.mp3";
    }
    else if(select.selectedOptions[0].value === "car-horn"){
      image[0].src = "assets/images/car-horn.svg";
      audio[0].src = "assets/audio/car-horn.mp3";
    }
    else if(select.selectedOptions[0].value === "party-horn"){
      image[0].src = "assets/images/party-horn.svg";
      audio[0].src = "assets/audio/party-horn.mp3";
    }
  });

  //change audio volume
}