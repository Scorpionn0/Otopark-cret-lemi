


function gonder(){

var gsaat = document.getElementById("giris-saat").value;
gsaat.value = "";

var csaat = document.getElementById("cikis-saat").value;
csaat.value = "";


if(csaat >=24 ){
	var not = document.getElementById("not");
	not.innerHTML=("Çıkış saati 24 ten fazla olmamalıdır!");
}
if(gsaat >=24 ){
	var not = document.getElementById("not");
	not.innerHTML=("Giriş saati 24 ten fazla olmamalıdır!");
}
var sonuc = csaat - gsaat;


	var tsaat = document.getElementById("tsaat");
	tsaat.innerHTML=(sonuc);



//var tsaat = document.getElementById("tsaat");
//tsaat.innerHTML=(sonuc);



var tutar = sonuc * 8;

var ttutar = document.getElementById("ttutar");
ttutar.innerHTML=(tutar);



}