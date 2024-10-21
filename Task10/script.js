function sortArray() {

    let arrayInput = document.getElementById('arrayInput').value;
    
    let array = arrayInput.split(',').map(Number);
    
    if (array.some(isNaN)) {
        document.getElementById('sortedArray').textContent = "Invalid input. Please enter valid numbers separated by commas.";
        return;
    }
    
    array.sort(function(a, b) {
        return b - a; 
    });

    document.getElementById('sortedArray').textContent = array.join(', ');
}
