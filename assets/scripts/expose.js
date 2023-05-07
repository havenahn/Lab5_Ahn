// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var select = document.getElementById("horn-select");
  var image = document.getElementsByTagName("img");
  var audio = document.getElementsByTagName("audio");
  var slider = document.getElementById("volume");
  
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

  //change volume
  slider.addEventListener('input', function(){
    audio.volume = volume.value / 100;
    if(volume.value == 0){
      image[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(volume.value < 33){
      image[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(volume.value < 67){
      image[1].src = "assets/icons/volume-level-2.svg";
    }
    else{
      image[1].src = "assets/icons/volume-level-3.svg";
    }
  });

  
}