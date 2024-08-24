document.getElementById("loan").addEventListener("change", function () {
    const loanDetails = document.getElementById("loan-details");
    if (this.value === "yes") {
        loanDetails.style.display = "block";
    } else {
        loanDetails.style.display = "none";
    }
});

document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const goalPrice = parseFloat(document.getElementById("goal-price").value);
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const loan = document.getElementById("loan").value;

    let loanAmount = 0, interestRate = 0, loanTerm = 0, monthlyLoanPayment = 0, totalLoanRepayment = 0;

    if (loan === "yes") {
        loanAmount = parseFloat(document.getElementById("loan-amount").value);
        interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
        loanTerm = parseFloat(document.getElementById("loan-term").value);

        monthlyLoanPayment = (loanAmount * interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -loanTerm));
        totalLoanRepayment = monthlyLoanPayment * loanTerm;
    }

    const monthlySavings = income - expenses - monthlyLoanPayment;
    const monthsToSave = Math.ceil(goalPrice / monthlySavings);

    document.getElementById("monthly-savings").textContent = `Monthly Savings: $${monthlySavings.toFixed(2)}`;
    document.getElementById("monthly-loan-payment").textContent = loan === "yes" ? `Monthly Loan Payment: $${monthlyLoanPayment.toFixed(2)}` : "";
    document.getElementById("total-loan-repayment").textContent = loan === "yes" ? `Total Loan Repayment: $${totalLoanRepayment.toFixed(2)}` : "";
    document.getElementById("final-message").textContent = `You need to save for ${monthsToSave} months to achieve your goal.`;

    document.getElementById("result").style.display = "block";
});
