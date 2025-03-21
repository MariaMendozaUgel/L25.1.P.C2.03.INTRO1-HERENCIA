import Cl_hija from "./Cl_hija.js";

let hija = new Cl_hija(1,2)

let salida = document.getElementById("salida")

salida.innerHTML = `
El atributo A de la hija es ${hija.atribA} <br>
El atributo B de la hija es ${hija.atribB}`