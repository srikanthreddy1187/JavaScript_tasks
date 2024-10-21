function actualPrice() {
    const costPrice = document.getElementById("costPrice").value;
    const discountRate = 0.20; 
  
    const discountAmount = costPrice * discountRate;
  
    const sellingPrice = costPrice - discountAmount;
  
    document.getElementById("sellingPrice").textContent = sellingPrice.toFixed(2);
  }
  