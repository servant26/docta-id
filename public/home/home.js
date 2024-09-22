
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
        },
    });

    const tantanganList = [
        "Minum 8 gelas air.",
        "Jalan kaki 10.000 langkah.",
        "Lakukan stretching 10 menit.",
        "Makan 1 porsi buah segar.",
        "Tidur 8 jam penuh.",
        "Berjalan kaki 30 menit di luar ruangan.",
        "Meditasi selama 10 menit.",
        "Kurangi asupan gula hari ini.",
        "Lakukan 20 squat.",
        "Tidak minum minuman bersoda.",
        "Makan sayuran hijau setiap kali makan.",
        "Lakukan plank selama 1 menit.",
        "Tidak makan makanan olahan.",
        "Lakukan latihan pernapasan 5 menit.",
        "Minum teh hijau tanpa gula.",
        "Lakukan push-up 10 kali.",
        "Bersepeda 30 menit.",
        "Cobalah makan tanpa distraksi (TV, ponsel).",
        "Lakukan yoga 15 menit.",
        "Kurangi konsumsi garam hari ini.",
        "Makan makanan kaya serat.",
        "Berdiri dan regangkan tubuh setiap jam.",
        "Lakukan latihan otot inti (core) 10 menit.",
        "Hindari gorengan hari ini.",
        "Tidur lebih awal 30 menit dari biasanya.",
        "Lakukan burpee 10 kali.",
        "Buat smoothie hijau.",
        "Jalan cepat selama 20 menit.",
        "Minum air jeruk nipis hangat di pagi hari.",
        "Konsumsi makanan tinggi protein.",
        "Berjalan tanpa alas kaki di alam.",
        "Lakukan peregangan setelah bangun tidur.",
        "Buat salad untuk makan siang.",
        "Hindari makanan cepat saji hari ini.",
        "Lakukan jumping jack 20 kali.",
        "Tidur siang 20 menit.",
        "Kurangi kafein.",
        "Berjalan santai di taman.",
        "Makan malam tanpa karbohidrat.",
        "Lakukan latihan HIIT 15 menit.",
        "Konsumsi kacang-kacangan untuk camilan.",
        "Kurangi screen time malam hari.",
        "Lakukan stretching kaki 10 menit.",
        "Tidak makan makanan manis hari ini.",
        "Coba olahraga baru (misal: pilates).",
        "Minum jus sayuran.",
        "Lakukan peregangan punggung 5 menit.",
        "Hindari ngemil larut malam.",
        "Makan malam rendah kalori.",
        "Fokus pada postur tubuh sepanjang hari.",
        "Lakukan latihan tangan 10 menit.",
        "Buat jadwal tidur yang konsisten.",
        "Konsumsi ikan atau protein laut.",
        "Hindari konsumsi alkohol hari ini.",
        "Lakukan sit-up 20 kali.",
        "Konsumsi lebih banyak biji-bijian utuh.",
        "Lakukan aktivitas fisik selama 30 menit.",
        "Mandi air dingin setelah olahraga.",
        "Konsumsi makanan probiotik (misal: yogurt).",
        "Tidak makan camilan antara makan besar.",
        "Meditasi sebelum tidur.",
        "Lakukan latihan kekuatan tubuh bagian atas.",
        "Makan makanan berserat tinggi.",
        "Konsumsi vitamin C.",
        "Tidak menonton TV sepanjang hari.",
        "Lakukan squat jump 15 kali.",
        "Kurangi asupan makanan berminyak.",
        "Konsumsi makanan kaya kalsium.",
        "Lakukan jalan kaki cepat selama 15 menit.",
        "Cobalah intermittent fasting.",
        "Minum air sebelum makan.",
        "Lakukan latihan otot kaki.",
        "Tidak minum minuman manis hari ini.",
        "Lakukan 5 menit push-up.",
        "Fokus pada pernapasan saat berolahraga.",
        "Konsumsi makanan rendah gula.",
        "Lakukan peregangan bahu dan leher.",
        "Lakukan crunches 20 kali.",
        "Berjalan-jalan di alam selama 1 jam.",
        "Hindari karbohidrat olahan.",
        "Makan camilan sehat seperti kacang atau buah.",
        "Lakukan latihan perut 15 menit.",
        "Coba teknik pernapasan 4-7-8.",
        "Minum air putih setelah bangun tidur.",
        "Lakukan olahraga ringan sebelum tidur.",
        "Konsumsi dark chocolate (85% kakao).",
        "Fokus pada postur saat duduk.",
        "Lakukan peregangan punggung bawah.",
        "Hindari makanan berlemak tinggi.",
        "Lakukan lunges 15 kali.",
        "Cobalah teknik mindfulness eating.",
        "Buat rencana makan sehat selama seminggu.",
        "Lakukan latihan otot bahu.",
        "Konsumsi lebih banyak sayuran warna-warni.",
        "Jalan kaki naik-turun tangga 5 kali.",
        "Tidak mengkonsumsi kafein setelah jam 2 siang.",
        "Lakukan olahraga kardio 20 menit.",
        "Kurangi screen time sebelum tidur.",
        "Coba olahraga air (berenang, aqua aerobik).",
        "Minum air lemon sebelum tidur."
    ];

    // Fungsi untuk mendapatkan tantangan acak
    function getRandomTantangan() {
        const randomIndex = Math.floor(Math.random() * tantanganList.length);
        return tantanganList[randomIndex];
    }

    // Tampilkan tantangan acak saat halaman di-load
    document.getElementById('tantangan-text').textContent = getRandomTantangan();



    const faktaList = [
        "Minum cukup air setiap hari penting untuk menjaga fungsi tubuh.",
        "Kurang tidur bisa menyebabkan masalah kesehatan seperti obesitas dan diabetes.",
        "Berjalan kaki 30 menit sehari dapat meningkatkan kesehatan jantung.",
        "Makan banyak sayuran berwarna-warni memberikan berbagai nutrisi penting.",
        "Stres kronis dapat melemahkan sistem kekebalan tubuh.",
        "Peregangan rutin membantu menjaga fleksibilitas dan mencegah cedera.",
        "Otot lebih aktif dalam membakar kalori dibandingkan dengan lemak.",
        "Sarapan yang sehat membantu mengontrol berat badan sepanjang hari.",
        "Konsumsi makanan tinggi serat membantu mencegah sembelit.",
        "Olahraga meningkatkan kadar endorfin, yang dapat meningkatkan suasana hati.",
        "Vitamin D sangat penting untuk kesehatan tulang.",
        "Dehidrasi ringan bisa mengurangi konsentrasi dan fokus.",
        "Menghindari makanan olahan dapat meningkatkan kesehatan secara keseluruhan.",
        "Kekurangan zat besi bisa menyebabkan kelelahan.",
        "Mengatur pola makan dengan porsi kecil dan sering lebih baik daripada makan besar sekaligus.",
        "Tidur siang sebentar dapat meningkatkan energi dan fokus.",
        "Mengurangi konsumsi gula tambahan dapat menurunkan risiko penyakit jantung.",
        "Berjemur di bawah sinar matahari pagi membantu tubuh menghasilkan vitamin D.",
        "Konsumsi makanan probiotik dapat mendukung kesehatan pencernaan.",
        "Makanan yang kaya akan omega-3, seperti ikan, mendukung kesehatan otak.",
        "Kebersihan tangan yang baik dapat mencegah penyebaran penyakit.",
        "Sering tertawa baik untuk kesehatan jantung dan menurunkan stres.",
        "Berolahraga di pagi hari dapat meningkatkan metabolisme sepanjang hari.",
        "Mengonsumsi makanan yang rendah sodium membantu menjaga tekanan darah stabil.",
        "Latihan pernapasan dalam membantu meredakan kecemasan.",
        "Kopi dalam jumlah sedang bisa memberikan manfaat antioksidan.",
        "Makan perlahan-lahan bisa membantu pencernaan dan mencegah makan berlebihan.",
        "Kurangnya aktivitas fisik adalah faktor risiko utama untuk penyakit jantung.",
        "Olahraga rutin membantu menjaga kesehatan mental dan fisik.",
        "Makan lebih banyak protein membantu membangun dan memperbaiki jaringan tubuh.",
        "Kekurangan magnesium bisa menyebabkan kram otot dan kelelahan.",
        "Menghindari merokok adalah salah satu cara terbaik untuk melindungi kesehatan paru-paru.",
        "Mengurangi konsumsi alkohol dapat menurunkan risiko kanker.",
        "Serat larut membantu menurunkan kadar kolesterol darah.",
        "Tidur yang cukup membantu dalam proses regenerasi sel.",
        "Olahraga angkat beban membantu meningkatkan kepadatan tulang.",
        "Minum teh hijau dapat meningkatkan metabolisme dan membakar lemak.",
        "Menghindari makanan cepat saji dapat membantu mencegah obesitas.",
        "Tidur yang teratur membantu menjaga kesehatan kognitif.",
        "Makan malam lebih awal membantu pencernaan dan tidur yang nyenyak.",
        "Pola makan vegetarian bisa membantu menurunkan risiko penyakit jantung.",
        "Menghirup udara segar setiap hari baik untuk kesehatan mental.",
        "Konsumsi kacang-kacangan membantu menyehatkan jantung.",
        "Berjalan tanpa alas kaki di alam dapat meningkatkan keseimbangan dan postur.",
        "Mengonsumsi makanan antioksidan membantu melawan radikal bebas.",
        "Mengonsumsi air kelapa dapat membantu menjaga keseimbangan elektrolit.",
        "Jeda dalam bekerja selama 5 menit bisa meningkatkan produktivitas dan kesehatan mental.",
        "Mengurangi asupan lemak jenuh membantu menjaga berat badan yang sehat.",
        "Konsumsi buah-buahan citrus mendukung sistem kekebalan tubuh.",
        "Olahraga teratur membantu mengatur kadar insulin dan mencegah diabetes.",
        "Serat membantu mengatur kadar gula darah.",
        "Tidur dengan posisi yang baik dapat mencegah sakit punggung.",
        "Mengurangi konsumsi karbohidrat olahan dapat membantu menurunkan berat badan.",
        "Pola makan seimbang penting untuk menjaga energi sepanjang hari.",
        "Mendengarkan musik favorit dapat meningkatkan suasana hati dan mengurangi stres.",
        "Mengkonsumsi vitamin C secara rutin mendukung kesehatan kulit dan sistem imun.",
        "Minum air hangat di pagi hari membantu pencernaan.",
        "Olahraga meningkatkan aliran darah ke otak, membantu memori dan fungsi kognitif.",
        "Konsumsi lemak sehat seperti alpukat dan minyak zaitun mendukung kesehatan jantung.",
        "Berolahraga secara teratur membantu meningkatkan kualitas tidur.",
        "Cokelat hitam kaya akan antioksidan dan baik untuk kesehatan jantung.",
        "Melakukan meditasi setiap hari membantu mengurangi kecemasan dan depresi.",
        "Makan malam ringan dan rendah kalori membantu menjaga berat badan.",
        "Menghindari stres kronis penting untuk kesehatan mental dan fisik.",
        "Olahraga secara rutin membantu meningkatkan kekuatan dan daya tahan tubuh.",
        "Asupan kalsium yang cukup penting untuk mencegah osteoporosis.",
        "Menghindari makan larut malam membantu pencernaan dan metabolisme.",
        "Makan makanan berwarna cerah memberikan berbagai vitamin dan mineral.",
        "Vitamin B12 penting untuk fungsi otak dan kesehatan sistem saraf.",
        "Mengunyah makanan dengan baik dapat membantu pencernaan.",
        "Olahraga membantu meningkatkan suasana hati dengan melepaskan endorfin.",
        "Menghindari makan berlebihan membantu menjaga berat badan yang sehat.",
        "Konsumsi serat membantu menurunkan risiko kanker usus.",
        "Berjemur di bawah sinar matahari pagi membantu meningkatkan suasana hati.",
        "Menghindari makanan tinggi gula dapat membantu mengontrol kadar gula darah.",
        "Melakukan yoga membantu meredakan ketegangan otot dan meningkatkan fleksibilitas.",
        "Olahraga aerobik membantu meningkatkan kesehatan paru-paru.",
        "Konsumsi protein dalam setiap makanan membantu menjaga otot tetap kuat.",
        "Mengonsumsi makanan rendah glikemik membantu menjaga kadar gula darah stabil.",
        "Tidur yang cukup membantu meningkatkan sistem kekebalan tubuh.",
        "Mengurangi konsumsi makanan olahan dapat membantu menurunkan peradangan.",
        "Berolahraga di luar ruangan dapat meningkatkan kadar vitamin D secara alami.",
        "Konsumsi makanan yang kaya akan serat membantu menjaga kesehatan usus.",
        "Menghindari stres dapat membantu mencegah masalah pencernaan.",
        "Mengonsumsi jahe dapat membantu meredakan mual dan pencernaan.",
        "Pola makan yang sehat dapat meningkatkan konsentrasi dan fokus.",
        "Minum air yang cukup membantu menjaga kesehatan kulit.",
        "Lakukan olahraga yang melibatkan seluruh tubuh untuk hasil terbaik.",
        "Mengurangi konsumsi garam membantu menjaga tekanan darah stabil.",
        "Mendapatkan tidur berkualitas dapat membantu mengelola berat badan.",
        "Konsumsi makanan kaya zat besi membantu mencegah anemia.",
        "Menghindari rokok dapat meningkatkan kesehatan secara signifikan.",
        "Pola makan seimbang dengan asupan vitamin dan mineral penting mendukung kesehatan otak.",
        "Mengonsumsi makanan rendah kalori dapat membantu meningkatkan energi.",
        "Tidur siang 10-20 menit meningkatkan kinerja mental tanpa mengganggu tidur malam.",
        "Cokelat hitam dapat membantu mengurangi tekanan darah tinggi.",
        "Melakukan latihan kekuatan membantu meningkatkan kepadatan tulang.",
        "Meditasi dan teknik pernapasan dapat membantu menurunkan tekanan darah.",
        "Konsumsi ikan yang kaya akan omega-3 baik untuk kesehatan jantung dan otak.",
        "Menghindari makanan tinggi gula dan lemak membantu mengelola berat badan dengan baik."
    ];

    // Fungsi untuk mendapatkan tantangan acak
    function getRandomFakta() {
        const randomIndex = Math.floor(Math.random() * faktaList.length);
        return faktaList[randomIndex];
    }

    // Tampilkan fakta acak saat halaman di-load
    document.getElementById('fakta-text').textContent = getRandomFakta();
    

    const hariKesehatan = {
        "01-15": "Hari Kanker Anak Sedunia",
        "01-24": "Hari Peringatan Sindrom Mobius",
        "01-25": "Hari Gizi Nasional",
        "01-27": "Hari Kusta Sedunia",
        "01-27": "Hari Peringatan Holocaust Sedunia",
        "02-02": "Hari Peringatan Penyakit Artritis Reumatoid",
        "02-04": "Hari Kanker Sedunia",
        "02-07": "Minggu Kesadaran Defek Jantung Turunan",
        "02-12": "Hari Kesehatan Wanita Sedunia",
        "02-22": "Hari Peringatan Anosmia",
        "02-29": "Hari Penyakit Langka",
        "03-03": "Hari Pendengaran Nasional",
        "03-08": "Hari Wanita Sedunia",
        "03-10": "Hari Peringatan HIV & AIDS pada Wanita dan Anak Perempuan",
        "03-13": "Minggu Peringatan Keamanan pada Pasien",
        "03-14": "Minggu Kesadaran Otak",
        "03-20": "Hari Kesehatan Mulut Sedunia",
        "03-21": "Hari Eliminasi Diskriminasi Ras Sedunia",
        "03-22": "Hari Air Sedunia",
        "03-24": "Hari Tuberkulosis Sedunia",
        "03-26": "Purple Day for Epilepsy",
        "04-01": "Kanker tulang",
        "04-02": "Hari Peringatan Autisme Sedunia",
        "04-05": "Hari Kesadaran Serangan Seksual",
        "04-06": "Hari Peringatan sindrom Bohring-Opitz Sedunia",
        "04-07": "Hari Kesehatan Sedunia",
        "04-19": "Hari Bersepeda Sedunia",
        "04-22": "Hari Bumi",
        "04-24": "Hari Meningitis Sedunia",
        "04-24": "Minggu Imunisasi Dunia",
        "04-25": "Hari Malaria Sedunia",
        "05-05": "Hari Higienitas Tangan",
        "05-14": "Hari Kesadaran Sindrom Cornelia de Lange",
        "05-17": "Hari Melawan Homofobia dan Transfobia Sedunia",
        "05-18": "Hari Kesadaran Vaksin HIV",
        "05-20": "Hari Arthritis Autoimun Dunia",
        "05-23": "Minggu Berenang Sehat dan Aman",
        "05-31": "Hari Anti-Tembakau Sedunia",
        "06-01": "Hari Anak Sedunia",
        "06-05": "Hari Lingkungan Hidup Sedunia",
        "06-14": "Hari Donor Darah Sedunia",
        "06-19": "Hari Sel Sabit Sedunia",
        "06-20": "Hari Pengungsi Sedunia",
        "06-21": "Hari Yoga Sedunia",
        "06-26": "Hari Anti-Narkoba Sedunia",
        "06-29": "Hari Keluarga Nasional",
        "07-11": "Hari Populasi Dunia",
        "07-23": "Hari Anak Nasional",
        "07-28": "Hari Hepatitis Sedunia",
        "08-01": "Hari Remaja Asia",
        "08-01": "Pekan ASI Sedunia",
        "08-22": "Minggu Kesehatan Lensa Kontak",
        "08-26": "Hari Kesetaraan Jenis Kelamin",
        "09-04": "Pekan Peduli Hepatitis B",
        "09-06": "Hari Buta Warna",
        "09-09": "Hari Peringatan Penyakit Sindrom Alkohol Janin Sedunia",
        "09-10": "Hari Mencegah Bunuh Diri Sedunia",
        "09-13": "Hari Sepsis Sedunia",
        "09-15": "Hari Peduli Limfoma Sedunia",
        "09-16": "Hari Pangan Nasional",
        "09-17": "Hari Palang Merah Indonesia",
        "09-24": "Hari Jantung Sedunia",
        "09-26": "Hari Kesadaran Malnutrisi",
        "09-28": "Hari Rabies Sedunia",
        "09-29": "Hari Jantung Sedunia",
        "10-05": "Hari Anti-Prostitusi Sedunia",
        "10-06": "Hari Cerebral Palsy Sedunia",
        "10-09": "Hari Penglihatan Sedunia",
        "10-10": "Hari Kesehatan Jiwa",
        "10-11": "Hari Anak Perempuan Sedunia",
        "10-13": "Hari Kesadaran Kanker Payudara Metastatik",
        "10-15": "Hari Cuci Tangan Pakai Sabun (HCTPS) Sedunia",
        "10-16": "Minggu Pencegahan Infeksi Internasional",
        "10-18": "Hari Menopause",
        "10-19": "Hari Tulang dan Sendi Pediatrik Sedunia",
        "10-20": "Hari Osteoporosis Sedunia",
        "10-22": "Hari Kesadaran Gagap Internasional",
        "10-24": "Hari Dokter Nasional",
        "10-29": "Hari Psoriasis Sedunia",
        "11-01": "Hari Peringatan Sindrom Lennox-Gastaut Sedunia",
        "11-10": "Hari Keratoconus Sedunia",
        "11-12": "Hari Kesehatan Nasional (HKN)",
        "11-13": "Minggu Kesadaran Antibiotik Sedunia",
        "11-14": "Hari Diabetes Sedunia",
        "11-15": "Hari Penyakit Paru",
        "11-17": "Hari Prematur Sedunia",
        "11-19": "Hari Pria Sedunia",
        "11-25": "Hari Dunia untuk Eliminasi Kekerasan Terhadap Wanita",
        "11-28": "Hari Menanam Pohon Indonesia",
        "11-29": "Hari Solidaritas dengan Warga Palestina",
        "12-01": "Hari AIDS Sedunia",
        "12-01": "Pekan Kesadaran Crohn’s Disease dan Colitis",
        "12-03": "Hari Penyandang Cacat Sedunia",
        "12-05": "Hari Relawan Sedunia",
        "12-10": "Hari Hak Asasi Manusia",
        "12-20": "Hari Kesetiakawanan Sosial Nasional",
        "12-22": "Hari Ibu",
        "12-27": "Hari Kesatuan Gerak PKK"
    };

// Fungsi untuk format tanggal Indonesia
function formatTanggalIndonesia(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' };
    return date.toLocaleDateString('id-ID', options);
}

// Cari hari kesehatan terdekat
function cariHariTerdekat(tanggalSekarang) {
    const hariKeys = Object.keys(hariKesehatan).sort();
    for (let i = 0; i < hariKeys.length; i++) {
        const [bulan, tanggal] = hariKeys[i].split('-').map(Number);
        const hari = new Date(tanggalSekarang.getFullYear(), bulan - 1, tanggal);
        
        if (hari > tanggalSekarang) {
            const selisihHari = Math.ceil((hari - tanggalSekarang) / (1000 * 60 * 60 * 24));
            return `${selisihHari} hari menuju ${hariKesehatan[hariKeys[i]]}`;
        }
    }
    return null;
}

// Ambil tanggal hari ini
const today = new Date();
const bulan = String(today.getMonth() + 1).padStart(2, '0');
const tanggal = String(today.getDate()).padStart(2, '0');
const key = `${bulan}-${tanggal}`;

// Ambil deskripsi berdasarkan tanggal
const deskripsi = hariKesehatan[key];

// Inisialisasi tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    let tooltipContent;
    if (deskripsi) {
        tooltipContent = `${formatTanggalIndonesia(today)}<br><small>${deskripsi}</small>`;
    } else {
        const hariTerdekat = cariHariTerdekat(today);
        tooltipContent = `${formatTanggalIndonesia(today)}<br><small>${hariTerdekat || "Tidak ada informasi."}</small>`;
    }
    const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        title: tooltipContent,
        html: true
    });
});