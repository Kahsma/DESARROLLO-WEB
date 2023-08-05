window.onload = () =>{
    //Obtener elemento por id
    let cuerpo = document.getElementById("cuerpo")
    console.log(cuerpo.innerHTML)
    document.getElementById("titulo").innerHTML += " Hola a todos"

    // obtener elementos con un tag
    const pArreglo = document.getElementsByTagName("p")

    let i = 0
    for(p of pArreglo){
        i++
        p.innerHTML += (" "+i)
    }
    let enlaces = ["https://www.reddit.com","youtube.com"]
    const element =document.getElementById("linkContainer")

    for(let enlace of enlaces){
        let etiqueta = "<a href="+enlace+"class='enlaces'>"+ enlace+ "</a><br>"
    }

    for(let enlace of enlaces){
        const para = document.createElement("a")
        const node = document.createTextNode(enlace)
        para.appendChild(node)
        para.href=enlace
        para.className="enlaces"
        element.appendChild(para)
    }
    document.getElementById("titulo").style.color = "blue"

    //Obtener tags por su clase

    let enlacesEtiquetas = document.getElementsByClassName("enlaces")

    for(let element of enlacesEtiquetas){
        element.style.color = "orange"
    }

    let sub = document.getElementById("subtitulo")
   sub.addEventListener("mouseout", ()=> original(sub))


}

function cambiarColor(element){
    element.style.color = "red"
}

function agrandar(element){
    element.style.fontSize  = "50px"
}

function original(element){
    element.style.fontSize = "25px"
}