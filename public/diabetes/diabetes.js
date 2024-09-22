let currentPage = 1;

function showPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    currentPage = page;
    document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateDiabetes() {
    let score = 0;

    // Ambil semua elemen <select> dari setiap halaman
    for (let i = 1; i <= 3; i++) {
        const selects = document.querySelectorAll(`#page-${i} select`);

        selects.forEach(select => {
            score += parseInt(select.value);
        });
    }

    let resultText = "";
    let alertClass = "";

    // Penilaian berdasarkan risiko diabetes
    if (score <= 2) {
        resultText = "Tingkat risiko diabetes Anda rendah.";
        alertClass = "alert alert-primary";
    } else if (score <= 5) {
        resultText = "Anda mungkin berisiko mengalami diabetes ringan.";
        alertClass = "alert alert-warning";
    } else if (score <= 8) {
        resultText = "Anda mungkin berisiko mengalami diabetes sedang.";
        alertClass = "alert alert-warning";
    } else if (score <= 11) {
        resultText = "Anda mungkin berisiko tinggi mengalami diabetes.";
        alertClass = "alert alert-danger";
    } else {
        resultText = "Anda sangat berisiko tinggi mengalami diabetes. Disarankan untuk mencari bantuan profesional.";
        alertClass = "alert alert-danger";
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
