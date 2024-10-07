// Select DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpenseDisplay = document.getElementById('total-expense');

let totalExpense = 0;

// Event listener for the form submission
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Add expense to the list
    addExpense(description, amount);

    // Reset form fields
    expenseForm.reset();
});

// Function to add expense
function addExpense(description, amount) {
    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = `${description}: ₹${amount}`;

    // Add to expense list
    expenseList.appendChild(listItem);

    // Update total expense
    totalExpense += amount;
    updateTotalExpense();
}

// Function to update total expense display
function updateTotalExpense() {
    totalExpenseDisplay.textContent = `Total Expense: ₹${totalExpense.toFixed(2)}`;
}
