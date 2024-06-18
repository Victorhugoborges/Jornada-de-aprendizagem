
// declare a object in js

let person = {
    name: 'mosh',
    age: 14
}

console.log(person);

let selectedColor = ['red', 'blue'];

console.log(selectedColor[0]);

function greet(name) {
    console.log('Hello ' + name);
}

greet('Mary');

let points = 20

// operador ternario
let y =  points > 100 ? 'gold' : 'silver';
console.log(y);

// operadores logicos && || ! 

// falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN


// ANYTHING THAT IS NOT FALSY -> Truthy

// Short-circuiting

let userColor = 'blue';

let defaultColor = 'red';

let currentColor = userColor || defaultColor;

console.log(currentColor);


//exemplo de switch case

let role;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    
        case 'moderator':
            console.log('Moderator User');
            break;
        
        default:
            console.log('Unknow User');
}

// loops usados para iterar sobre as propriedades de um objeto ou elementos em um array
//for-in    for-off

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

// for-of

for (color of colors)
    console.log(color);



function max (x, y) {
    if (x > y){
        console.log('o numero ' + x + ' é maior que o numero ' + y);
    }
    else if (x === y){
        console.log('o numero ' + x + ' é igual ao numero: ' + y);
    }
    else{
        console.log('o numero ' + y + ' é maior que o numero ' + x);
    }

    // ou pode simplesmente colocar condicional return (a > b) ? a : b
}

let x = 80;
let z = 55;

max(x,z);

/*
    exemplo de codigo util
    typeof input !== 'number'
        return NaN                                  //not a number
*/

/*

Object-oriented Programming

*/

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// factory function

function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


// Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Teste criando novo atributo pr um objeto e deletando

const chapeu = {
    a: 2
};

chapeu.arroz = 'frito';


delete chapeu.arroz;

console.log(chapeu);

let idade = prompt('qual a sua idade?');


let nome = prompt('qual seu nome?');

alert("bem vindo");



let maior = Math.max(12, 50, 75);

let menor = Math.min(55, 63, 1);

console.log(maior);

console.log(menor);

let arredondar = Math.round(1.245485);

























