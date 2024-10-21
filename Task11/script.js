function removeDuplicates() {

    const arrayInput = document.getElementById('arrayInput').value;
    
    const array = arrayInput.split(',').map(item => item.trim());
    
    const uniqueArray = [...new Set(array)];
    
    document.getElementById('uniqueElements').textContent = uniqueArray.join(', ');
}
