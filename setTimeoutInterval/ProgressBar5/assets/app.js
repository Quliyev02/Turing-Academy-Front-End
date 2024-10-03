function startProgressBar() {
    const progressBar = document.querySelector('#progressBar');
    let width = 0; // Initial width in percentage

    // Update the progress bar every 100 milliseconds
    const intervalId = setInterval(() => {
        if (width >= 100) {
            clearInterval(intervalId); // Stop the interval when the bar is full
            console.log("Progress complete!"); // Log completion message
        } else {
            width += 2; // Increment width by 2% every 100ms
            progressBar.style.width = width + '%'; // Update the width of the progress bar
        }
    }, 100); // Repeat every 100ms
}

// Start the progress bar when the script runs
startProgressBar();
