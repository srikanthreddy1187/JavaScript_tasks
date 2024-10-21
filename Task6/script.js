// Loan object constructor
function Loan(applicantName, monthlyIncome, accountBalance, loanAmount) {
    this.applicantName = applicantName;
    this.monthlyIncome = monthlyIncome;
    this.accountBalance = accountBalance;
    this.loanAmount = loanAmount;
    this.status = "Pending";  // Default status for a new loan application
  }
  
  // LoanManager object to manage multiple loans
  const LoanManager = {
    loans: [],  // List to store multiple loan applications
  
    // Method to apply for a loan
    applyLoan: function(applicantName, monthlyIncome, accountBalance, loanAmount) {
      const newLoan = new Loan(applicantName, monthlyIncome, accountBalance, loanAmount);
      const loanStatus = this.evaluateLoan(newLoan);  // Evaluate loan for approval/rejection
      newLoan.status = loanStatus;
      this.loans.push(newLoan);  // Add the new loan to the loans array
      return loanStatus;
    },
  
    // Method to evaluate loan eligibility criteria
    evaluateLoan: function(loan) {
      const minimumIncome = 30000;  // Minimum required monthly income
      const minimumBalance = 10000; // Minimum account balance
  
      if (loan.monthlyIncome >= minimumIncome && loan.accountBalance >= minimumBalance) {
        return "Approved";
      } else {
        return "Rejected";
      }
    },
  
    getLoans: function() {
      return this.loans;
    }
  };
  
  function applyLoan() {
    const applicantName = document.getElementById("applicantName").value;
    const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    const accountBalance = parseFloat(document.getElementById("accountBalance").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  
    const loanStatus = LoanManager.applyLoan(applicantName, monthlyIncome, accountBalance, loanAmount);
    
    document.getElementById("loanStatus").textContent = `Loan ${loanStatus} for ${applicantName}`;
  }
  