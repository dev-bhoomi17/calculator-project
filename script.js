function playSound() {
    let sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function appendValue(value) {
    playSound();
    document.getElementById("display").value += value;
}

function clearDisplay() {
    playSound();
    document.getElementById("display").value = "";
}

function calculate() {
    playSound();
    let result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
}