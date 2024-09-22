let currentPage = 1;

function showPage(page) {
  document.getElementById(`page-${currentPage}`).classList.remove('active-page');
  currentPage = page;
  document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateDepression() {
    const form = document.forms["depressionTest"];
    let score = 0;

    for (let i = 0; i < form.length; i++) {
        if (form[i].type === "select-one") {
            score += parseInt(form[i].value);
        }
    }

    let resultText = "";
    let alertClass = "";

    if (score <= 10) {
        resultText = "Risiko kolesterol Anda rendah. Pertahankan gaya hidup sehat untuk menjaga kadar kolesterol Anda.";
        alertClass = "alert alert-primary"; // Kelas untuk bg primary
    } else if (score <= 20) {
        resultText = "Anda memiliki risiko sedang untuk kolesterol tinggi. Disarankan untuk mulai memperhatikan pola makan dan rutinitas olahraga.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 30) {
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
}
