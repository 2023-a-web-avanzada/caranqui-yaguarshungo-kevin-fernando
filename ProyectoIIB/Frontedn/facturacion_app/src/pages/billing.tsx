import { useState } from 'react';

const Billing = () => {
  const [customerName, setCustomerName] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      customerName,
      invoiceAmount,
    };

    fetch('/api/createInvoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
            alert('Factura creada exitosamente!');
            setCustomerName('');
            setInvoiceAmount('');
        } else {
            response.json().then((data) => {
                alert(`Error al crear la factura: ${data.message}`);
            });
        }
      })
      .catch((error) => {
        console.error('Error al crear la factura:', error);
      });
  };

  return (
    <div>
      <h1>Crear Factura</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="customerName">Nombre del Cliente:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="invoiceAmount">Monto de la Factura:</label>
          <input
            type="number"
            id="invoiceAmount"
            value={invoiceAmount}
            onChange={(e) => setInvoiceAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Factura</button>
      </form>
    </div>
  );
};

export default Billing;
