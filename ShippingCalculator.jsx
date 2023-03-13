import React, { useState } from 'react';

function ShippingCalculator() {
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [cost, setCost] = useState(0);

  function handleFormSubmit(event) {
    event.preventDefault();
    // Realiza el cálculo del costo de envío aquí utilizando la información del formulario, incluyendo el método de envío seleccionado.
    // Actualiza el estado con el costo resultante.
    setCost(10.0);
  }

  return (
    <div>
      <h1>Calculadora de envíos</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Peso:
          <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
        <label>
          Destino:
          <input type="text" value={destination} onChange={(event) => setDestination(event.target.value)} />
        </label>
        <label>
          Selecciona categoria:
          <select value={shippingMethod} onChange={(event) => setShippingMethod(event.target.value)}>
            <option value="5.0">Notebook ($5.0)</option>
            <option value="10.0">Camaras ($10.0)</option>
            <option value="15.0">Auriculares ($15.0)</option>
            <option value="20.0">Smartphone ($20.0)</option>
            <option value="25.0">Perifericos ($25.0)</option>
          </select>
        </label>
        <button type="submit">Calcular costo de envío</button>
      </form>
      <ShippingCost cost={cost} />
    </div>
  );
}

function ShippingCost(props) {
  return (
    <div>
      <h2>Costo de envío:</h2>
      <p>{props.cost}</p>
    </div>
  );
}

export default ShippingCalculator;

