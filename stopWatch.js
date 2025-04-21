let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let sec = 0;
let min = 0;
let secUi = document.querySelector("#sec");
let minUi = document.querySelector("#min");
let interval;

secUi.innerHTML = `${sec}`;
minUi.innerHTML = `${min}`;
start.addEventListener("click", () => {
    interval = setInterval(() => {
        sec++;
        secUi.innerHTML = `${sec}`;
        if(sec > 60){
            sec = 0;
            min++;
            minUi.innerHTML = `${min}`;
        }
    }, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(interval);
    
})

reset.addEventListener("click", () => {
    clearInterval(interval)
    min = 0;
    sec = 0;
    secUi.innerText = `${sec}`;
        minUi.innerText = `${min}`;
})




























// start.addEventListener("click", () => {
//   interval = setInterval(() => {
//     secUi.innerText = `${sec}`
//     sec++;
//     ;   
//     if (sec > 19) {
//       sec = 0;
//       secUi.innerText = `${sec}`;
//       min++;
//       minUi.innerText = `${min}`;
//     }
//   }, 1000);
// });
// stop.addEventListener("click", () => {
//     clearInterval(interval)
// }
// )
// reset.addEventListener("click", () => {
    
//     clearInterval(interval)
//     sec = 0;
//     min = 0; 
//     secUi.innerText = `${sec}`;
//     minUi.innerText = `${min}`;
// }
// )

// start.addEventListener("click", () => {
//     let intervalStart = setInterval(() => {
        
//     },1000)
// })