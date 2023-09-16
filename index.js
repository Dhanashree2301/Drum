
function playSound(key){
    var mySound;
    switch(key){
        case 'w':
            mySound.pa
            mySound = new Audio('sounds/w-audio.mp3')
            mySound.play();
            break;
        case 'a':
            mySound = new Audio('sounds/a-audio.mp3')
            mySound.play();
            break;
        case 's':
            mySound = new Audio('sounds/w-audio.mp3')
            mySound.play();
            break;
        case 'd':
            mySound = new Audio('sounds/a-audio.mp3')
            mySound.play();
            break;
        case 'j':
            mySound = new Audio('sounds/a-audio.mp3')
            mySound.play();
            break;
        case 'k':
            mySound = new Audio('sounds/w-audio.mp3')
            mySound.play();
            break;
        case 'l':
            mySound = new Audio('sounds/a-audio.mp3')
            mySound.play();
            break;

        default:
            console.log("Wrong Button!");
    }

}
// {
//     let mySound=new Audio('sounds/w-audio.mp3');
//     mySound.play();
//     alert("Working");
//     console.log("Working");
// }

// function playSoundA()
// {
//     let mySound=new Audio('sounds/a-audio.mp3');
//     mySound.play();
// }
// document.querySelectorAll(".drum")[0].addEventListener("click",playSoundW);
// document.querySelectorAll(".drum")[1].addEventListener("click",playSoundA);

for(let i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",(event)=>{
        // console.log(event).target();
        console.log(event.target.innerHTML);
        let btn=event.target.innerHTML;
        playSound(btn);
    });
}