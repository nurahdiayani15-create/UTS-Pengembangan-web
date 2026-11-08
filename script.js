// ==========================================
// 1. MENU NAVIGASI UNTUK LAYAR KECIL (MOBILE)
// ==========================================
const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("siteNav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
  });
}


// ==========================================
// 2. JAM DIGITAL PADA SIDEBAR
// ==========================================
function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("id-ID", { hour12: false });
  }
}

// Jalankan jam saat halaman dimuat dan perbarui tiap detik
updateClock();
setInterval(updateClock, 1000);


// ==========================================
// 3. FILTER FOTO GALERI
// ==========================================
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-category]");

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const selected = button.dataset.filter;
    
    // Hapus kelas 'selected' dari semua tombol, lalu pasang ke tombol yang diklik
    filterButtons.forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    
    // Tampilkan atau sembunyikan foto berdasarkan kategori
    galleryItems.forEach(function(photo) {
      if (selected === "all" || photo.dataset.category === selected) {
        photo.classList.remove("hidden");
      } else {
        photo.classList.add("hidden");
      }
    });
  });
});


// ==========================================
// 4. PESAN KONFIRMASI DEMO FORMULIR
// ==========================================
document.querySelectorAll(".demo-form").forEach(function(form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    
    if (message) {
      message.textContent = "Terima kasih! Formulir demo berhasil diperiksa. Pesan Anda telah kami terima.";
      message.classList.remove("hidden");
    }
    
    form.reset();
  });
});
