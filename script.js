// meregistrasi display
const display = document.getElementById("display");

// display hidden untuk perhitungan
const displayHidden = document.getElementById("display-hidden");

// let myResult = "";

// operator tidak tampil di display
function appendToDisplay(input) {
  displayHidden.value += input;

  // let tempNumber = displayHidden.value.split(/[+\-*/]/).filter(Boolean); // solved
  /**
   * ini cara yang dibantuin abang saya kak, tapi ini terlalu advance jadi saya tetap
   * pakai codingan saya yang saya paham aja, bisa di coba aja kak :D
   */

  // pengecualian agar . bisa muncul di display
  if (input === ".") {
    display.value += input;
  }
  // pengecualian agar isNaN(operator) tidak muncul di display
  // kalau mau pakai solved ke-2 yang ini di command
  else if (isNaN(input)) {
    display.value = "";
  }
  // jika isi display hidden == 1 / inputan pertama setelah sama dengan maka menampilkan sesuai apa yang di input
  else if (displayHidden.value.length == 1) {
    display.value = input;
  }

  // selai semua kondisi
  else {
    display.value += input;
    // display.value = tempNumber.at(-1); // solved
  }
}

function calculate() {
  // console.log(displayHidden.value, "ini hidden");

  console.log(typeof displayHidden.value);

  if (displayHidden.value) {
    // display mendapatkan hasil perhitungan dari display hidden
    display.value = eval(displayHidden.value);
  }

  // jika displayHidden tidak memiliki value maka ditampilkan string kosong
  displayHidden.value = "";
}

function clearDisplay() {
  // untuk menghapus display ketika menekan tombol AC
  display.value = "0";
  // untuk menghapus display hidden ketika menekan tombol AC
  displayHidden.value = "";
}
