//Definición valor de ticket
const valorTicket=200;

//Definición de variables para porcentajes de descuentos según categoría
var descuentoEstudiante=80;
var descuentoTrainee=50;
var descuentoJunior=15;

//Variables de captura datos de inputs
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var email=document.getElementById("email");
var cantidadTickets=document.getElementById("cant");
var categoria=document.getElementById("categSelect");
var totalPago=document.getElementById("totalPago");

//Captura de botones
const btnResumen=document.getElementById("btnResumen")
const btnBorrar=document.getElementById("btnBorrar")
   
function quitarClaseError()
{
    var x=document.querySelectorAll(".form-control, .form-select");
    var i;
    for(i=0;i<x.length;i++)
    {
        x[i]=classList.remove("is-invalid");
    }
}
function Calcular()
{
    var totalValorTickets=(cantidadTickets.value*valorTicket);

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100 * totalValorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100 * totalValorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100 * totalValorTickets);
    }
    //inner html
    totalPago.innerHTML=totalValorTickets;
 
// Función para validar los campos del formulario
if(nombre.value=="")
    {
        alert("Campo Vacío");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if(apellido.value==="")
    {
        alert("Campo Vacío");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(email.value==="")
    {
        alert("Campo Vacío");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }

    //Para determinar si el correo electrónico es válido o no
    const emailValido = email =>
    {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if(!emailValido(email.value))
    {
        alert("Escriba un email válido");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }


}
//evento de escucha del botón Resumen
btnResumen.addEventListener("click",Calcular);


//Función para limpiar los campos 
function reset()
{
    totalPago.innerHTML="";
}

//evento de escucha del botón Borrar
btnBorrar.addEventListener("click",reset);





