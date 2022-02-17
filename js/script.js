function checkError(inputField) {
    const input = document.getElementById(inputField).value;
    if (parseFloat(input) < 0) {
        document.getElementById('negative-val-error').style.display = 'block';
    }
    else if (isNaN(input) == true) {
        document.getElementById('number-error-text').style.display = 'block';
    }
}

// function numberTypeCheck(inputField) {
//     const input = document.getElementById(inputField).value;
//     if (isNaN(input) == true) {
//         document.getElementById('number-error-text').style.display = 'block';
//     }
// }

function extractIncome() {
    const incomeInput = document.getElementById('income-input');
    // numberTypeCheck('income-input');
    checkError('income-input');
    const income = parseFloat(incomeInput.value);
    return income;
}


function calculateBalance() {
    const income = extractIncome();
    const foodInput = document.getElementById('food-input');
    // numberTypeCheck('food-input');
    checkError('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    // numberTypeCheck('rent-input');
    checkError('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    // numberTypeCheck('clothes-input');
    checkError('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);

    const totalExpenses = foodCost + rentCost + clothesCost;
    if (totalExpenses > income) {
        document.getElementById('expense-income').style.display = 'block';
    }
    const totalExpensesText = document.getElementById('total-expenses');
    totalExpensesText.innerText = totalExpenses;
    const balance = income - totalExpenses;
    const balanceText = document.getElementById('balance');
    balanceText.innerText = balance;
}

function calculateRemainingBalance() {
    const income = extractIncome();
    const saveInput = document.getElementById('save-input');
    // numberTypeCheck('save-input');
    checkError('save-input');
    const save = parseFloat(saveInput.value);
    const savingAmount = income * (save / 100);
    const savingAmountText = document.getElementById('saving-amount');
    const balance = parseFloat(document.getElementById('balance').innerText);
    if (savingAmount > balance) {
        document.getElementById('save-less').style.display = 'block';
    }
    savingAmountText.innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    const remainingBalanceText = document.getElementById('remaining-balance');
    remainingBalanceText.innerText = remainingBalance;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    calculateBalance();
});

document.getElementById('save-btn').addEventListener('click', function () {
    calculateRemainingBalance();
});