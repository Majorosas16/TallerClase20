const render =()=>{

    const formulario= document.querySelector("#formulario");
    const texto=document.querySelector("#texto");

    const nombre =document.querySelector("#nombre");
    const apellido =document.querySelector("#apellido");
    const edad =document.querySelector("#edad");

    nombre.addEventListener("input", (e)=>{
    });

    apellido.addEventListener("input", (e)=>{
    });

    edad.addEventListener("input", (e)=>{
    });

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault(); //no hace el redireccionamiento
        texto.innerHTML=`El nombre de la persona es ${e.target.nombre.value}, su apellido es ${e.target.apellido.value} y su edad es ${e.target.edad.value} `;
    });

}
document.addEventListener("DOMContentLoaded", render);