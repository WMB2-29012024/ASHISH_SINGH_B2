const timeInput = document.getElementById("timeInput")
const display = document.querySelector(".display")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")

let remainingTime = 0;
let start = true;
let timer;


const startTimer = () => {
    if(timer){
        clearInterval(timer)
    }
    if(start){
        remainingTime = timeInput.value
       
    }else{
        remainingTime
    }
    timer = setInterval(() => {
        updateTime()
    }, 1000)
};
const updateTime = () => {
    if (remainingTime > 0) {
        remainingTime--;
        console.log(remainingTime);
        displayTime();
    } else { clearInterval(timer) }
};

const displayTime = () => {
    // const remainingTime = timeInput.value;
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60
    display.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}
const pauseTimer = () => {
    clearInterval(timer);
    start = false;
}
pauseBtn.addEventListener('click',pauseTimer)


resetBtn.addEventListener('click',()=>{
    remainingTime = 0
    clearInterval(timer)
    timeInput.value =""
    display.innerHTML = "00:00:00"
    start = true
})
export { startTimer }