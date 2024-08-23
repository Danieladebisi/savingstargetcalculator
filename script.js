function calculateSavings() {
    // Get input values for both goals
    const goalAmount1 = document.getElementById('goalAmount1').value;
    const currentSavings1 = document.getElementById('currentSavings1').value;
    const goalAmount2 = document.getElementById('goalAmount2').value;
    const currentSavings2 = document.getElementById('currentSavings2').value;
    const monthlyIncome = document.getElementById('monthlyIncome').value;
    const monthlyExpenses = document.getElementById('monthlyExpenses').value;
    const interestRate = document.getElementById('interestRate').value || 0;
    const timeframe = document.getElementById('timeframe').value;

    // Validate inputs
    if (!goalAmount1 || !currentSavings1 || !goalAmount2 || !currentSavings2 || !monthlyIncome || !monthlyExpenses || !timeframe || goalAmount1 <= 0 || currentSavings1 < 0 || goalAmount2 <= 0 || currentSavings2 < 0 || monthlyIncome <= 0 || monthlyExpenses < 0 || timeframe <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Calculate remaining amounts needed for both goals
    const remainingAmount1 = goalAmount1 - currentSavings1;
    const remainingAmount2 = goalAmount2 - currentSavings2;

    // Calculate available savings per month after expenses
    const availableSavings = monthlyIncome - monthlyExpenses;

    // Calculate monthly savings needed for both goals
    const monthlySavingsGoal1 = remainingAmount1 / timeframe;
    const monthlySavingsGoal2 = remainingAmount2 / timeframe;

    // Calculate the total monthly savings needed
    const totalMonthlySavings = monthlySavingsGoal1 + monthlySavingsGoal2;

    // Adjust savings with interest rate if provided
    const monthlyInterestRate = (interestRate / 100) / 12;
    const adjustedMonthlySavingsGoal1 = monthlyInterestRate > 0 ? (monthlySavingsGoal1 * (1 + monthlyInterestRate)) : monthlySavingsGoal1;
    const adjustedMonthlySavingsGoal2 = monthlyInterestRate > 0 ? (monthlySavingsGoal2 * (1 + monthlyInterestRate)) : monthlySavingsGoal2;

    // Generate the savings plan report
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>Savings Plan Report</h3>
        <p>Goal 1 (Car): You need to save <strong>$${adjustedMonthlySavingsGoal1.toFixed(2)}</strong> per month.</p>
        <p>Goal 2 (House): You need to save <strong>$${adjustedMonthlySavingsGoal2.toFixed(2)}</strong> per month.</p>
        <p>Total Monthly Savings Needed: <strong>$${totalMonthlySavings.toFixed(2)}</strong></p>
        <p>Available Monthly Savings (after expenses): <strong>$${availableSavings.toFixed(2)}</strong></p>
        ${availableSavings >= totalMonthlySavings ? '<p>You are on track to reach your goals!</p>' : '<p>You need to adjust your expenses or timeframe to reach your goals.</p>'}
    `;
}
