const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');
const emptyMsg = document.getElementById('emptyMsg');
let orderId = 1;

// Escucha el clic del botón y dispara el flujo completo
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Agrega el pedido al DOM con estado inicial "En Proceso"
function addOrder(order) {
    emptyMsg.style.display = 'none';

    const li = document.createElement('li');
    li.id = `order-${order.id}`;
    li.classList.add('en-proceso');

    li.innerHTML = `
        <span class="order-label">Pedido #${order.id}</span>
        <span class="order-status">En Proceso</span>
    `;

    orderList.appendChild(li);
}

// Actualiza visualmente el estado del pedido en el DOM
function updateOrderStatus(order, status, prepTime) {
    const li = document.getElementById(`order-${order.id}`);
    if (!li) return;

    li.classList.remove('en-proceso');
    li.classList.add('completado');

    li.innerHTML = `
        <span class="order-label">Pedido #${order.id}</span>
        <span>
            <span class="order-status">Completado</span>
            <span class="order-time">preparado en ${(prepTime / 1000).toFixed(1)}s</span>
        </span>
    `;
}
