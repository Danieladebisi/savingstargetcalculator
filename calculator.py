import streamlit as st

# Income and Expense Inputs
st.title("Savings Target Calculator")

# Monthly/Annual Income Entry
st.header("Income and Expenses")
monthly_income = st.number_input("Enter your monthly income", min_value=0.0, step=100.0)
annual_income = monthly_income * 12

# Detailed Expense Categorization
housing_expense = st.number_input("Enter your monthly housing expense", min_value=0.0, step=50.0)
utilities_expense = st.number_input("Enter your monthly utilities expense", min_value=0.0, step=50.0)
debt_payments = st.number_input("Enter your monthly debt payments", min_value=0.0, step=50.0)
other_expenses = st.number_input("Enter your other monthly expenses", min_value=0.0, step=50.0)

total_expenses = housing_expense + utilities_expense + debt_payments + other_expenses
savings = monthly_income - total_expenses

# Existing Loans and Savings Input
existing_savings = st.number_input("Enter your current savings", min_value=0.0, step=100.0)
existing_loans = st.number_input("Enter your existing loans", min_value=0.0, step=100.0)

# Car and House Price Inputs
st.header("Car and House Price")
desired_car_price = st.number_input("Enter the price of the car you want", min_value=0.0, step=500.0)
desired_house_price = st.number_input("Enter the price of the house you want", min_value=0.0, step=1000.0)

# Loan Calculator with Adjustable Interest Rates, Loan Terms, and Down Payments
st.header("Loan Calculator")
interest_rate = st.number_input("Enter the loan interest rate (in %)", min_value=0.0, step=0.1)
loan_term = st.number_input("Enter the loan term (in years)", min_value=1, step=1)
down_payment_percentage = st.number_input("Enter the down payment percentage", min_value=0.0, step=0.1)

# Calculating Necessary Income for Desired Car/House
loan_term_months = loan_term * 12
car_down_payment = desired_car_price * (down_payment_percentage / 100)
house_down_payment = desired_house_price * (down_payment_percentage / 100)

car_loan_amount = desired_car_price - car_down_payment
house_loan_amount = desired_house_price - house_down_payment

monthly_car_payment = car_loan_amount * (interest_rate / 100 / 12) / (1 - (1 + interest_rate / 100 / 12) ** -loan_term_months)
monthly_house_payment = house_loan_amount * (interest_rate / 100 / 12) / (1 - (1 + interest_rate / 100 / 12) ** -loan_term_months)

necessary_income_for_car = (monthly_car_payment + total_expenses) / savings
necessary_income_for_house = (monthly_house_payment + total_expenses) / savings

# Savings Goal Tracker
st.header("Savings Goal Tracker")
car_savings_goal = desired_car_price - existing_savings
house_savings_goal = desired_house_price - existing_savings

car_savings_progress = (existing_savings / desired_car_price) * 100
house_savings_progress = (existing_savings / desired_house_price) * 100

st.write(f"Your savings progress for the car: {car_savings_progress:.2f}%")
st.write(f"Your savings progress for the house: {house_savings_progress:.2f}%")

# Results and Recommendations
st.header("Results and Recommendations")

st.write(f"To afford the car, you need to save: ${car_savings_goal:.2f}")
st.write(f"To afford the house, you need to save: ${house_savings_goal:.2f}")

st.write(f"Your necessary income to afford the car is: ${necessary_income_for_car:.2f}")
st.write(f"Your necessary income to afford the house is: ${necessary_income_for_house:.2f}")

if car_savings_goal > savings:
    st.write("Recommendation: Increase your savings or reduce expenses to afford the car.")
if house_savings_goal > savings:
    st.write("Recommendation: Increase your savings or reduce expenses to afford the house.")

# Additional Tools
st.header("Additional Tools")

# Mortgage Calculator
st.subheader("Mortgage Calculator")
mortgage_amount = st.number_input("Enter the mortgage amount", min_value=0.0, step=1000.0)
mortgage_term = st.number_input("Enter the mortgage term (in years)", min_value=1, step=1)
mortgage_rate = st.number_input("Enter the mortgage interest rate (in %)", min_value=0.0, step=0.1)

mortgage_monthly_payment = mortgage_amount * (mortgage_rate / 100 / 12) / (1 - (1 + mortgage_rate / 100 / 12) ** -(mortgage_term * 12))
st.write(f"Your monthly mortgage payment will be: ${mortgage_monthly_payment:.2f}")

# Debt-to-Income (DTI) Ratio Calculator
st.subheader("Debt-to-Income (DTI) Ratio Calculator")
monthly_debt_payments = st.number_input("Enter your monthly debt payments", min_value=0.0, step=100.0)

dti_ratio = (monthly_debt_payments / monthly_income) * 100
st.write(f"Your Debt-to-Income (DTI) ratio is: {dti_ratio:.2f}%")

# Budget Plan
st.subheader("Budget Plan")
budget_plan = monthly_income - total_expenses - existing_loans
st.write(f"Your remaining budget after expenses and loans: ${budget_plan:.2f}")
