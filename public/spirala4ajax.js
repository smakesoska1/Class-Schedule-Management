function loadGrupe(){
    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            let odgovor = JSON.parse(ajax.responseText)
            console.log(odgovor)
            let select = document.getElementById('grupa')
            for(let i=0; i<odgovor.length; i++){
                const grupa = odgovor[i]
                const option = document.createElement('option')
                option.label = grupa.naziv
                option.value = grupa.id
                select.appendChild(option)
            }
        }
    }
    ajax.open('GET', 'http://localhost:3000/v2/grupa', true)
    ajax.send()
} 



function submitForme(){

    const sText = document.getElementById("naziv").value
    const studenti = []
    console.log(sText)
    const redovi = sText.split('\n')
    for(let i = 0; i < redovi.length; i++) {
        const red = redovi[i]
        console.log(red)
        if(red.includes(',')) {
            const naziv = red.split(',')[0]
            const index = red.split(',')[1]
            studenti.push({
                naziv: naziv,
                index: index
            })
        }
    }

    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            console.log(ajax.responseText)
            let odgovori = JSON.parse(ajax.responseText)
            document.getElementById("naziv").value = odgovori.toString()
        }
    }
    ajax.open('post', 'http://localhost:3000/v2/studenti-all', true)
    ajax.setRequestHeader('Content-type', "application/json")
    ajax.send(JSON.stringify({
        studenti,
        grupa: document.getElementById("grupa").value
    }))
}