function processInput() {
    const input = document.getElementById('numberInput').value.trim();

    // Split the input by various delimiters (comma, space, colon, slash, and plus)
    const rawNumbers = input.split(/[ ,:\s\/\+\-*/]+/).map(num => num.trim()).filter(num => num !== "");

    if (rawNumbers.length === 0) {
        alert('Please enter valid numbers or expressions.');
        return;
    }

    // Convert the string numbers into actual numbers
    const numbers = rawNumbers.map(num => parseFloat(num));

    // Calculate total numbers entered and the sum of numbers
    const totalNumbers = numbers.length;
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Count how many times each number appears (including repeated numbers)
    const numberCounts = numbers.reduce((counts, num) => {
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});

    // Find repeated numbers
    const repeatedNumbers = Object.entries(numberCounts)
        .filter(([num, count]) => count > 1)
        .map(([num, count]) => `${num} appears ${count} times`)
        .join(', ') || 'None';

    // Display the results
    document.getElementById('totalNumbers').textContent = totalNumbers;
    document.getElementById('sum').textContent = sum;
    document.getElementById('repeatedNumbers').textContent = repeatedNumbers;
}

// Updated: 2025-08-04