const productos = [
    { 
    categoria: "Pizza",  
    id: 1,
    nombre: "Americana" ,
    precio: 1500,
    ingredientes: "Salsa, queso mozzarella, queso cheddar, panceta crocante",
    },

    { 
    categoria: "Pizza", 
    id: 2,
    nombre: "Palmitos" ,
    precio: 1350,
    ingrendientes: "salsa, queso mozarella, palmitos, salsa golf",
    },

    { 
    categoria: "Pizza", 
    id: 3,
    nombre: "Champiñones" ,
    precio: 1400,
    ingredientes: "salsa, queso mozzarella, champiñones, olivas negras",
    },

    { 
    categoria: "Pizza",  
    id: 4,
    nombre: "Tropical", 
    precio: 1400,
    ingredientes: "salsa, queso mozzarella, jamon crudo, rodajas de anana y salsa golf", 
    }, 

    { 
    categoria: "Pizza",  
    id: 5,
    nombre: "Calabreza" ,
    precio: 1450,
    ingredientes: "salsa, morrones, mozzarella, cantinpalo, aceitunas verdes",
    } ,

    { 
    categoria: "Pizza", 
    id: 6,
    nombre: "Especial de la Casa",
    precio: 1600,
    ingredientes: "salsa, mozzarella, tomates en rodajas, huevo duro, olivas negras y oregano",
    },

    { 
    categoria: "Pizza", 
    id: 7,
    nombre: "A caballo", 
    precio: 1500,
    ingredientes: "salsa, mozzarella, jamon cocido, papas y huevo a la chapa",
    },
]; 
    const idImpares = productos.filter ( (producto) => {
        return producto.id % 2 === 1;
       
    });

    idImpares.forEach ( (producto) => {
        console.log(`El producto ${producto.nombre} tiene id impar`) 
    }); 


const productoMenorA = (precio) => {
    return productos.some ( (producto) => {
        return producto.precio < precio; 
    }) 
    ? console.log("Si")
    :console.log("No");
}; 



const filtrarNombreConPrecio = (precio) => {
    const productosFiltrados = productos.filter ((producto) => {
        return producto.precio < precio; 
    }); 
    return productosFiltrados; 
}; 

console.log(filtrarNombreConPrecio (600));

