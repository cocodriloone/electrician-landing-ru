const calculateBtn = document.getElementById('calculateBtn');
const calcResult = document.getElementById('calcResult');

if (calculateBtn && calcResult) {
  calculateBtn.addEventListener('click', () => {
    const jobType = document.getElementById('jobType').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10) || 1;
    const urgency = document.getElementById('urgency').value;
    const zone = document.getElementById('zone').value;

    const basePrices = {
      diagnostics: 40,
      socket: 15,
      lighting: 25,
      panel: 35,
      appliance: 30,
      wiring: 45
    };

    let base = basePrices[jobType] || 20;
    let subtotal = base * quantity;

    if (urgency === 'soon') subtotal *= 1.15;
    if (urgency === 'urgent') subtotal *= 1.35;

    if (zone === 'near') subtotal += 10;
    if (zone === 'far') subtotal += 25;

    const min = Math.round(subtotal * 0.9);
    const max = Math.round(subtotal * 1.2);

    calcResult.innerHTML = `
      <h3>Предварительный ориентир</h3>
      <p><strong>${min}–${max} €</strong></p>
      <p>
        Это не финальная смета. Точная стоимость зависит от состояния объекта,
        доступа к точкам, фактического объёма работ и скрытых нюансов,
        которые не видны без уточнения или осмотра.
      </p>
    `;
  });
}
