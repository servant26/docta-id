let currentPage = 1;

function showPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    currentPage = page;
    document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateCholestrol() {
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

    // Penilaian berdasarkan risiko kolesterol
    if (score <= 4) {
        resultText = "Risiko kolesterol Anda rendah. Pertahankan gaya hidup sehat untuk menjaga kadar kolesterol Anda.";
        alertClass = "alert alert-primary"; // Kelas untuk bg primary
    } else if (score <= 8) {
        resultText = "Anda memiliki risiko sedang untuk kolesterol tinggi. Disarankan untuk mulai memperhatikan pola makan dan rutinitas olahraga.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 12) {
        resultText = "Risiko kolesterol Anda tinggi. Anda harus mempertimbangkan untuk berkonsultasi dengan dokter dan membuat perubahan gaya hidup.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else {
        resultText = "Risiko kolesterol Anda sangat tinggi. Segera konsultasikan dengan dokter untuk mendapatkan perawatan yang lebih intensif.";
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
        // Scroll ke elemen hasil
        document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}
