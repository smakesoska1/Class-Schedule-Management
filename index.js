const express = require('express')
const app = express()
const cors = require('cors')

const fs = require('fs')
const db = require('./db.js')
db.sequelize.sync()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(express.static("public"));

//predmet

app.get('/v2/predmet', function(req,res){
    db.predmet.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/predmet/:id', function (req, res){
    db.predmet.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/predmet/:id', function (req, res){
    db.predmet.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/predmet', function(req, res){
    console.log(req.body)
    db.predmet.create({naziv: req.body.naziv}).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.put('/v2/predmet/:id', function(req, res){
    db.predmet.update({
        naziv: req.body.naziv
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})

//tip

app.get('/v2/tip', function(req,res){
    db.tip.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/tip/:id', function (req, res){
    db.tip.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/tip/:id', function (req, res){
    db.tip.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/tip', function(req, res){
    console.log(req.body)
    db.tip.create({naziv: req.body.naziv}).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.put('/v2/tip/:id', function(req, res){
    db.tip.update({
        naziv: req.body.naziv
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})

//dan
app.get('/v2/dan', function(req,res){
    db.dan.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/dan/:id', function (req, res){
    db.dan.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/dan/:id', function (req, res){
    db.dan.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/dan', function(req, res){
    console.log(req.body)
    db.dan.create({naziv: req.body.naziv}).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.put('/v2/dan/:id', function(req, res){
    db.dan.update({
        naziv: req.body.naziv
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})


//aktivnost

app.get('/v2/aktivnost', function(req,res){
    db.aktivnost.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/aktivnost/:id', function (req, res){
    db.aktivnost.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/aktivnost/:id', function (req, res){
    db.aktivnost.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/aktivnost', function(req, res){
    console.log(req.body)
    db.aktivnost.create({
        naziv: req.body.naziv,
        pocetak: req.body.pocetak,
        kraj: req.body.kraj,
        grupa: req.body.grupa,
        dan: req.body.dan,
        tip: req.body.tip,
        predmet: req.body.predmet
    }).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.put('/v2/aktivnost/:id', function(req, res){
    db.aktivnost.update({
        naziv: req.body.naziv,
        pocetak: req.body.pocetak,
        kraj: req.body.kraj,
        grupa: req.body.grupa,
        dan: req.body.dan,
        tip: req.body.tip,
        predmet: req.body.predmet
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})

//grupa

app.get('/v2/grupa', function(req,res){
    db.grupa.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/grupa/:id', function (req, res){
    db.grupa.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/grupa/:id', function (req, res){
    db.grupa.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/grupa', function(req, res){
    console.log(req.body)
    db.grupa.create({naziv: req.body.naziv, predmet: req.body.predmet}).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.put('/v2/grupa/:id', function(req, res){
    db.grupa.update({
        naziv: req.body.naziv, predmet: req.body.predmet
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})


//student

app.get('/v2/student', function(req,res){
    db.student.findAll().then(function(p){
        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/v2/student/:id', function (req, res){
    db.student.findOne({where: {id: req.params.id}}).then(function(p){
        res.json(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })
})

app.delete('/v2/student/:id', function (req, res){
    db.student.destroy({where: {id: req.params.id}}).then(function(r){
        res.send("Obrisano")
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/student', function(req, res){
    console.log(req.body)
    db.student.create({naziv: req.body.naziv, index: req.body.index}).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})

app.post('/v2/studenti-all', async function(req, res){
    console.log(req.body)
    const studenti = req.body.studenti;
    const grupa = req.body.grupa;
    const db_grupa = await db.grupa.findOne({where: {id:grupa}})
    console.log("grupa", db_grupa, grupa)
    const greske = []
    for(let i = 0; i < studenti.length; i++) {
        const student = studenti[i]
        let postojeci = null
        console.log(student)
        try {
            postojeci = await db.student.findOne({where: {index: student.index}})
            console.log("postojeci",postojeci && postojeci.dataValues)
            if(postojeci && postojeci.dataValues.naziv != student.naziv) {
                greske.push(`Student ${student.naziv} nije kreiran jer postoji student ${postojeci.dataValues.naziv} sa istim indexom ${student.index}`)
            }
            if(!postojeci) {
                postojeci = await db.student.create({naziv: student.naziv, index: student.index})
            }
        }
        catch(ex) {
            console.log(ex)
            postojeci = await db.student.create({naziv: student.naziv, index: student.index})
        }
        console.log(Object.keys(postojeci))
        const grupe = await postojeci.getGrupe()
        grupe.forEach(function(g){
            if(g.dataValues.predmet == db_grupa.dataValues) {
                postojeci.removeGrupe(g)
            }
        })
        await postojeci.addGrupe(db_grupa)
    }
    res.status(200).json(greske)
})

app.put('/v2/student/:id', function(req, res){
    db.student.update({
        naziv: req.body.naziv,
        index: req.body.index
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })
})





app.get('/v1/predmeti', function(req, res){
    fs.readFile("predmeti.txt", function(err, data){
        if (err){
            res.send("Greska")
        }
        else {
            let predmeti = []
            let tekst = data.toString()
            let redovi = tekst.split('\n')
            for(let i=0; i<redovi.length; i++){
                if(redovi[i]!="")
                predmeti.push({naziv: redovi[i]})
            }
            res.send(predmeti)
        }
    })
})

app.get('/v1/aktivnosti', function(req, res){
    fs.readFile("aktivnosti.txt", function(err, data){
        if(err) {
            res.send("Greska")
        }
        else {
            let aktivnosti = []
            let tekst = data.toString()
            let redovi = tekst.split('\n')
            for(let i=0; i<redovi.length; i++){
                if(redovi[i]!=""){
                    let kolone = redovi[i].split(',')
                    aktivnosti.push({
                        naziv: kolone[0],
                        tip: kolone[1],
                        pocetak: parseInt(kolone[2]),
                        kraj: parseInt(kolone[3]),
                        dan: kolone[4]
                    })
                }
            }
            res.send(aktivnosti)
        }
    })
})

app.get('/v1/predmet/:naziv/aktivnost', function(req, res){
    let naziv = req.params.naziv
    fs.readFile("aktivnosti.txt", function(err, data){
        if(err) {
            res.send("Greska")
        }
        else {
            let aktivnosti = []
            let tekst = data.toString()
            let redovi = tekst.split('\n')
            for(let i=0; i<redovi.length; i++){
                if(redovi[i]!=""){
                    let kolone = redovi[i].split(',')
                    if(kolone[0]==naziv)
                        aktivnosti.push({
                            naziv: kolone[0],
                            tip: kolone[1],
                            pocetak: parseInt(kolone[2]),
                            kraj: parseInt(kolone[3]),
                            dan: kolone[4]
                        })
                }
            }
            res.send(aktivnosti)
        }
    })
})

app.post('/v1/predmet', function(req, res){
    let novaLinija = "\n" + req.body.naziv
    fs.readFile('predmeti.txt', function(err, data){
        if(err) {
            res.send("Greska!")
        }
        else {
            let ima = 0
            let tekst = data.toString()
            let redovi = tekst.split("\n")
            for(let i=0; i<redovi.length; i++){
                if(req.body.naziv==redovi[i]){
                    ima=1
                }  
            }
            if(ima==0){
                fs.appendFile('predmeti.txt', novaLinija, function(err){})
                res.send({
                    message: "Uspješno dodan predmet!"
                })
            }
            else {
                res.send({
                    message: "Naziv predmeta postoji!"
                })
            }

        }
    })
})

app.post('/v1/aktivnost', function(req, res){
    console.log(req.body)
    if(req.body.pocetak>req.body.kraj || req.body.kraj<req.body.pocetak || req.body.pocetak<8 || req.body.kraj>20 || req.body.naziv=="")
    {
        res.send({
            message: "Aktivnost nije validna!"
        })
        return
    }

    let novaLinija = "\n" + req.body.naziv + "," + req.body.tip + "," + req.body.pocetak + "," + req.body.kraj + "," + req.body.dan
    fs.readFile('aktivnosti.txt', function(err, data){
        if(err) {
            res.send({
                message: "Greska"
            })
        }
        else {
            let tekst = data.toString()
            let redovi = tekst.split("\n")
            let ima=0
            for(let i=0; i<redovi.length; i++){
                let kolone = redovi[i].split(',')
                if(req.body.dan==kolone[4]&&((req.body.pocetak==kolone[2] && req.body.kraj==kolone[3])) /*|| (req.body.pocetak==kolone[2] &&req.body.kraj<=kolone[3])*/){
                        ima=1
                }
            }
            if (ima==0){
                fs.appendFile('aktivnosti.txt', novaLinija, function(err){})
                res.send({
                    message: "Uspješno dodana aktivnost!"
                })
        }
    else {
        res.send({
            message: "Aktivnost nije validna!"
        })
    }
}
    })
})

app.delete('/v1/all', function(req, res){
    fs.writeFile('predmeti.txt', '', function(err){
        res.send({message: "Greska - sadržaj datoteka nije moguće obrisati!"})
    }, function(){
        fs.writeFile('aktivnosti.txt', '', function(err){
            res.send({message: "Greska - sadržaj datoteka nije moguće obrisati!"})
        }, function(){
            res.send({
                message: "Uspješno obrisan sadržaj datoteka!"
            })
        })
    })
})

app.delete('/v1/predmet/:naziv', function(req, res){
    let naziv = req.params.naziv
    fs.readFile('predmeti.txt', function(err, data){
        let noviTekst=""
        let tekst = data.toString()
        let redovi = tekst.split('\n')
        let obrisano = 0
        for(let i = 0; i<redovi.length; i++){
            if(redovi[i]!=naziv){
                noviTekst = noviTekst + '\n' + redovi[i]
            }
            else{
                obrisano=1;
            }
        }
        fs.writeFile('predmeti.txt', noviTekst, function(err){})
        if(obrisano)
        res.send({
            message: "Uspješno obrisan predmet!"
        })
        else {
            res.send({message: "Greska - predmet nije obrisan!"})
        }
    })
})

app.delete('/v1/aktivnost/:naziv', function(req, res){
    let naziv = req.params.naziv
    console.log(naziv)
    fs.readFile('aktivnosti.txt', function(err, data){
        let noviTekst=""
        let tekst = data.toString()
        let redovi = tekst.split('\n')
        let obrisano = 0
        for(let i = 0; i<redovi.length; i++){
            if(redovi[i]!=""){
                let kolone = redovi[i].split(',')
                console.log("**", kolone[0])
                if(kolone[0]!=naziv){
                    noviTekst = noviTekst + '\n' + kolone[0] + ',' + kolone[1] + ',' + kolone[2] + ',' + kolone[3] + ',' + kolone[4]
                }
                else{
                    obrisano=1
                }
            }
        }
        fs.writeFile('aktivnosti.txt', noviTekst, function(err){})
        if(obrisano)
        res.send({
            message: "Uspješno obrisana aktivnost!"
        })
        else {
            res.send({message: "Greska - aktivnost nije obrisana"})
        }
    })
})

app.listen(3000, function(){
    console.log("Pokrenuto na portu 3000")
})