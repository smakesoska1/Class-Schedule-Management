let assert = chai.assert;
describe('iscrtajModul', function() {
 describe('iscrtajRaspored ()', function() {
   it('treba bit 6 redova', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,["Ponedjeljak","Utorak","Srijeda","Cetvrtak","Petak"],8,21);
     let tabele = document.getElementsByTagName("table");
     let tabelaa = tabele[tabele.length-1]
     let redovi = tabelaa.getElementsByTagName("tr");
     assert.equal(redovi.length, 6,"Broj redova treba biti 6");
   });

   it('treba biti 26 kolona', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,["Ponedjeljak","Utorak","Srijeda","Cetvrtak","Petak"],8,21);
    let tabele = document.getElementsByTagName("table");
    let tabelaa = tabele[tabele.length-1]
    let redovi = tabelaa.getElementsByTagName("tr");
    let kolone = redovi[5].getElementsByTagName("td");
    let brojPrikazanih = 0;
    for(let i=0;i<kolone.length;i++){
        let stil = window.getComputedStyle(kolone[i])
        if(stil.display!=='none') brojPrikazanih++;
    }
    assert.equal(brojPrikazanih, 26,"Broj kolona treba biti 26");
  });

  it('treba bit 4 redova', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,["Ponedjeljak","Utorak","Srijeda"],8,21);
     let tabele = document.getElementsByTagName("table");
     let tabelaa = tabele[tabele.length-1]
     let redovi = tabelaa.getElementsByTagName("tr");
     assert.equal(redovi.length, 4,"Broj redova treba biti 4");
   });

   it('treba bit 1 red', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,[],8,21);
     let tabele = document.getElementsByTagName("table");
     let tabelaa = tabele[tabele.length-1]
     let redovi = tabelaa.getElementsByTagName("tr");
     assert.equal(redovi.length, 1,"Broj redova treba biti 1");
   });

   it('treba bit 2 red i smanjeni sati', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,["Ponedjeljak"],8,19);
     let tabele = document.getElementsByTagName("table");
     let tabelaa = tabele[tabele.length-1];
     let redovi = tabelaa.getElementsByTagName("tr");
     assert.equal(redovi.length, 2,"Broj redova treba biti  i smanjeni sati");
   });

   it('treba biti 18 kolona', function() {
    let tabela=document.getElementById('tableDiv');
     iscrtajModul.iscrtajRaspored(tabela,["Ponedjeljak","Utorak","Srijeda","Cetvrtak","Petak"],8,17);
    let tabele = document.getElementsByTagName("table");
    let tabelaa = tabele[tabele.length-1]
    let redovi = tabelaa.getElementsByTagName("tr");
    let kolone = redovi[5].getElementsByTagName("td");
    let brojPrikazanih = 0;
    for(let i=0;i<kolone.length;i++){
        let stil = window.getComputedStyle(kolone[i])
        if(stil.display!=='none') brojPrikazanih++;
    }
    assert.equal(brojPrikazanih, 18,"Broj kolona treba biti 18");
  });

 });
});