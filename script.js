document.getElementById('has-loan').addEventListener('change', function () {
    const loanSection = document.querySelector('.loan-section');
    if (this.value === 'yes') {
        loanSection.style.display = 'block';
    } else {
        loanSection.style.display = 'none';
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const housingExpense = parseFloat(document.getElementById('housing-expense').value);
    const utilitiesExpense = parseFloat(document.getElementById('utilities-expense').value);
    const debtPayments = parseFloat(document.getElementById('debt-payments').value);
    const otherExpenses = parseFloat(document.getElementById('other-expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const existingLoans = parseFloat(document.getElementById('existing-loans').value);
    
    const goal = document.getElementById('goal').value;
    const desiredPrice = parseFloat(document.getElementById('desired-price').value);
    const totalExpenses = housingExpense + utilitiesExpense + debtPayments + otherExpenses;

    let monthlySavings = income - totalExpenses;

    let loanPayment = 0;
    let totalLoanRepayment = 0;
    if (document.getElementById('has-loan').value === 'yes') {
        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
        const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12; // in months

        loanPayment = (loanAmount * interestRate / 12) /
