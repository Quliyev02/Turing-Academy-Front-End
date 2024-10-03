function countdownTimer() {
    let count = 10;
    let intervalId = setInterval(function() {
        console.log(count); // Log the current countdown number
        if (count === 0) {
            console.log("Blast off!"); // showing the text in 0
            clearInterval(intervalId); // stopping countdown in 0
        }
        count--;
    }, 1000); 
}

countdownTimer();
