//import style from './styles.css';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


console.log("hola desde webpack");

let a = () =>{

    console.log("Funcion flecha");
}

a();

Toastify({
    text: "Hola desde Toastify!",
    duration: 2000
  }).showToast();

  let btn = document.querySelector("button");

  btn.addEventListener('click', () =>{
    Toastify({
        text: "Hola desde el botón!",
        duration: 2000
      }).showToast();

  })