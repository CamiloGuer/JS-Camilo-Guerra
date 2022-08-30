fetch("./json.json")
    .then(response=>response.json())
    .then(data=>pintarDivisas(data))

const contenedor=document.getElementById("contenedor")
function numerosIngresados(input, valores) {
    let coeficiente = input.value / input.dataset.cambio
    valores.forEach(function (input) {
        input.value = (input.dataset.cambio * coeficiente).toFixed(2)
    });
};
function pintarDivisas(arrayObjetos){
    contenedor.innerHTML=""
    arrayObjetos.forEach((objeto, indice)=>{
            let card =document.createElement("div")
            card.innerHTML=`
    <div class="cajas" id="caja${objeto.id}">
            <div class="moneda">${objeto.name}</div>
            <input id="input${objeto.id}" value="${objeto.cambio}" class="valor" type="number" data-cambio="${objeto.cambio}">
    </div>
    `
    contenedor.appendChild(card)
    let div=document.getElementById(`caja${objeto.id}`)
    div.onmouseover = () => {
            div.style.background = "skyblue"
            div.style.color = "black"
            div.style.fontWeight = "bold"
    }
    div.onmouseout = () => {
            div.style.background = "coral"
            div.style.color = "white"
            div.style.fontWeight = "400"
    }
    let input=document.getElementById(`input${objeto.id}`)
    input.addEventListener("change", (e)=>{   
            let valores = document.querySelectorAll(".valor");                     
            numerosIngresados(e.target, valores)
    })                
})
};
//pintarDivisas(monedas);

Swal.fire({
    title: '<strong>Atención!</strong>',
    icon: 'info',
    html:
      'Los valores de cambio se actualizaron el día <b>29/7/2022</b>. La exaxtitud de las conversiones se puede ver afectada por esto',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Aceptar!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })

