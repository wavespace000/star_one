const img = document.getElementById("gambar1");
const overlay = document.getElementById("overlay");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.getElementById("closeBtn");

img.addEventListener("click", () => {
  fullImage.src = img.src;     // tampilkan gambar yang sama
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none"; // klik di luar gambar juga tutup
});