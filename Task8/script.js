function generateFibonacci() {
    const num = parseInt(document.getElementById('numInput').value);

    let fibonacci = [0, 1];

    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    let reversedFibonacci = fibonacci.reverse();

    document.getElementById('fibonacciSeries').textContent = reversedFibonacci.join(', ');
}
