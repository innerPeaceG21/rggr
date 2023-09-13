const qus = [
    {
        qu: "What does the term biodiversity mean?",
        ans:[
            {op:"The total variety of all life on earth", point: true},
            {op:"Lots of wild habitats", point: false},
            {op:"Different types of species", point: false}
        ]
    },
    {
        qu: " Why are pollinators such as bees so essential to life on earth?",
        ans:[
            {op:"They provide oxygen", point: false},
            {op:"They turn over the soil helping plants to grow", point: false},
            {op:"They help provide the food we eat", point: true}
        ]
    },
    {
        qu: "Which of these species doesn’t have a home in the forest?",
        ans:[
            {op:"Ring tailed lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"Great hornbill", point: false}
        ]
    },
    {
        qu: "How many large dams are there in the world?",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },
    {
        qu: "What does the term biodiversity mean?",
        ans:[
            {op:"The total variety of all life on earth", point: true},
            {op:"Lots of wild habitats", point: false},
            {op:"Different types of species", point: false}
        ]
    },
    {
        qu: " Why are pollinators such as bees so essential to life on earth?",
        ans:[
            {op:"They provide oxygen", point: false},
            {op:"They turn over the soil helping plants to grow", point: false},
            {op:"They help provide the food we eat", point: true}
        ]
    },
    {
        qu: "Which of these species doesn’t have a home in the forest?",
        ans:[
            {op:"Ring tailed lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"Great hornbill", point: false}
        ]
    },
    {
        qu: "How many large dams are there in the world?",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },
    {
        qu: "What does the term biodiversity mean?",
        ans:[
            {op:"The total variety of all life on earth", point: true},
            {op:"Lots of wild habitats", point: false},
            {op:"Different types of species", point: false}
        ]
    },
    {
        qu: " Why are pollinators such as bees so essential to life on earth?",
        ans:[
            {op:"They provide oxygen", point: false},
            {op:"They turn over the soil helping plants to grow", point: false},
            {op:"They help provide the food we eat", point: true}
        ]
    },
    {
        qu: "Which of these species doesn’t have a home in the forest?",
        ans:[
            {op:"Ring tailed lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"Great hornbill", point: false}
        ]
    },
    {
        qu: "How many large dams are there in the world?",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },
    {
        qu: "What does the term biodiversity mean?",
        ans:[
            {op:"The total variety of all life on earth", point: true},
            {op:"Lots of wild habitats", point: false},
            {op:"Different types of species", point: false}
        ]
    },
    {
        qu: " Why are pollinators such as bees so essential to life on earth?",
        ans:[
            {op:"They provide oxygen", point: false},
            {op:"They turn over the soil helping plants to grow", point: false},
            {op:"They help provide the food we eat", point: true}
        ]
    },
    {
        qu: "Which of these species doesn’t have a home in the forest?",
        ans:[
            {op:"Ring tailed lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"Great hornbill", point: false}
        ]
    },
    {
        qu: "How many large dams are there in the world?",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },
    {
        qu: "What does the term biodiversity mean?",
        ans:[
            {op:"The total variety of all life on earth", point: true},
            {op:"Lots of wild habitats", point: false},
            {op:"Different types of species", point: false}
        ]
    },
    {
        qu: " Why are pollinators such as bees so essential to life on earth?",
        ans:[
            {op:"They provide oxygen", point: false},
            {op:"They turn over the soil helping plants to grow", point: false},
            {op:"They help provide the food we eat", point: true}
        ]
    },
    {
        qu: "Which of these species doesn’t have a home in the forest?",
        ans:[
            {op:"Ring tailed lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"Great hornbill", point: false}
        ]
    },
    {
        qu: "How many large dams are there in the world?",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },
    {
        qu: "Standing at up to 176cm, which of these is the tallest flying bird in the world?",
        ans:[
            {op:"Sarus Crane", point: true},
            {op:"Andean Condor", point: false},
            {op:"Black Stork", point: false}
        ]
    },


]       

let boody = document.querySelector("body")

const loadheader = ()=>{
    let header = document.createElement("header")
    let h1 = document.createElement("h1")
    h1.innerText = "let's get started"
    header.appendChild(h1)
    boody.insertAdjacentElement("afterbegin",header)
}

const loadnav = ()=>{
    let navbar = document.createElement("div")
    navbar.setAttribute("id","backnav")
    let backimg = document.createElement("img")
    backimg.setAttribute("id","backreload")
    backimg.src = "../ASSCT/back.png"
    navbar.appendChild(backimg)
    boody.insertAdjacentElement("afterbegin",navbar)
}

const btnevent = ()=>{
    let backbtnn = document.getElementById("backreload");
    backbtnn.addEventListener("click",()=>{
        console.log("subhro");
        location.reload()
    
    })
}

const loadallele = async()=>{
    await loadheader()
    await loadnav()
    await btnevent()
}
loadallele()


let upbox = document.getElementById("box")
let score = 0;
qus.forEach((e,index)=>{
    let numbering = index+1
    let box = document.createElement("div")
    box.setAttribute("class","eachq")
    let disqu = document.createElement("h1")
    disqu.innerHTML = `${numbering}. ${e.qu}`
    upbox.appendChild(box).appendChild(disqu)

    e.ans.forEach((b)=>{
        let disans = document.createElement("button")
        disans.innerHTML = b.op
        disans.setAttribute("data-pop",`${b.point}`)
        box.appendChild(disans)
        disans.addEventListener("click",(d)=>{
            let iscorr = b.point == true
            let botton = d.target
            if (iscorr) {
                botton.classList.add("green")
                score++
            } else {
                botton.classList.add("red")
        
            }
            let parent = disans.parentNode
            let child = Array.from(parent.children)
            
            Array.from(child).forEach((but)=>{
                console.log(but.dataset.pop);
                if (but.dataset.pop === "true") {
                    but.classList.add("green")
                }
            })
            
            child.forEach((e) => {
                e.disabled =  true
            });

            console.log(qus.length,index+1);
            if (qus.length == index+1) {
                showscre(score)
        
            }
        })
    })
})


const showscre = (sco)=>{
    boody.innerHTML=""
    let scorebox =document.createElement("div");
    scorebox.setAttribute("id","scorebox") 
    let pp = document.createElement("p")
    pp.innerText = `your score is ${sco} out of ${qus.length}`
    let scorebtn = document.createElement("button")
    scorebtn.innerText = "practs more"
    scorebtn.addEventListener("click",()=>{location.reload()})
    scorebox.appendChild(pp)
    scorebox.appendChild(scorebtn)
    boody.insertAdjacentElement("afterbegin",scorebox)
}