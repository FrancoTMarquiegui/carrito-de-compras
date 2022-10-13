const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


const productos = [
  {
    id: 1,
    nombre: "Harina",
    precio: 50,
    img: "https://media.istockphoto.com/photos/flour-in-a-bag-on-the-table-and-spikelets-picture-id484679158?b=1&k=20&m=484679158&s=612x612&w=0&h=FiRQKMNi-Oe3JToMdahxKuChxHgnrLVwVHsqCFjzwWo=",
    cantidad: 1,
    
  },
  {
    id: 2,
    nombre: "Galletitas",
    precio: 100,
    img:"https://images7.alphacoders.com/407/thumb-1920-407154.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Cervezas",
    precio: 150,
    img: "https://thumbs.dreamstime.com/b/una-botella-de-cerveza-lager-heineken-sobre-fondo-gradiente-verde-estpetersburg-rusia-febrero-180584485.jpg",
    cantidad: 1,
  },
];

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p class="price">${product.precio} $</p>
  
  `;

  shopContent.append(content);

   let comprar = document.createElement("button");
   comprar.innerText = "shop";
   comprar.className = "shop";

   content.append(comprar);

   comprar.addEventListener("click", () => {

    const repeat= carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
      carrito.map((prod) => {
        if(prod.id === product.id){
          prod.cantidad++;
        }
      });
    }else{
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,

      });
    };
    console.log(carrito);
    carritoCounter();
   });
    
});

