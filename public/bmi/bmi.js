document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi ke meter

    // Hitung BMI
    const bmi = (weight / (height * height)).toFixed(2);
    let category;
    let deskripsi;
    let imageSrc;
    let alertClass;

    // Kategorisasi BMI
    if (bmi < 18.5) {
        category = 'Kurus';
        deskripsi = 'Hmm, sepertinya berat badan kamu agak rendah. Yuk, coba perhatikan asupan makan dan jaga kesehatan dengan baik!';
        imageSrc = '../kurus.jpg'; // Ganti dengan URL gambar orang kurus
        alertClass = "alert alert-warning";
    } else if (bmi < 24.9) {
        category = 'Normal';
        deskripsi = 'Bagus banget! Kamu ada di kategori berat badan normal. Terus jaga pola hidup sehat ya, dan tetap aktif! Keren banget!';
        imageSrc = '../normal.jpg'; // Ganti dengan URL gambar orang normal
        alertClass = "alert alert-success";
    } else if (bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        deskripsi = 'Kayaknya kamu mungkin mengalami sedikit kelebihan berat badan. Coba pertimbangkan langkah-langkah kecil untuk hidup lebih sehat!';
        imageSrc = '../berlebih.jpg'; // Ganti dengan URL gambar orang kelebihan berat
        alertClass = "alert alert-warning";
    } else {
        category = 'Kegemukan (Obesitas)';
        deskripsi = 'Sepertinya kamu ada di kategori kegemukan. Ini bisa jadi saat yang tepat untuk merenung dan mencari cara baru untuk lebih sehat.';
        imageSrc = '../obesitas.jpg'; // Ganti dengan URL gambar orang obesitas
        alertClass = "alert alert-danger";
    }
    
    // Tampilkan hasil dengan alert
    document.getElementById('result').innerHTML = `
        <div class="${alertClass}">
            BMI Anda: <strong>${bmi}</strong> - <strong>${category}</strong><br>
            <p class="bmi-description">${deskripsi}</p>
            <img src="${imageSrc}" alt="${category}" class="bmi-image" />
        </div>
        <div class="alert alert-info mt-3 small-text">
            <strong>Disclaimer:</strong> Hasil ini bersifat informatif dan tidak menggantikan saran medis profesional.
        </div>
    `;
    
    // Gulir ke bagian hasil
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
});
