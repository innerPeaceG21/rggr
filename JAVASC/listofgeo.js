let buttons = Array.from(document.querySelectorAll(".listbtn"))
let body = document.querySelector("body")
let head = document.querySelector("head")
let backtodas = document.getElementById("backtodas")
let csslink = document.querySelector(".csslink")
const loadscript = async(scrurl)=>{
    let script = document.createElement("script")
    script.src = scrurl
    body.appendChild(script)
}

backtodas.addEventListener("click",()=>{
    window.history.back()
})

buttons.forEach((e,index)=>{
    e.setAttribute("data-biono",`biois${index}`)
    e.addEventListener("click",()=>{
        let btnnum = e.dataset.biono
        if (btnnum == "biois0") {
            body.innerHTML =`<div id="box"></div>`;
            csslink.remove()
            head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="../CSS/allqus.css">`);
            loadscript("../ASSCT/assjs/geolevel1.js")
            
        }
        else if (btnnum == "biois1") {
            body.innerHTML =`<div id="box"></div>`;
            csslink.remove()
            head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="../CSS/allqus.css">`);
            loadscript("../ASSCT/assjs/geolevel2.js")
            
        }
        else if (btnnum == "biois2") {
            body.innerHTML =`<div id="box"></div>`;
            csslink.remove()
            head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="../CSS/allqus.css">`);
            loadscript("../ASSCT/assjs/geolevel3.js")

        }
    })
})