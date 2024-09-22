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

    if (score <= 4) {
        resultText = "Kualitas tidur Anda cukup baik. Tidak ada indikasi masalah insomnia.";
        alertClass = "alert alert-primary"; // Kelas untuk bg primary
    } else if (score <= 8) {
        resultText = "Anda mungkin mengalami gangguan tidur ringan. Pertimbangkan untuk mengatur rutinitas tidur yang lebih baik.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 12) {
        resultText = "Anda mungkin mengalami gangguan tidur sedang. Disarankan untuk mulai mengevaluasi kebiasaan tidur dan mencari solusi.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else {
        resultText = "Anda mungkin mengalami insomnia berat. Disarankan untuk segera mencari bantuan profesional.";
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
