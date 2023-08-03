
console.log("Hola Mundo")
//Numero
let variable = 5
console.log(variable)
variable = "numero"
console.log(variable)

//Condicionales

let x= 11
if(x>10){
    console.log(x+ " es mayor que 10")
}else{
    console.log(x+ " es menor que 10")
}

//Ciclos

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let i = 0
while(i<10){
    console.log(i)
    i++
}

//EDD

let arreglo = [1,2,3,5]
console.log("Arreglo " + arreglo);
arregloMixto = [1,"dos",3,"Cuartro"]
console.log("Arreglo Mixto "+arregloMixto);
console.log("Tamaño "+ arregloMixto.length)
console.log("Indice "+ arregloMixto.toString)
console.log("IAM "+ arregloMixto.join(";"))
let pares =[2,4,6]
let impares = [1,3,5]
let todas = pares.concat(impares)
console.log("Todos: "+ todas);
todas.push(7)
console.log("Push: "+ todas);
todas.pop()
console.log("Pop: "+ todas);
let result =todas.slice(2,5)

//Recorrer arreglo

for(let objeto of todas){
    console.log(objeto);
}


for(let objeto of todas){
    console.log(objeto);

}

//Funciones

function sumar(num1,num2){
    return num1+num2
}

function multiplicar(num1, num2){
    return num1*num2
}

console.log("Suma: "+ sumar(4,5));

//Funciones como parametro
 function operacionMatematica(num1,num2,funcion){
    return funcion(num1,num2)
 }

 console.log("mult "+  operacionMatematica(3,4,multiplicar));

 let resultado = operacionMatematica(4,7,function(x,y) {return x*y})
 resultado = operacionMatematica(4,7, (x,y) => {return x*y})
 resultado = operacionMatematica(4,7, (x,y) => x*y)

 let dato1 =3
 let dato2 ="3"

 if(dato1 ===dato2){
    console.log("iguales");
 }else{
    console.log("diferentes");
 }

 //JSON

 let persona = {
    nombre:"camilo",
    apellido:"MArtinez",
    edad: 21,
    mascota:{
        raza:"Bull Terrier"
    }
 }

 console.log(persona);
 console.log(persona.nombre);
 console.log(persona["nombre"]);

for (let dato of Object.entries(persona)){
    console.log(dato);
}

let literals = `la edad de ${persona.nombre} es ${persona.edad} `
console.log(literals);