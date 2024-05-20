function myFunction() {
  // Ambil nilai dari input
  var Kapibara = parseFloat(document.getElementById("Kapibara").value);
  var Kapibara1 = parseFloat(document.getElementById("Kapibara1").value);
  var Kapibara2 = parseFloat(document.getElementById("Kapibara2").value);
  // Ambil nilai string dari dokumen html yang sudah ada
  var Kapibara3 = document.getElementById("Kapibara3").innerHTML;
  // Menjumlahkan perhitungan keliling segitiga dari 3 variabel yang sudah diinput
  var Hasil_Perhitungan = Kapibara + Kapibara1 + Kapibara2;
  // Menggabungkan semua proses yang sudah ada kedalam satu variabel
  var hasilString = Kapibara3 + "\nK = " + Kapibara + " + " + Kapibara1 + " + " + Kapibara2 + "\nK = " + Hasil_Perhitungan;
  // outputnya
  document.getElementById("Hasil_Perhitungan").innerText = hasilString;
}

function resetForm() {
  // Atur nilai semua elemen input ke nilai defaultnya
  document.getElementById("Kapibara").value = "";
  document.getElementById("Kapibara1").value = "";
  document.getElementById("Kapibara2").value = "";

  // Atur konten elemen output ke nilai defaultnya
  document.getElementById("Hasil_Perhitungan").innerText = "Hasil: ";
}

function myFunction2() {
  // Ambil nilai dari input
  var Kapibara5 = parseFloat(document.getElementById("Kapibara5").value);
  var Kapibara6 = parseFloat(document.getElementById("Kapibara6").value);
  // Ambil nilai string dari dokumen html yang sudah ada
  var Kapibara4 = document.getElementById("Kapibara4").innerHTML;
  var x = 0.5;
  // Menjumlahkan perhitungan keliling segitiga dari 2 variabel yang sudah diinput
  var Hasil_Perhitungan2 = x * Kapibara5 * Kapibara6;
  // Menggabungkan semua proses yang sudah ada kedalam satu variabel
  var hasilString2 = Kapibara4 + "\nL = " + x + " x " + Kapibara5 + " x " + Kapibara6 + "\nL = " + Hasil_Perhitungan2;
  // outputnya
  document.getElementById("Hasil_Perhitungan2").innerText = hasilString2;
}

function resetForm2() {
  // Atur nilai semua elemen input ke nilai defaultnya
  document.getElementById("Kapibara5").value = "";
  document.getElementById("Kapibara6").value = "";

  // Atur konten elemen output ke nilai defaultnya
  document.getElementById("Hasil_Perhitungan2").innerText = "Hasil: ";
}
