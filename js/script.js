// checking type error and negative number error
function checkError(inputField) {
    const input = document.getElementById(inputField).value;
    if (parseFloat(input) < 0) {
        document.getElementById('negative-val-error').style.display = 'block';
        document.getElementById('number-error-text').style.display = 'none';
        document.getElementById('empty-value-error').style.display = 'none';
        document.getElementById('expense-income').style.display = 'none';
        document.getElementById('save-less').style.display = 'none';
    }
    else if (isNaN(input) == true) {
        document.getElementById('number-error-text').style.display = 'block';
        document.getElementById('negative-val-error').style.display = 'none';
        document.getElementById('empty-value-error').style.display = 'none';
        document.getElementById('expense-income').style.display = 'none';
        document.getElementById('save-less').style.display = 'none';
    }
    else if (input == '') {
        document.getElementById('empty-value-error').style.display = 'block';
        document.getElementById('negative-val-error').style.display = 'none';
        document.getElementById('number-error-text').style.display = 'none';
        document.getElementById('expense-income').style.display = 'none';
        document.getElementById('save-less').style.display = 'none';
    }
}

// get income 
function extractIncome() {
    const incomeInput = document.getElementById('income-input');
    checkError('income-input');
    const income = parseFloat(incomeInput.value);
    return income;
}

// calculate total expenses and balance
function calculateBalance() {
    const income = extractIncome();
    const foodInput = document.getElementById('food-input');
    checkError('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    checkError('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    checkError('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    const totalExpenses = foodCost + rentCost + clothesCost;
    // showing error if total expenses are higher than income
    if (totalExpenses > income) {
        document.getElementById('expense-income').style.display = 'block';
        document.getElementById('negative-val-error').style.display = 'none';
        document.getElementById('number-error-text').style.display = 'none';
        document.getElementById('empty-value-error').style.display = 'none';
        document.getElementById('save-less').style.display = 'none';
    }
    const totalExpensesText = document.getElementById('total-expenses');
    totalExpensesText.innerText = totalExpenses;
    const balance = income - totalExpenses;
    const balanceText = document.getElementById('balance');
    balanceText.innerText = balance;
}

// calculate saving amount and remaining balance
function calculateRemainingBalance() {
    const income = extractIncome();
    const saveInput = document.getElementById('save-input');
    checkError('save-input');
    const save = parseFloat(saveInput.value);
    const savingAmount = income * (save / 100);
    const savingAmountText = document.getElementById('saving-amount');
    const balance = parseFloat(document.getElementById('balance').innerText);
    // showing error if saving amount is higher than current balance
    if (savingAmount > balance) {
        document.getElementById('save-less').style.display = 'block';
        document.getElementById('negative-val-error').style.display = 'none';
        document.getElementById('number-error-text').style.display = 'none';
        document.getElementById('empty-value-error').style.display = 'none';
        document.getElementById('expense-income').style.display = 'none';
    }
    savingAmountText.innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    const remainingBalanceText = document.getElementById('remaining-balance');
    remainingBalanceText.innerText = remainingBalance;
}

// calculate button event handler
document.getElementById('calc-btn').addEventListener('click', function () {
    calculateBalance();
});

// save button event handler
document.getElementById('save-btn').addEventListener('click', function () {
    calculateRemainingBalance();
});