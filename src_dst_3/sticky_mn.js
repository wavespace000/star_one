    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    const container = document.getElementById("dropdownContainer");
    
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        container.classList.remove("sticky"); // hapus sticky saat tertutup
    } else {
        dropdown.style.display = "block";
        container.classList.add("sticky"); // aktifkan sticky saat terbuka
    }
    }

    // Tutup dropdown jika klik di luar
    window.onclick = function(event) {
    const container = document.getElementById("dropdownContainer");
    const dropdown = document.getElementById("myDropdown");

    if (!event.target.matches('.dropbtn')) {
        if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        container.classList.remove("sticky");
        }
    }
    }