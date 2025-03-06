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
  },
  {
    id: 6,
    nombre: 'Libro de ficción',
    precio: 12.5,
    categoria: 'Libros',
    img: 'https://aliarediciones.es/wp-content/uploads/2019/07/Camino-entre-realidad-y-ficci%C3%B3n-600x600.png'
  },
  {
    id: 7,
    nombre: 'Reloj de pulsera',
    precio: 99.5,
    categoria: 'Accesorios',
    img: 'https://www.navigil.com/wp-content/uploads/2019/05/5.png'
  },
  {
    id: 8,
    nombre: 'Mochila escolar',
    precio: 24.99,
    categoria: 'Accesorios',
    img: 'https://kitstore.s8.cdn-upgates.com/_cache/d/8/d819390a04b4da3bc8d8b60e413eeafe-20214-2202.png'
  },
  {
    id: 9,
    nombre: 'Lámpara de escritorio',
    precio: 34.99,
    categoria: 'Hogar',
    img: 'https://www.fluxs.es/wp-content/uploads/2021/11/Lampara-de-escritorio-LED-con-cargador-inalambrico-VELA.png'
  },
  {
    id: 10,
    nombre: 'Set de utensilios de cocina',
    precio: 39.99,
    categoria: 'Hogar',
    img: 'https://www.bastilipo.com/wp-content/uploads/2018/12/Basilea.MAIN_.png.webp'
  }
]

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
    price.textContent = product.precio
    img.src = product.img
    divImg.classList.add('div-img')
    div.classList.add('product')
    cart.classList.add('cart-img')
    cart.src = 'https://cdn-icons-png.flaticon.com/512/5465/5465858.png'

    div.append(cart)
    div.append(name)
    div.append(divImg)
    div.append(price)
    divImg.append(img)
    divContent.append(div)
  }
}

printProductsContent(PRODUCTS)

const carrito = document.querySelector('.carrito')

carrito.addEventListener('click', () => {
  const cartDiv = document.querySelector('.cart')

  cartDiv.classList.toggle('openned')
})
