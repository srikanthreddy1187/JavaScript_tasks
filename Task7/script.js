
function checkEligibility() {
    const studentName = document.getElementById("studentName").value;
    const gpa = parseFloat(document.getElementById("gpa").value);
    
    if (gpa >= 7.5) {
      document.getElementById("status").textContent = `${studentName} is eligible for a scholarship!`;
    } else {
      document.getElementById("status").textContent = `${studentName} is not eligible for a scholarship.`;
    }
  }
  