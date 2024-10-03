function startTimer() {
    // Start a 10-second timer
    const timeoutId = setTimeout(function() {
        console.log("Time's up!");
    }, 10000); // 10 seconds = 10000ms

    // Use querySelector to select the cancel button
    const cancelButton = document.querySelector('#cancelButton');
    
    // event listener fol cancel
    cancelButton.addEventListener('click', function() {
        clearTimeout(timeoutId); // Cancel the timeout
        console.log("Timer canceled!");
    });
}

// starting timer
startTimer();
