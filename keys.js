for (var i =0; i < 9; i++) {
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        var text =this.innerHTML;
        console.log(text);
        audioplay(text);
        playAnimation(text);
        
    });
    
}

function audioplay(text){
    switch(text){
        case "a":
        var audio = new Audio("sounds/boom.wav");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/clap.wav");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/hihat.wav");
        audio.play();
        break;
        case "f":
        var audio = new Audio("sounds/kick.wav");
        audio.play();
        break;

        case "g":
        var audio = new Audio("sounds/openhat.wav");
        audio.play();
        break;

        case "h":
        var audio = new Audio("sounds/ride.wav");
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/snare.wav");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/tink.wav");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/tom.wav");
        audio.play();
        break;
    }
}

document.addEventListener("keypress", function(event){
    var text = event.key;
    audioplay(text);
    playAnimation(text);

});

function playAnimation(text){
    var myAnimation = document.querySelector("."+ text);
    myAnimation.classList.add("animation");

    setTimeout(function() {
        myAnimation.classList.remove("animation");
    }, 200);
}

