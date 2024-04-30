console.log("Oi Gente")
    
    let elemIcone1 = document.getElementById("icone01") //selecionando o elemento
    console.log("O que tem na variavel elem?", elemIcone1)

//    let elemIcone2 = document.getElementById("icone02") //selecionando o elemento
//    console.log("O que tem na variavel elem?", elemIcone2)

    let elemNumero1 = document.getElementById("numero1")
    let contador = 1

    function fazAlgo1 (){//descrevendo a ação que o elemento vai receber
        console.log("faz algo...")
        contador++
        elemNumero1.innerText = contador
    }
    elemIcone1.onclick = fazAlgo1   //função de clicar no elemento

    elemIcone1.onmouseover = function (){//passar o mouse sobre o icone selecionado em document.getbyid("icone01")
        console.log("passei o mouse no icone")
    }

    let elemIcone2 = document.getElementById("icone02") //selecionando o elemento
    console.log("O que tem na variavel elem?", elemIcone2)
    
    let elemNumero2 = document.getElementById("numero2")
    let contador2 = 1

    function fazAlgo2 (){//descrevendo a ação que o elemento vai receber
        console.log("faz algo...")
        contador2++
        elemNumero2.innerText = contador2
    }
    elemIcone2.onclick = fazAlgo2//função de clicar no elemento

    elemIcone2.onmouseover = function (){//passar o mouse sobre o icone selecionado em document.getbyid("icone01")
        console.log("passei o mouse no icone")
    }