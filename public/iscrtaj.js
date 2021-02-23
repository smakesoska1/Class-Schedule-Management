function iscrtajRaspored(div, dani, satPocetak, satKraj){

    if(satPocetak >= satKraj || satPocetak < 0 || satKraj > 24 || parseInt(satPocetak) != satPocetak || parseInt(satKraj) != satKraj){
        div.innerHTML = "Greska"
        return
    }

    const table = document.createElement('table')
    div.appendChild(table)
    const header = document.createElement('tr')
    table.appendChild(header)

    const first = document.createElement('th')
    header.appendChild(first)

    let kreiranoUPrethodnomKoraku=false
    for(let i = satPocetak; i <= satKraj; i+=0.5){
        const hcell = document.createElement('th')
        if(i != satKraj && [0,2,4,6,8,10,12,15,17,19,21,23].includes(i)){
            hcell.innerHTML= `${i < 10 ? 0 : ""}${i}:00`
            hcell.colSpan = 2
            hcell.className = 'header-cell'
            header.appendChild(hcell)
            kreiranoUPrethodnomKoraku = true
        }
        else{
            if(!kreiranoUPrethodnomKoraku){
                header.appendChild(hcell)
            }
            kreiranoUPrethodnomKoraku = false
        }
    }
    

    for(let i = 0; i < dani.length; i++){
        const row = document.createElement('tr')
        table.appendChild(row)
        const dan = document.createElement('th')
        dan.innerHTML = dani[i]
        dan.className = "dan-cell"
        row.appendChild(dan)
        for(let s = 0; s < (satKraj - satPocetak) * 2; s++){
            const td = document.createElement('td')
            row.appendChild(td)
        }
    }
    return table
}

function dodajAktivnost(raspored, naziv, tip, vrijemePocetak, vrijemeKraj, dan){

    if(raspored == null){
        alert("Greska - raspored nije kreiran")
        return
    }
    else if(vrijemePocetak > vrijemeKraj){
        alert("Greska")
        return
    }

    const rows = raspored.getElementsByTagName('tr')
    let startTime = 0;
    const header = rows[0]
    const headerCells = header.getElementsByTagName('th')
    let sum=0;
    for(let i = 1; i < headerCells.length; i++){
        if(!headerCells[i].colSpan){
            sum += 0.5;
        }
        else{
            startTime = parseInt(headerCells[i].innerHTML) - sum
            break
        }
    }

    let d = 0
    for(let i = 1; i < rows.length; i++){
        const dcell = rows[i].getElementsByTagName('th')[0]
        if(dcell.innerHTML == dan){
            d = i
        }
    }
    if(d == 0){
        alert("Greska - u rasporedu ne postoji dan ili vrijeme u kojem pokusavate dodati termin")
        return
    }
    
    const row = rows[d]
    const cells = row.getElementsByTagName('td')
    let numOfCells = 0
    for(let i = 0; i < cells.length; i++){
        if(!cells[i].colSpan)
            numOfCells++
        else
            numOfCells += parseInt(cells[i].colSpan)
    }

    let endTime = startTime + numOfCells / 2

    console.log(startTime, endTime)

    if(vrijemePocetak < startTime || vrijemeKraj > endTime ){
        alert("Greska - u rasporedu ne postoji dan ili vrijeme u kojem pokusavate dodati termin")
        return
    }
    
    sum = startTime;
    console.log(sum)
    for(let i = 0; ; i++){
        if(sum == vrijemePocetak){
            let val = (vrijemeKraj-vrijemePocetak)*2;
            let colspanLen=0;
            for(let k=0; k<val;k++){
                if(cells[i+k].className.includes('aktivnost')){
                    alert("Greska - vec postoji termin u rasporedu u zadanom vremenu")
                    return
                }
            }

            cells[i].colSpan = val
            cells[i].className = 'aktivnost'
            const div = document.createElement('div')
            const br = document.createElement('br')
            const div2 = document.createElement('div')
            div.innerHTML = naziv
            div.className = 'aktivnost-tekst'
            div2.innerHTML = tip
            cells[i].appendChild(div)
            cells[i].appendChild(div2)
            for(let x=0; x<val-1; x++){
                cells[i+1].remove()
            }
            let start = startTime, end = 0
            for(let x=1; x<cells.length; x++){
                end = cells[x].colSpan*0.5 + start
                console.log(start, end)
                let aktivnost = false
                if(cells[x].className.includes('aktivnost'))
                    aktivnost = true
                if(start%1==0.5){
                    cells[x].className="border-left-dashed"
                }
                else{
                    cells[x].className="border-left-solid"
                }
                if(end%1==0.5){
                    cells[x].className="border-right-solid"
                }
                else{
                    cells[x].className="border-right-dashed"
                }
                if(aktivnost)
                    cells[x].className="aktivnost "+cells[x].className
                start=end
            }
            return
        }
        if(sum>vrijemePocetak){
            alert("Greska - vec postoji termin u rasporedu u zadanom vremenu")
            return
        }
        sum += cells[i].colSpan * 0.5
    }
}