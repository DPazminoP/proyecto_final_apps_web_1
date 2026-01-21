
//clase producto
class Producto{
    constructor(id, nombre, precio, emoji){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.emoji=emoji;
    }
}

//Declarar un arreglo de productos
const productos=[
    new Producto(1,"Estrella Brillante Mini",25,"🌟"),
    new Producto(2,"Reno de Fieltro PequeñoMouse",12,"🦌"),
    new Producto(3,"Bola Navideña Escarchada",125,"🪩"),
    new Producto(4,"Muñeco de Nieve de Madera",20,"⛄​"),
    new Producto(5,"Ángel Sonriente Miniatura",35,"👼🏻"),
    new Producto(5,"Papá Noel Artesanal Grande",35,"🎅🏻"),
    new Producto(5,"Copo de Nieve Gigante",35,"❄️"),
    new Producto(5,"Bastón de Caramelo XL",35,"🍬"),
    new Producto(5,"Guirnalda con Piñas",35,"🍍"),
    new Producto(5,"Campana Navideña de Tela",35,"🔔"),
    new Producto(5,"Muérdago Encantado",35,"👏🌿"),
    new Producto(5,"Media Navideña de Patchwork",35,"🧦"),
    new Producto(5,"Pequeña Corona de Rama",35,"👑🌿"),
    new Producto(5,"Campanitas de Cascabel",35,"🎐"),
    new Producto(5,"Corazón Navideño Colgante",35,"🩷")
];

let carrito=[];

const estante=document.getElementById("catalogo-estantes");
const listaCarrito=document.getElementById("lista-carrito");
const precioTotal=document.getElementById("total/precio");

//Cargar los productos al catalogo
const cargarCatalogo= () =>{
    productos.forEach(p=>{
        const div=document.createElement('div');
        div.classList.add('tarjeta');
        div.innerHTML=`
        <h2>${p.emoji}</h2>
        <h3>${p.nombre}</h3>
        <p>${p.precio}</p>
        <button onclick="agregarCarrito(${p.id})">Agregar</button>
        `;

        estante.appendChild(div);
    })
}

//Agregar productos al carrito
const agregarCarrito=(id)=>{
    const productoEncontrado = productos.find(p=> p.id===id);
    carrito.push(productoEncontrado);
    actualizarCarrito();
}

//Actualizar la vista del carrito
const actualizarCarrito=()=>{
    listaCarrito.innerHTML="";
    let sumaTotal=0;
    carrito.forEach((p, index)=>{
        sumaTotal += p.precio;
        const li=document.createElement("li");
        li.innerHTML=`
        ${p.nombre}-${p.precio}
        <button style="background:red" onclick="eliminarProducto(${index})">X</button>
        `;
        listaCarrito.appendChild(li);
    });
    precioTotal.innerText=sumaTotal;
}

//Eliminar productos del carrito
const eliminarProducto=(indice)=>{
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//Vaciar el carrito
const vaciarCarrito= () =>{
    carrito=[];
    actualizarCarrito();
}

cargarCatalogo();