// function ceklogin(){
//     const username = "Daud";
//     const password = "Daud";

//     let user = document.getElementById("user").value;
//     let pass = document.getElementById("pass").value;
    
//     if((user == username) && (pass == password)){
//         alert("Adalah Benar");
//         clear();
//     }else{
//         alert("Adalah Salah");
//     }
// }
// document.getElementById("masuk").onclick = function(){
//     ceklogin();
// }
// document.getElementById("keluar").onclick = function(){
//     clear();
// }
// function clear(){
//     document.getElementById("user").value ="";
//     document.getElementById("pass").value ="";
// }

document.getElementById("time").onload = function(){
    let today = new Date();
    let dd = String(today.getDate());
    let yy = today.getFullYear();
    let tgl;

    today = dd + yy;
    tgl = document.getElementById('kode').value = "INV" + today + "001";
    pembayaran();
}

document.getElementById("kmenu").onkeyup = function(){
    let txtnama = document.getElementById("kmenu").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("kmenu").value = txtnama2;
}

document.getElementById("btn").onclick = function(){
    let menu = document.getElementById('kmenu').value;

    let nama = document.getElementById('nmenu').value;

    combobox();
    
    let jb = document.getElementById('jb').value;

    let pembayaran = "";
        if(document.getElementById("Tunai").checked == true){
            pembayaran = "Tunai"}
        if(document.getElementById("NonTunai").checked == true){
            pembayaran = "Non-Tunai"}
        if(pembayaran == ""){
            alert("Wajib Dipilih")
        }

    let harga = document.getElementById('harga').value;
    
    total(jb,harga); 
            
    document.getElementById('data1').innerHTML=menu;
    document.getElementById('data2').innerHTML=nama;
    document.getElementById('data4').innerHTML=jb;
    document.getElementById('data7').innerHTML=pembayaran;
}
function combobox(){
    let jenis = document.getElementById('form1').jm.value;
    if(jenis == "Makanan"){
        document.getElementById('data3').innerHTML="Makanan";
    }
    if(jenis == "Minuman"){
        document.getElementById('data3').innerHTML="Minuman";
    }
    else if(jenis == "Snack"){
        document.getElementById('data3').innerHTML="Snack";
    }
}

function total(jb, harga){
    let diskon;
    if(jb>10){
        diskon = document.getElementById('data5').innerHTML="2%"
    }
    else{
        diskon = document.getElementById('data5').innerHTML="0%"
    }
    if(diskon == "2%"){
        let first = (jb*harga)*2/100;
        let sc = (jb*harga)-first;
        document.getElementById('data6').innerHTML = sc
    }
    else{
        first = (jb*harga);
        document.getElementById('data6').innerHTML = first;
    }
}

document.getElementById('nmenu').onchange=function(){
    let bs=document.getElementById("nmenu").value
    let harga=0;
    if(bs == "Bakso"){
        harga = 20000;
    }
    if(bs == "Mie Ayam"){
        harga = 10000;
    }
    else{
        harga = 3000;
    }
    document.getElementById('harga').value = harga;
}
function pembayaran(){
    let carabayar = ["Tunai", "NonTunai"];
    let jenis = "";
    for (let i=0;i<carabayar.length; i++){
        jenis +='<input class="form-check-input" type="radio" name="carabayar" id= "'+carabayar[i]+'" />' +carabayar[i]+"";
    }
    document.getElementById("jenisbayar").innerHTML = jenis;
}
