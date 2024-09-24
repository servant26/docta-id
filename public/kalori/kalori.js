document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);

    // Hitung BMR menggunakan rumus Mifflin-St Jeor
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // untuk pria
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // untuk wanita
    }

    // Hitung kebutuhan kalori harian
    const dailyCalories = (bmr * activityLevel).toFixed(2);

    let alertClass;
    let suggestions;

    // Tentukan warna dan saran berdasarkan kebutuhan kalori
    if (dailyCalories < 1800) {
        alertClass = 'alert alert-danger'; // Kalori rendah
        suggestions = `
        "Hei, mungkin kamu perlu sedikit menambah asupan kalori, ya! Coba deh, perbanyak makan makanan sehat seperti kacang, yogurt, dan buah-buahan. Untuk aktivitasnya, kamu bisa coba jalan santai atau yoga ringan. Semua itu bisa bikin kamu merasa lebih baik, semangat yaa!"
        `;
    } else if (dailyCalories < 2500) {
        alertClass = 'alert alert-success'; // Kalori cukup
        suggestions = `
        "Kabar baik :D kebutuhan kalori kamu sudah seimbang lho! Yuk, terus pertahankan pola makan sehat dengan banyak sayuran, biji-bijian, dan protein. Selain itu coba deh jogging atau bersepeda 3-5 kali seminggu. Dijamin bikin kamu lebih bugar!"
        `;
    } else {
        alertClass = 'alert alert-warning'; // Kalori berlebih
        suggestions = `
        "Kebutuhan kalori kamu memang tinggi, jadi penting untuk memperhatikan jenis makanan yang kamu konsumsi. Cobalah pilih makanan yang rendah lemak dan tinggi serat, ya! Untuk aktivitasnya, latihan kekuatan dan olahraga aerobik bisa jadi pilihan yang seru dan bermanfaat. Semangat!"
        `;
    }

    // Tampilkan hasil dengan alert sesuai kategori
    document.getElementById('result').innerHTML = `
    <div class="${alertClass}">
        <div class="calorie-result">Kebutuhan Kalori Harian Anda: <strong>${dailyCalories} kalori</strong></div>
        <div class="calorie-description">${suggestions}</div>
    </div>
`;


    // Tampilkan saran
    document.getElementById('suggestions').innerHTML = `
        <div class="alert alert-info mt-3 small-text">
            <strong>Disclaimer:</strong> Hasil ini bersifat informatif dan tidak menggantikan saran medis profesional. Pastikan untuk berkonsultasi dengan ahli gizi atau dokter jika perlu.
        </div>
    `;

    // Gulir ke bagian hasil
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
});
