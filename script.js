let scoretimeA = 0;
let scoretimeB = 0;

let nilaitimA = document.getElementById("scoretimeA");
let nilaitimB = document.getElementById("scoretimeB");

// Fungsi untuk menambah skor
let tambahskor = (tim) => {
  if (tim === "timA") {
    scoretimeA++;
    nilaitimA.textContent = scoretimeA;
  } else if (tim === "timB") {
    scoretimeB++;
    nilaitimB.textContent = scoretimeB;
  }
};

// Fungsi untuk mengurangi skor
let kurangskor = (tim) => {
  if (tim === "timA" && scoretimeA > 0) {
    scoretimeA--;
    nilaitimA.textContent = scoretimeA;
  } else if (tim === "timB" && scoretimeB > 0) {
    scoretimeB--;
    nilaitimB.textContent = scoretimeB;
  }
};

// Ambil semua tombol tambah dan kurang
let tambahButtons = document.querySelectorAll(".tambah");
let kurangButtons = document.querySelectorAll(".kurang");

// Tambahkan event listener untuk tombol tambah
tambahButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let tim = button.getAttribute("data-tim");
    tambahskor(tim);
  });
});

// Tambahkan event listener untuk tombol kurang
kurangButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let tim = button.getAttribute("data-tim");
    kurangskor(tim);
  });
});
