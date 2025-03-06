const PRODUCTS = [
  {
    id: 1,
    nombre: 'Camiseta básica',
    precio: 15.99,
    categoria: 'Ropa',
    img: 'https://todocofrade.com/wp-content/uploads/2019/11/106-34.png'
  },
  {
    id: 2,
    nombre: 'Pantalón vaquero',
    precio: 29.99,
    categoria: 'Ropa',
    img: 'https://www.motosdakar.es/wp-content/uploads/2021/07/TEJANO-II-LADY-1.png'
  },
  {
    id: 3,
    nombre: 'Zapatillas deportivas',
    precio: 49.99,
    categoria: 'Calzado',
    img: 'https://media.glamour.es/photos/620735b5a900247a2b721bdd/master/w_1600%2Cc_limit/765968.png'
  },
  {
    id: 4,
    nombre: 'Teléfono móvil',
    precio: 299.99,
    categoria: 'Tecnología',
    img: 'https://cdn.phonehouse.es/res_static/cmsmaker/D6EE2F8339BEC9E0EFD1B9F4756E2045.jpg?auto=format'
  },
  {
    id: 5,
    nombre: 'Auriculares inalámbricos',
    precio: 79.99,
    categoria: 'Tecnología',
    img: 'https://shop.jvc.es/wp-content/uploads/2022/09/JVC_HA-A9T-B_Earbud.png'
  }
]

// Obtener carrito desde localStorage o crear uno vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

// 🛒 Función para imprimir productos en la página
const printProductsContent = (products) => {
  const divContent = document.querySelector('.content')
  divContent.innerHTML = ''

  for (const product of products) {
    const div = document.createElement('div')
    const name = document.createElement('h3')
    const price = document.createElement('p')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const cart = document.createElement('img')

    name.textContent = product.nombre
    price.textContent = `$${product.precio}`
    img.src = product.img
    divImg.classList.add('div-img')
    div.classList.add('product')
    cart.classList.add('cart-img')
    cart.src = 'https://cdn-icons-png.flaticon.com/512/5465/5465858.png'

    // Añadir evento para agregar al carrito
    cart.addEventListener('click', () => addToCart(product))

    div.append(cart)
    div.append(name)
    div.append(divImg)
    div.append(price)
    divImg.append(img)
    divContent.append(div)
  }
}

printProductsContent(PRODUCTS)

// 🛍️ Función para agregar productos al carrito
const addToCart = (product) => {
  let found = carrito.find((item) => item.id === product.id)

  if (found) {
    found.cantidad++
  } else {
    carrito.push({ ...product, cantidad: 1 })
  }

  updateCart()
}

// 🔄 Función para renderizar el carrito
const updateCart = () => {
  const cartDiv = document.querySelector('.cart-content')
  cartDiv.innerHTML = ''

  carrito.forEach((item, index) => {
    const div = document.createElement('div')
    div.classList.add('cart-item')
    div.innerHTML = `
      <p>${item.nombre} - $${item.precio} (x${item.cantidad})</p>
      <button class="sumar" data-index="${index}">➕</button>
      <button class="restar" data-index="${index}">➖</button>
      <button class="eliminar" data-index="${index}">❌</button>
    `

    cartDiv.appendChild(div)
  })

  // Guardar carrito en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

// 🗑️ Funcionalidad para sumar/restar/eliminar productos
document.querySelector('.cart-content').addEventListener('click', (e) => {
  const index = e.target.dataset.index

  if (e.target.classList.contains('sumar')) {
    carrito[index].cantidad++
  } else if (e.target.classList.contains('restar')) {
    carrito[index].cantidad--
    if (carrito[index].cantidad === 0) {
      carrito.splice(index, 1) // Eliminar si la cantidad es 0
    }
  } else if (e.target.classList.contains('eliminar')) {
    carrito.splice(index, 1) // Eliminar producto
  }

  updateCart()
})

// Mostrar u ocultar carrito al hacer clic
document.querySelector('.carrito').addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('openned')
})

// Renderizar carrito al cargar la página
updateCart()
