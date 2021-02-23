let tabela=document.getElementById('tableDiv');
console.log(tabela)
var t = iscrtajRaspored(tabela,["Ponedjeljak","Utorak","Srijeda","Cetvrtak","Petak"],8,21);
dodajAktivnost(t,"WT","vjezbe",9,12,"Ponedjeljak");
dodajAktivnost(t,"WT","vjezbe",12,13.5,"Petak");
dodajAktivnost(t,"ASP","tutorijal",14,17,"Utorak");
dodajAktivnost(t,"OI","predavanje",12,15,"Cetvrtak");
dodajAktivnost(t,"DM","predavanje",19,21,"Utorak");
dodajAktivnost(t,"OI","predavanje",14,16,"Srijeda");
dodajAktivnost(t,"OI","vjezbe",20,22,"Ponedjeljak");
dodajAktivnost(t,"RPR","predavanje",9,11,"Srijeda");
dodajAktivnost(t,"OI","vjezbe",20,21,"Subota");
dodajAktivnost(t,"OIS","predavanje",15,17,"Ponedjeljak");

let tabela1=document.getElementById('table2');
console.log(tabela)
var tt = iscrtajRaspored(tabela1,["Ponedjeljak","Utorak","Srijeda","Cetvrtak","Petak"],8,21);
dodajAktivnost(tt,"ASP","vjezbe",9,12,"Ponedjeljak");
dodajAktivnost(tt,"WT","vjezbe",12,13.5,"Petak");
dodajAktivnost(tt,"ASP","tutorijal",14,18,"Utorak");
dodajAktivnost(tt,"OI","predavanje",12,15,"Cetvrtak");
dodajAktivnost(tt,"DM","predavanje",17,20,"Srijeda");
dodajAktivnost(tt,"OI","predavanje",14,16,"Srijeda");
dodajAktivnost(tt,"OI","vjezbe",20,22,"Ponedjeljak");
dodajAktivnost(tt,"RPR","predavanje",9,14,"Petak");
dodajAktivnost(tt,"OI","vjezbe",10,21,"Subota");
dodajAktivnost(tt,"OIS","predavanje",20,22,"Ponedjeljak");



