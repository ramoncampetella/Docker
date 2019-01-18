'use strict';
 
class Person {
    constructor(id, nombre, apellido, email) {
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
    }
}
 
module.exports = Person;