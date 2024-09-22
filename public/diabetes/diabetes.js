let currentPage = 1;

function showPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    currentPage = page;
    document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateDiabetes() {
    const form = document.forms["diabetesTest"];
    let score = 0;

    // Loop melalui semua elemen form, termasuk yang tersembunyi
    const selects = form.querySelectorAll("select");  // Pilih semua elemen <select> dalam form

    selects.forEach(select => {
        score += parseInt(select.value);
    });

    let resultText = "";
    let alertClass = "";

    // Berdasarkan standar PHQ-9
    if (score <= 4) {
        resultText = "Tingkat risiko diabetes Anda rendah.";
        alertClass = "alert alert-primary"; // Kelas untuk bg primary
    } else if (score <= 8) {
        resultText = "Anda mungkin berisiko mengalami diabetes ringan.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 12) {
        resultText = "Anda mungkin berisiko mengalami diabetes sedang.";
        alertClass = "alert alert-warning"; // Kelas untuk bg warning
    } else if (score <= 16) {
        resultText = "Anda mungkin berisiko tinggi mengalami diabetes.";
        alertClass = "alert alert-danger"; // Kelas untuk bg danger
    } else {
        resultText = "Anda sangat berisiko tinggi mengalami diabetes. Disarankan untuk mencari bantuan profesional.";
        alertClass = "alert alert-danger"; // Kelas untuk bg danger
    }

    document.getElementById("result").innerHTML = `
        <div class="${alertClass}">
            Skor Anda: ${score} - ${resultText}
        </div>
        <div class="alert alert-info mt-3">
            <strong>Disclaimer:</strong> Tes ini hanya bersifat informatif dan bukan merupakan pengganti diagnosis profesional. Jika Anda merasa perlu, kami sarankan untuk berkonsultasi dengan ahli kesehatan mental.
        </div>
    `;
}
