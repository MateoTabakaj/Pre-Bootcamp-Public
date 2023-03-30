console.log("page loaded...");
// function playF(el){
// el.play();
// }
// playF(el)= false;

// function play(el){
//     // if (){
//     //     el.play();
//         if (play(el)){
//             do {
//                 break;
//             } while (playF(el));
//         }
        
//     }

// function stop(el){
//     while (playF(el) == false){
//         el.pause()
//     }

// } 

const video = document.querySelector('video');
let clicked = false;
video.addEventListener('mouseover',() => {
    video.play();
});

video.addEventListener('mouseout',() => {
    if(!clicked){
    video.pause();
}
});

video.addEventListener('click',() => {
    clicked=true;
    video.play();
});
