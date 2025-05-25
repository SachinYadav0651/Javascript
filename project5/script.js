let total = 0;

function addExpense() {
  const description = document.getElementById('description').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please enter valid description and amount!');
    return;
  }

  const list = document.getElementById('expense-list');
  const listItem = document.createElement('li');

  listItem.innerHTML = `
    ${description} - ₹${amount.toFixed(2)}
    <button onclick="removeExpense(this, ${amount})">🗑️</button>
  `;

  list.appendChild(listItem);

  total += amount;
  document.getElementById('total').textContent = total.toFixed(2);

  // Clear inputs
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}

function removeExpense(button, amount) {
  button.parentElement.remove();
  total -= amount;
  document.getElementById('total').textContent = total.toFixed(2);
}
