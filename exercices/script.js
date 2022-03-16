////////Exemple
let ctx = document.getElementById("mon_canvas").getContext("2d")
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200,200);
ctx.moveTo(200,50);
ctx.lineTo(50,200);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

////////Exercice1
let drapeau = document.getElementById("mon_canvas1").getContext("2d");
drapeau.moveTo(50,300); drapeau.lineTo(50,50);
drapeau.moveTo(50,300); drapeau.lineTo(70,300);
drapeau.moveTo(50,50); drapeau.lineTo(70,50);
drapeau.moveTo(70,50); drapeau.lineTo(70,300);
drapeau.moveTo(70,70); drapeau.lineTo(180,70);
drapeau.moveTo(70,140); drapeau.lineTo(180,140);
drapeau.moveTo(180,70); drapeau.lineTo(180,140);
drapeau.moveTo(140,70); drapeau.lineTo(140,140);
drapeau.moveTo(105,70); drapeau.lineTo(105,140);
drapeau.strokeStyle = "black";
drapeau.stroke();
drapeau.closePath();

////////Exercice2
let barque = document.getElementById("mon_canvas2").getContext("2d");
//bateau
barque.moveTo(100,150); barque.lineTo(550,150);
barque.moveTo(100,150); barque.lineTo(150,220);
barque.moveTo(550,150); barque.lineTo(500,220);
barque.moveTo(150,220); barque.lineTo(500,220);
//mer
barque.moveTo(0,200); barque.lineTo(135,200);
barque.moveTo(515,200); barque.lineTo(650,200);
//premier pont
barque.moveTo(170,130);barque.lineTo(480,130);
barque.moveTo(170,150);barque.lineTo(170,130);
barque.moveTo(480,130);barque.lineTo(480,150);
//deuxième pont
barque.moveTo(200,110);barque.lineTo(450,110);
barque.moveTo(200,110);barque.lineTo(200,130);
barque.moveTo(450,110);barque.lineTo(450,130);
//mat
barque.moveTo(530,150); barque.lineTo(505,50);
barque.moveTo(135,150); barque.lineTo(155,50);
//cheminées
barque.moveTo(230,110); barque.lineTo(240,70);
barque.moveTo(250,110); barque.lineTo(260,70);
barque.moveTo(240,70); barque.lineTo(260,70);
barque.moveTo(238,80); barque.lineTo(258,80);

barque.moveTo(290,110); barque.lineTo(300,70);
barque.moveTo(310,110); barque.lineTo(320,70);
barque.moveTo(300,70); barque.lineTo(320,70);
barque.moveTo(298,80); barque.lineTo(318,80);

barque.moveTo(350,110); barque.lineTo(360,70);
barque.moveTo(370,110); barque.lineTo(380,70);
barque.moveTo(360,70); barque.lineTo(380,70);
barque.moveTo(358,80); barque.lineTo(378,80);

barque.moveTo(410,110); barque.lineTo(420,70);
barque.moveTo(430,110); barque.lineTo(440,70);
barque.moveTo(420,70); barque.lineTo(440,70);
barque.moveTo(418,80); barque.lineTo(438,80);
barque.strokeStyle = "black";
barque.stroke();
barque.closePath();

////////Exercice3
let house = document.getElementById("mon_canvas3").getContext("2d");
house.beginPath();
//façade
house.fillStyle = "#eebf94";
house.fillRect(15, 120, 150, 150);
//fenêtre
house.fillStyle = "#94eee9";
house.fillRect(40, 150, 30, 30);
house.fillRect(110, 150, 30, 30);
//porte
house.fillStyle = "red";
house.fillRect(70,220,40,50);
//poignée de porte
house.arc(80,250,2,0,Math.PI*2);
house.fillStyle = "black";
//chassis
house.moveTo(55,150); house.lineTo(55,180);
house.moveTo(40,165); house.lineTo(70,165);
house.moveTo(125,150); house.lineTo(125,180);
house.moveTo(110,165); house.lineTo(140,165);
house.strokeStyle = "black";
house.stroke();
//toit
house.moveTo(15,120);house.lineTo(90,60); house.lineTo(165,120)
house.fillStyle = "red";
house.fill();
house.closePath();

////////Exercice4
let person = document.getElementById("mon_canvas4").getContext("2d");



////////Bonus