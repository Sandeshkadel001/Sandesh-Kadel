// script.js
document.getElementById('love-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Simulate love calculation
    const lovePercentage = Math.floor(Math.random() * 101);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${name1} 💖 ${name2}</p>
                           <p>Your Love Score is: <strong>${lovePercentage}%</strong></p>`;
});
