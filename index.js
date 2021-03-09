//***********making sound for button pressed*********//
var buttonNo = document.querySelectorAll("button").length;

for (var i = 0; i < buttonNo; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function()
{

var buttonPressed = this.innerHTML;

makeSound(buttonPressed)//***********callfunction**********/
animation(buttonPressed);

});

}
//**************Making Sound Keypress******************//
document.addEventListener("keydown",function(event){

      makeSound(event.key);//*********call Function********//
      animation(event.key);

});

function makeSound(key)//***************making Function******//
{
  switch (key) {
    case "w":
    var crash = new Audio ("sounds/crash.mp3");
    crash.play();
      break;
      case "a":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
        break;
        case "s":
    var audio = new Audio ("sounds/snare.mp3");
    audio.play();
        break;
        case"d":
        var audio = new Audio ("sounds/tom-1.mp3");
        audio.play();
            break;
            case"j":
            var audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
            break;
            case"k":
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
                break;
                case"l":
                var prank = new Audio ("sounds/tom-4.mp3");
                prank.play();
                break;
    default:

  }

}
function animation(currentKey){

var activeButton= document.querySelector("."+ currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
