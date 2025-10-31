// script.js for Personal Finance Dashboard

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('expense-name').value.trim();
    const amount = document.getElementById('expense-amount').value.trim();

    if (name && amount) {
        addExpense(name, parseFloat(amount).toFixed(2));
        document.getElementById('expense-form').reset();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expenses');
    const newExpense = document.createElement('div');
    newExpense.classList.add('expense-item');
    newExpense.innerHTML = `<span>${name}</span><span>$${amount}</span>`;
    expenseList.appendChild(newExpense);
}