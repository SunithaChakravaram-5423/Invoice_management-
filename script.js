function addItem() {
  const container = document.getElementById('itemsContainer');
  const row = document.createElement('div');
  row.className = 'item-row';
  row.innerHTML = `
    <input type="text" placeholder="Description" name="description[]" required />
    <input type="number" placeholder="Qty" name="quantity[]" min="1" required />
    <input type="number" placeholder="Unit Price" name="unitPrice[]" step="0.01" required />
  `;
  container.appendChild(row);
}

// You can later add form submit handling here
document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Invoice saved (just frontend for now)!");
});
