function calculateSalary() {
    const payScale = 25000;  
    const deductions = document.getElementById("deductions").value;
  
    const finalSalary = payScale - deductions;
  
    document.getElementById("salary").textContent = finalSalary;
  }
  