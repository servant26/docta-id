let currentPage = 1;

function showPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    currentPage = page;
    document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateJantung() {
    let score = 0;

    // Ambil semua elemen select dari setiap halaman
    for (let i = 1; i <= 3; i++) {
        const selects = document.querySelectorAll(`#page-${i} select`);
        
        selects.forEach(select => {
            score += parseInt(select.value);
        });
    }

    let resultText = "";
    let alertClass = "";

    if (score <= 5) {
        resultText = "Risiko penyakit jantung Anda rendah. Pertahankan gaya hidup sehat dan lakukan pemeriksaan rutin.";
        alertClass = "alert alert-primary"; // Kelas untuk bg primary
    } else if (score <= 10) {
        resultText = "Anda memiliki risiko sedang untuk penyakit jantung. Disarankan untuk memperhatikan pola makan dan rutin berolahraga.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 15) {
        resultText = "Risiko penyakit jantung Anda tinggi. Anda harus mempertimbangkan untuk berkonsultasi dengan dokter dan melakukan perubahan gaya hidup.";
        alertClass = "alert alert-danger"; // Kelas untuk bg danger
    } else {
        resultText = "Risiko penyakit jantung Anda sangat tinggi. Segera konsultasikan dengan dokter untuk mendapatkan perawatan yang tepat.";
        alertClass = "alert alert-danger"; // Kelas untuk bg danger
    }
    
    document.getElementById("result").innerHTML = `
        <div class="${alertClass}">
            Skor Anda: ${score} - ${resultText}
        </div>
        <div class="alert alert-info mt-3">
            <strong>Disclaimer:</strong> Tes ini hanya bersifat informatif dan bukan merupakan pengganti diagnosis profesional. Jika Anda merasa perlu, kami sarankan untuk berkonsultasi dengan ahli kesehatan.
        </div>
    `;
}
