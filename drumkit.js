var numberOfButtons = document.querySelectorAll("button").length; 

for (var i = 0; i < numberOfButtons; i++) { 

document.querySelectorAll("button")[i] 
	.addEventListener("click", function() { 
	var key = this.innerHTML; 
	
        switch (key) {

          case "w": 
            var sound1 = new Audio("musics\\w.mp3"); 
            sound1.play(); 
            break;
        
          case "a": 
            var sound2 = new Audio("musics\\a.mp3"); 
            sound2.play(); 
            break;
          
          case "s":
            var sound3 = new Audio('musics\\s.mp3');
            sound3.play();
            break;

          case "d":
            var sound4 = new Audio('musics\\d.mp3');
            sound4.play();
            break;

          case "j":
            var sound5 = new Audio('musics\\j.mp3');
            sound5.play();
            break;

          case "k":
            var sound6 = new Audio('musics\\k.mp3');
            sound6.play();
            break;

          case "l":
            var sound7 = new Audio('musics\\l.mp3');
            sound7.play();
            break;

         default: console.log(key);      
        }
    });
  }

    
// const audio = new Audio();
// audio.src = "musics/w.mp3";
//audio.src = "musics/a.mp3";

