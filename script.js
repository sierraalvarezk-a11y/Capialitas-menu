function agregarProducto(nombre) {
  const productoDiv = event.target.parentElement;
  const checkboxes = productoDiv.querySelectorAll('input[type="checkbox"]');
  const ingredientes = [];
  checkboxes.forEach(cb => {
    if (cb.checked) ingredientes.push(cb.value);
  });

  const carrito = document.getElementById('carrito');
  const li = document.createElement('li');
  li.textContent = nombre + " con: " + (ingredientes.length ? ingredientes.join(', ') : "ninguno");
  carrito.appendChild(li);
}
