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

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        Kebutuhan Kalori Harian Anda: <strong>${dailyCalories} kalori</strong>
    `;

    // Berikan saran berdasarkan kalori
    let suggestions;
    if (dailyCalories < 1800) {
        suggestions = `
        "Hei, mungkin kamu perlu sedikit menambah asupan kalori, ya! Coba deh, perbanyak makan makanan sehat seperti kacang, yogurt, dan buah-buahan. Untuk aktivitasnya, kamu bisa coba jalan santai atau yoga ringan. Semua itu bisa bikin kamu merasa lebih baik, semangat yaa!"
        `;
    } else if (dailyCalories < 2500) {
        suggestions = `
        "Kabar baik :D kebutuhan kalori kamu sudah seimbang lho! Yuk, terus pertahankan pola makan sehat dengan banyak sayuran, biji-bijian, dan protein. Selain itu Coba deh jogging atau bersepeda 3-5 kali seminggu. Dijamin bikin kamu lebih bugar!"
        `;
    } else {
        suggestions = `
        "Kebutuhan kalori kamu memang tinggi, jadi penting untuk memperhatikan jenis makanan yang kamu konsumsi. Cobalah pilih makanan yang rendah lemak dan tinggi serat, ya! Untuk aktivitasnya, latihan kekuatan dan olahraga aerobik bisa jadi pilihan yang seru dan bermanfaat. Semangat!"
        `;
    }

    document.getElementById('suggestions').innerHTML = suggestions;
});