let saldo = 1000000; // Define saldo awal

//Buat fungsi input pin jika benar masuk jika salah ulang
function masukkanPin() {
    let pin = prompt("Masukkan PIN Anda:");
    if (pin === "1010") {
        alert("PIN Anda Benar.Hallo Ada yang bisa di bantu!");
        return true;
    } else {
        alert("PIN Anda Salah. Coba lagi.");
        return false;
    }
}

//fungsi cek saldo yang sudah di define
function cekSaldo() {
    alert("Saldo Anda saat ini: " + saldo);
}

//fungsion transfer jika melakukan transfer
function transfer() {
    //menggunakan parsefloat untuk konversi inputan ke float
    let jumlahTransfer = parseFloat(prompt("Masukkan jumlah transfer:"));
    //transfer tidak boleh kurang dari 0 alias minus
    if (isNaN(jumlahTransfer) || jumlahTransfer <= 0) {
        alert("Masukkan jumlah transfer yang valid.");
        return;
    }
    //kondisi transferan melebihi baudget dari saldo sendiri
    if (jumlahTransfer > saldo) {
        alert("Saldo tidak mencukupi untuk transfer tersebut.");
    } else {
        //jika saldo yg akan ditransfer tidak melebihi budget akan diminta rekening dan jumlah nominalnya
        let rekeningTujuan = prompt("Masukkan nomor rekening tujuan:");
        alert("Transfer sebesar " + jumlahTransfer + " ke rekening " + rekeningTujuan + " berhasil.");
        
        //mengecek saldo ketika sudah melakukan proses transfer
        saldo -= jumlahTransfer;
        alert("Saldo Anda saat ini: " + saldo);
    }
}

function penarikan() {
    let jumlahpenarikan = parseFloat(prompt("Masukan Jumlah Penarikan"));
    if(isNaN(jumlahpenarikan)||jumlahpenarikan <= 0) {
        alert("Masukan Jumlah Penarikan Yang Valid");
        return;
    }
    if(jumlahpenarikan > saldo){
        alert("Saldo Tidak Mencukupi untuk mengambil penarikan");
    }else{
        alert("Transfer sebesar" + jumlahpenarikan + "berhasil");

        saldo -= jumlahpenarikan;
        alert("Saldo Anda Saat ini" + saldo);
    }
}

function keluar() {
    //buat function keluar
    alert("Terima kasih,Sudah menggunakan ATM ini");
}

//function pilihan menu
function mainMenu() {
    while (true) {
        let pilihan = prompt("Pilih menu:\n1. Cek Saldo\n2. Transfer\n3. penarikan\n4. keluar\n");
        
        //buat switch case untuk penentuan pilihan function mana yg akan dijalankan
        switch (pilihan) {
            case "1":
                cekSaldo();
                break;
            case "2":
                transfer();
                break;
            case "3":
                penarikan();
                break;
            case "4":
                keluar();
                return;
            default:
                alert("Pilihan tidak valid. Coba lagi.");
        }
    }
}

// Program Utama
if (masukkanPin()) {
    mainMenu();
}