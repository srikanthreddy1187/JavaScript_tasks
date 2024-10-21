// Loan Object
const loan = {
    loanAmount: 0,
    interestRate: 0,
    loanTerm: 0,  // Loan term in years
    monthlyEMI: 0,
    totalPaymentsMade: 0,  // Track EMIs paid
  
    // Method to calculate monthly payment (EMI)
    calculateMonthlyPayment: function() {
      const principal = this.loanAmount;
      const annualInterestRate = this.interestRate / 100;
      const monthlyInterestRate = annualInterestRate / 12;
      const numberOfMonths = this.loanTerm * 12;
  
      // EMI calculation using formula: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
      this.monthlyEMI = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
  
      return this.monthlyEMI.toFixed(2);  // Return EMI rounded to 2 decimal places
    },
  
    // Method to check loan status (remaining loan amount and EMIs paid)
    checkLoanStatus: function() {
      const numberOfMonths = this.loanTerm * 12;
      const totalPaid = this.totalPaymentsMade * this.monthlyEMI;
      const remainingAmount = (numberOfMonths - this.totalPaymentsMade) * this.monthlyEMI;
      
      return {
        totalPaid: totalPaid.toFixed(2),
        remainingAmount: remainingAmount.toFixed(2),
        totalEMIsPaid: this.totalPaymentsMade,
        remainingEMIs: numberOfMonths - this.totalPaymentsMade
      };
    }
  };
  
  function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);
  
    loan.loanAmount = loanAmount;
    loan.interestRate = interestRate;
    loan.loanTerm = loanTerm;
  
    const emi = loan.calculateMonthlyPayment();
    document.getElementById("emi").textContent = `$${emi}`;
  }
  
  function checkLoanStatus() {
    const emiStatus = loan.checkLoanStatus();
  
    const statusMessage = `Total EMIs Paid: ${emiStatus.totalEMIsPaid}, Remaining EMIs: ${emiStatus.remainingEMIs}, 
                           Total Paid: $${emiStatus.totalPaid}, Remaining Loan Amount: $${emiStatus.remainingAmount}`;
    document.getElementById("loanStatus").textContent = statusMessage;
  }
  