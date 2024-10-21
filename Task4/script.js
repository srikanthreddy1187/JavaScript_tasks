// Bank Account Object
const bankAccount = {
    accountNumber: "1234567890",
    accountHolderName: "John Doe",
    balance: 0,
  
    // Method to deposit amount
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += parseFloat(amount);
        alert(`Deposited: $${amount}`);
      } else {
        alert("Please enter a valid amount to deposit.");
      }
    },
  
    // Method to withdraw amount
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= parseFloat(amount);
        alert(`Withdrawn: $${amount}`);
      } else if (amount > this.balance) {
        alert("Insufficient balance.");
      } else {
        alert("Please enter a valid amount to withdraw.");
      }
    },
  
    // Method to check balance
    checkBalance: function() {
      return this.balance;
    }
  };
  
  // Function to deposit
  function deposit() {
    const amount = document.getElementById("amount").value;
    bankAccount.deposit(amount);
    updateBalance();
  }
  
  function withdraw() {
    const amount = document.getElementById("amount").value;
    bankAccount.withdraw(amount);
    updateBalance();
  }
  
  function checkBalance() {
    alert(`Current Balance: $${bankAccount.checkBalance()}`);
    updateBalance();
  }
  
  function updateBalance() {
    document.getElementById("balance").textContent = bankAccount.checkBalance().toFixed(2);
  }
  