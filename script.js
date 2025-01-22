const pages = document.querySelectorAll('.page'); // Ambil semua elemen halaman
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
let currentIndex = 0; // Mulai dari halaman pertama

// Fungsi untuk mengaktifkan hamburger menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Fungsi untuk menutup menu saat overlay diklik
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

// Fungsi untuk memindahkan halaman
function fadeOutPage() {
    const currentPage = pages[currentIndex]; // Halaman aktif saat ini

    // Tambahkan kelas fade-out untuk efek menghilang
    currentPage.classList.add('fade-out');

    // Tunggu hingga animasi selesai (2 detik sesuai durasi CSS)
    setTimeout(() => {
        currentPage.classList.remove('active'); // Nonaktifkan halaman saat ini
        currentPage.classList.add('hidden'); // Tambahkan kelas untuk menyembunyikan sepenuhnya
        currentPage.classList.remove('fade-out'); // Hapus efek fade-out

        currentIndex++; // Pindah ke halaman berikutnya

        // Jika ada halaman berikutnya, tampilkan
        if (currentIndex < pages.length) {
            const nextPage = pages[currentIndex];
            nextPage.classList.add('active'); // Aktifkan halaman berikutnya
        }
    }, 2000); // Sesuai durasi transisi
}

// Jalankan efek fade-out saat halaman dimuat dan setelah 2 detik pindah ke halaman berikutnya
window.onload = () => {
    setTimeout(fadeOutPage, 2000); // Tunggu 2 detik agar halaman pertama terlihat, kemudian jalankan fadeOutPage
};
