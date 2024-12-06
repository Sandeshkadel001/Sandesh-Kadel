// Function to start the love calculator
function startCalculator() {
    // Prompting for user names
    const name1 = prompt("Enter the first name:").toLowerCase();
    const name2 = prompt("Enter the second name:").toLowerCase();
    
    // Combine the names and count specific characters
    const combinedNames = name1 + name2;
    const trueCount = combinedNames.split('').filter(letter => "ars".includes(letter)).length;
    const loveCount = combinedNames.split('').filter(letter => "cudt".includes(letter)).length;

    // Calculate the love score
    const totalScore = parseInt(trueCount + '' + loveCount);

    // Display the love score in the calculation container
    document.getElementById("love-score").textContent = `Your love score is ${totalScore}%`;
    
    // Hide the intro container and show the calculation result
    document.querySelector(".intro-container").style.display = "none";
    document.getElementById("calculation-container").style.display = "flex";
}

// Redirect to portfolio page
function goToPortfolio() {
    // Replace this URL with your portfolio link
    window.location.href = "index.html";
}
