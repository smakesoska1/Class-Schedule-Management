let aktivnosti = []
let predmeti = []
let dani = []
let tipovi = []

function loadAktivnosti(){
    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            let odgovor = JSON.parse(ajax.responseText)
            aktivnosti = odgovor
        }
    }
    ajax.open('GET', 'http://localhost:3000/v2/aktivnost', true)
    ajax.send()
} 

function loadPredmeti(){
    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            let odgovor = JSON.parse(ajax.responseText)
            predmeti = odgovor
        }
    }
    ajax.open('GET', 'http://localhost:3000/v2/predmet', true)
    ajax.send()
} 

function loadDani(){
    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            let odgovor = JSON.parse(ajax.responseText)
            dan = odgovor
            console.log(odgovor)
        let select = document.getElementById('dan')
            for(let i=0; i<odgovor.length; i++){
                const grupa = odgovor[i]
                const option = document.createElement('option')
                option.label = grupa.naziv
                option.value = grupa.id
                select.appendChild(option)
            }
        }
        
    }

    ajax.open('GET', 'http://localhost:3000/v2/dan', true)
    ajax.send()
} 

function loadTipovi(){
    var ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            let odgovor = JSON.parse(ajax.responseText)
            tip = odgovor
            console.log(odgovor)
            let select = document.getElementById('tip')
                for(let i=0; i<odgovor.length; i++){
                    console.log(odgovor[i])
                    const grupa = odgovor[i]
                    const option = document.createElement('option')
                    option.label = grupa.naziv
                    option.value = grupa.id
                    select.appendChild(option)        
                }
        
            }
    }
    ajax.open('GET', 'http://localhost:3000/v2/tip', true)
    ajax.send()
} 

function load(){
    loadAktivnosti()
    loadPredmeti()
    loadDani()
    loadTipovi()
}

function submitForme(){

    let naziv = document.getElementById('naziv').value
    let tip = document.getElementById('tip').value
    let pocetak = document.getElementById('vrijemePocetka').value
    let kraj = document.getElementById('vrijemeKraja').value
    let dan = document.getElementById('dan').value
    console.log(naziv, tip, pocetak, kraj, dan)
    let indP = predmeti.indexOf(naziv)
    if(indP==-1){
        var ajax = new XMLHttpRequest()
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 && ajax.status == 200){
                console.log(ajax.responseText)
                let odgovor1 = JSON.parse(ajax.responseText)
                console.log(odgovor1)
                var ajax2 = new XMLHttpRequest()
                ajax2.onreadystatechange = function() {
                    if(ajax2.readyState == 4 && ajax2.status == 200){
                        console.log(ajax2.responseText)
                        let odgovor2 = ajax2.responseText
                        if(odgovor2.message=='Greska'){
                            var ajax3 = new XMLHttpRequest()
                            ajax3.onreadystatechange = function () {
                                if(ajax3.readyState == 4 && ajax3.status == 200){
                                    console.log(ajax3.responseText)
                                    alert('Obrisan predmet, nije uspjelo dodavanje aktivnosti')
                                }
                                ajax3.open('delete', `http://localhost:3000/v2/predmet/${odgovor1.id}`)
                                ajax3.send()
                            }
                        }
                        else{
                            predmeti.push(odgovor1)
                            alert('Uspješno dodana aktivnost')
                        }
                        console.log(odgovor2)
                    }
                }
                ajax2.open('post', 'http://localhost:3000/v2/aktivnost')
                ajax2.setRequestHeader('Content-type', "application/x-www-form-urlencoded")
                ajax2.send(`naziv=${naziv}&tip=${tip}&pocetak=${pocetak}&kraj=${kraj}&dan=${dan}&predmet=${odgovor1.id}`)
            }
        }
        ajax.open('post', 'http://localhost:3000/v2/predmet', true)
        ajax.setRequestHeader('Content-type', "application/x-www-form-urlencoded")
        ajax.send(`naziv=${naziv}`)
    }
    else {
        var ajax2 = new XMLHttpRequest()
        ajax2.onreadystatechange = function() {
            if(ajax2.readyState == 4 && ajax2.status == 200){
                console.log(ajax2.responseText)
                let odgovor2 = JSON.parse(ajax2.responseText)
                    alert('Uspješno dodana aktivnost')
                console.log(odgovor2)
            }
        }
        ajax2.open('post', 'http://localhost:3000/v2/aktivnost')
        ajax2.setRequestHeader('Content-type', "application/x-www-form-urlencoded")
        ajax2.send(`naziv=${naziv}&tip=${tip}&pocetak=${pocetak}&kraj=${kraj}&dan=${dan}&predmet=${indP}`)
    }
    }