const stoper = document.getElementById("Stoper");
let time = null;
let startTime = 0;
let elapsedTime = 0;
isRunning = false;

function startStoper(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(updateStoper, 10);
        isRunning = true;
    }
}
function stopStoper(){
    if(isRunning){
        clearInterval(time);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetStoper(){
    clearInterval(time);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stoper.textContent = `00:00:00:00`;
}
function updateStoper(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    stoper.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
























