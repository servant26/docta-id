let currentPage = 1;

function showPage(page) {
  document.getElementById(`page-${currentPage}`).classList.remove('active-page');
  currentPage = page;
  document.getElementById(`page-${currentPage}`).classList.add('active-page');
}

function calculateInsomnia() {
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
