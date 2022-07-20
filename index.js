const Pizzas = [

    {
        id: 1,
        nombre: "Muzzarela",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Aceitunas"],
        precio: 500,
    },
    
    {
        id: 2,
        nombre: "De Cancha",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Orégano", "Aceitunas"],
        precio: 450,
    },
    
    {
        id: 3,
        nombre: "Jamón",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Aceitunas"],
        precio: 700,
    },
    
    {
        id: 4,
        nombre: "Jamón y Morrón",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Morrón", "Aceitunas"],
        precio: 800,
    },
    
    {
        id: 5,
        nombre: "Jamón y Rúcula",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Rúcula", "Aceitunas"],
        precio: 800,
    },
    
    {
        id: 6,
        nombre: "Fugazzeta",
        ingredientes: ["Masa de Pizza", "Muzzarela", "Jamon", "Cebolla"],
        precio: 1000,
    },
    
    ]
    
    const pizzaImpar = []
    const pizzaBarata = []
    const pizzaNombres = []
    const pizzaPrecios = []
    const pizzaListado = []
    
    Pizzas.forEach (pizza => {
    
        if (pizza.id % 2 === 1) {
            pizzaImpar.push(" " + pizza.id + ": " + pizza.nombre)
        }
    
        if (pizza.precio < 600) {
            pizzaBarata.push(" " + pizza.id + ": " + pizza.nombre + ": $" + `${pizza.precio}`)
        }
    
        pizzaNombres.push (" " + pizza.nombre) 
        pizzaPrecios.push (" $" + `${pizza.precio}`) 
        pizzaListado.push (" " + pizza.nombre + ": $" + `${pizza.precio}`) 
    })
    
    // Consigna 1
    console.log("Las pizzas con un número impar son las siguientes:" + pizzaImpar)
    
    // Consigna 2
    console.log("Las pizzas menores a $600 son:" + pizzaBarata)
    
    // Consigna 3
    console.log("Los nombres de las pizzas que vendemos son:" + pizzaNombres)
    
    // Consigna 4
    console.log("Los precios que manejamos son los siguientes:" + pizzaPrecios)
    
    // Consigna 5
    console.log("La variedad de pizzas que vendemos y sus precios son:" + pizzaListado)
    