const menu_mobil = document.getElementById('menu-mobil');
const menu = document.getElementById('menu');

menu_mobil.addEventListener('click',()=>{
    menu.classList.toggle('active');
});

// eta vaina es para bloquear el click derecho del raton
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert("Click derecho bloqueado")
});

//Bloqueo de las conbinacion de teclas control + c
document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.key === 'c'){
    e.preventDefault();
    alert("Presionaste la tecla control mas c")}
});

//Bloqueo de la tecla F12
document.addEventListener('keydown', function(event){
    if(event.Key === 'F1' || event.keyCode === 123){
    event.preventDefault();
    alert("Presionaste la tecla F12")}
});

//Eta vaina es el de comprar
const form = document.getElementById('purchaseForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      if (form.checkValidity()) {
        alert('Compra procesada correctamente. ¡Gracias!');
        form.reset();
      } else {
        alert('Por favor, completa todos los campos correctamente.');
      }
    });