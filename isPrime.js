const fs = require('fs');

const inputNumber = parseInt(process.env.NUMBER, 10);

if (isNaN(inputNumber)) {
    console.error("Error: No valid number provided. Please set the NUMBER parameter in Jenkins.");
    process.exit(1);
}

function isPrime(num) {
    if (num < 2) return `The number ${num} is not a prime number`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `The number ${num} is not a prime number`;
    }
    return `The number ${num} is a prime number`;
}

const result = isPrime(inputNumber);

// create HTML
const htmlContent = `
<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime number test result</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        .result { font-size: 24px; font-weight: bold; color: #333; }
    </style>
</head>
<body>
    <h1>Prime number test result</h1>
    <p class="result">${result}</p>
</body>
</html>
`;

// save to file
fs.writeFileSync('result.html', htmlContent);

console.log("תוצאה נשמרה ל-result.html");
