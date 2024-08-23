function calculate() {
    // Get values from the form
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanDuration = parseFloat(document.getElementById('loanDuration').value) * 12; // Convert years to months

    // Calculate monthly savings
    const monthlySavings = income - expenses;

    // Loan repayment calculations
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));

    // Calculate total loan repayment
    const totalRepayment = monthlyPayment * loanDuration;

    // Calculate the savings plan
    let resultText = `<h3>Savings Plan Result</h3>
                      <p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>
                      <p>Monthly Loan Payment: $${monthlyPayment.toFixed(2)}</p>
                      <p>Total Loan Repayment: $${totalRepayment.toFixed(2)}</p>`;

    // Determine if savings are sufficient
    if (monthlySavings > monthlyPayment) {
        resultText += `<p>Your savings are sufficient to cover your loan payments. Great job!</p>`;
    } else {
        resultText += `<p>Your savings are not sufficient to cover your loan payments. Consider reducing expenses or finding additional income sources.</p>`;
    }

    // Display the result
    document.getElementById('result').innerHTML = resultText;
}
