function checkError(inputField){
    const input = parseFloat(document.getElementById(inputField).value);
    // if(typeof input != 'number'){

    // }
}

function extractIncome(){
    const incomeInput = document.getElementById('income-input');
    // checkError('income-input');
    const income = parseFloat(incomeInput.value);
    return income;
}


function calculateBalance(){
    const income = extractIncome();
    const foodInput = document.getElementById('food-input');
    // checkError('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    // checkError('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    // checkError('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);

    const totalExpenses = foodCost + rentCost + clothesCost;
    // console.log(totalExpenses);
    const totalExpensesText = document.getElementById('total-expenses');
    totalExpensesText.innerText = totalExpenses;
    // if(totalExpenses > income){

    // }
    const balance = income - totalExpenses;
    const balanceText = document.getElementById('balance');
    balanceText.innerText = balance;
    
}

function calculateRemainingBalance(){
    const income = extractIncome();
    const saveInput = document.getElementById('save-input');
    // checkError('save-input');
    const save = parseFloat(saveInput.value);
    const savingAmount = income * (save / 100);
    const savingAmountText = document.getElementById('saving-amount');
    savingAmountText.innerText = savingAmount;
    const balance = parseFloat(document.getElementById('balance').innerText);
    const remainingBalance = balance - savingAmount;
    const remainingBalanceText = document.getElementById('remaining-balance');
    remainingBalanceText.innerText = remainingBalance;
}

document.getElementById('calc-btn').addEventListener('click', function(){
    calculateBalance();
});

document.getElementById('save-btn').addEventListener('click', function(){
    calculateRemainingBalance();
});