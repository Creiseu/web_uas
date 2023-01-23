function ceklogin(){
    const username = "Daud";
    const password = "Daud";

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    
    if((user == username) && (pass == password)){
        alert("Adalah Benar");
        clear();
    }else{
        alert("Adalah Salah");
    }
}

if(document.getElementById("masuk")) {
    document.getElementById("masuk").onclick = function(){
        ceklogin();
    }
}

if(document.getElementById("keluar")){
    document.getElementById("keluar").onclick = function(){    //penting
        clear();
    }    
}

function clear(){
    document.getElementById("user").value ="";
    document.getElementById("pass").value ="";
}

document.getElementById("time").onload = function(){
    let today = new Date();
    let dd = String(today.getDate());
    let yy = today.getFullYear();
    let tgl;

    today = dd + yy;
    tgl = document.getElementById('kode').value = "INV" + today + "001";
    Tempat();
}

document.getElementById("nama").onkeyup = function(){      //penting
    let txtnama = document.getElementById("nama").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("nama").value = txtnama2;
}

document.getElementById("btn").onclick = function(){   //penting
    let nama = document.getElementById('nama').value;
        if(nama == ""){
            alert('Masukkan nama terlebih dahulu')
        }
    let gender = document.getElementById('jk').value;
        if(nama == ""){
            alert("Masukkan gender terlebih dahulu")
        }

    let alamat = document.getElementById("alamat").value
        if(alamat == ""){
            alert("Masukkan Alamat Anda")
        }
    let tl = document.getElementById('tl').value;
        if(tl == ""){
            alert("Masukkan tanggal")
        }

    let Tempat = "";
        if(document.getElementById("Surabaya").checked == true){
            Tempat = "Surabaya"}
        if(document.getElementById("Sidoarjo").checked == true){
            Tempat = "Sidoarjo"}
        if(document.getElementById("Lainnya").checked == true){
            Tempat = "Lainnya"
        }
        if(Tempat == ""){
            alert("Masukkan Tempat Lahir")
        }
    
    // total(tl,harga); 
            
    document.getElementById('data1').innerHTML=nama;
    document.getElementById('data2').innerHTML=gender;
    document.getElementById('data4').innerHTML=tl;
    document.getElementById('data7').innerHTML=Tempat;
    document.getElementById('data3').innerHTML=alamat
}
function checktextarea() {
    var minLength = 15;
    var $textarea = document.getElementById('alamat');
    if($textarea.text().split(/\s+/).length < minLength) {
      alert('You need to enter at least ' + minLength + ' words');
        return false;
    }
    }
// function combobox(){
//     let jenis = document.getElementById('form1').alamat.value;
//     if(jenis == "Makanan"){
//         document.getElementById('data3').innerHTML="Makanan";
//     }
//     if(jenis == "Minuman"){
//         document.getElementById('data3').innerHTML="Minuman";
//     }
//     else if(jenis == "Snack"){
//         document.getElementById('data3').innerHTML="Snack";
//     }
// }

// function total(tl, harga){
//     let diskon;
//     if(tl>10){
//         diskon = document.getElementById('data5').innerHTML="2%"
//     }
//     else{
//         diskon = document.getElementById('data5').innerHTML="0%"
//     }
//     if(diskon == "2%"){
//         let first = (tl*harga)*2/100;
//         let sc = (tl*harga)-first;
//         document.getElementById('data6').innerHTML = sc
//     }
//     else{
//         first = (tl*harga);
//         document.getElementById('data6').innerHTML = first;
//     }
// }

document.getElementById('jk').onchange=function(){
    let bs=document.getElementById("jk").value
    let harga=0;
    if(bs == "Laki-Laki"){
        harga = "No Cars?";
    }   
    if(bs == "Wanita"){
        harga = "No Dishes?";
    }
    // else{
    //     harga = 3000;
    // }
    document.getElementById('harga').value = harga;
}
function Tempat(){
    let carabayar = ["Surabaya", "Sidoarjo", "Lainnya"];
    let jenis = "";
    for (let i=0;i<carabayar.length; i++){
        jenis +='<input class="form-check-input" type="radio" name="carabayar" id= "'+carabayar[i]+'" />' +carabayar[i]+"";
    }
    document.getElementById("tempat").innerHTML = jenis;
}
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   const form = document.getElementById('form');

//   if (form.style.display === 'none') {
//     // 👇️ this SHOWS the form
//     form.style.display = 'block';
//   } else {
//     // 👇️ this HIDES the form
//     form.style.display = 'none';
//   }
// })