let currentPage = 1;

function showPage(page) {
  document.getElementById(`page-${currentPage}`).classList.remove('active-page');
  currentPage = page;
  document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateDepression() {
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

    if (score <= 4) {
        resultText = "Tingkat depresi Anda tidak ada.";
        alertClass = "alert alert-primary";
    } else if (score <= 9) {
        resultText = "Anda mungkin mengalami depresi ringan.";
        alertClass = "alert alert-warning";
    } else if (score <= 14) {
        resultText = "Anda mungkin mengalami depresi sedang.";
        alertClass = "alert alert-warning";
    } else if (score <= 19) {
        resultText = "Anda mungkin mengalami depresi berat.";
        alertClass = "alert alert-danger";
    } else {
        resultText = "Anda mungkin mengalami depresi sangat berat. Disarankan untuk mencari bantuan profesional.";
        alertClass = "alert alert-danger";
    }

    document.getElementById("result").innerHTML = `
        <div class="${alertClass}">
            Skor Anda: ${score} - ${resultText}
        </div>
        <div class="alert alert-info mt-3">
            <strong>Disclaimer:</strong> Tes ini hanya bersifat informatif dan bukan merupakan pengganti diagnosis profesional. Jika Anda merasa perlu, kami sarankan untuk berkonsultasi dengan ahli kesehatan mental.
        </div>
    `;
        // Scroll ke elemen hasil
        document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}
