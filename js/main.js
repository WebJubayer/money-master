// =========== validation check =========== 
function getValue (cost){
    const amountInput = document.getElementById(cost);
    const amountValue = parseFloat(amountInput.value);

    if (isNaN(amountValue)){
        document.getElementById('error-msg').style.display ='block';
        document.getElementById('error-msg-neg').style.display = 'none'
        console.log(click);
    }
    else if (amountValue < 0){
        document.getElementById('error-msg-neg').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
        console.log(click); 
    }
    else{
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('error-msg-neg').style.display = 'none';
        return amountValue;
    }
}
// ================== Remaining calculation ==============
function calculate(bigValue, smallValue){
    const remaining = bigValue - smallValue;
    return remaining;
}

// =============== Expense and Balance ================
function remain(){
    const foodAmount = getValue('food-input');
    const rentAmount = getValue('rent-input');
    const clotheAmount = getValue('clothe-input');

    const expenses = foodAmount + rentAmount + clotheAmount;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expenses;
    
    const incomeValue = getValue('income-input');
    if(incomeValue > expenses){
        document.getElementById('over-shopping').style.display = 'none';
        const remainingValue = calculate(incomeValue, expenses);
        return remainingValue;
    }
    else{
        document.getElementById('over-shopping').style.display = 'block';
        return 0;
    }
}
// ==== calculate button listener =========
document.getElementById('calculate-btn').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    balance.innerText = remain();
})






















