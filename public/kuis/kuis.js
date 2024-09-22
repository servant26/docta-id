const questions = [
    {
        question: "Apa jenis makanan yang paling baik untuk menjaga kesehatan jantung?",
        options: ["Makanan tinggi lemak jenuh", "Sayuran hijau", "Makanan olahan", "Gula"],
        answer: 1 // Indeks B
    },
    {
        question: "Berapa banyak air yang disarankan untuk diminum setiap hari?",
        options: ["1 liter", "2 liter", "3 liter", "4 liter"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang biasanya merupakan tanda awal dari diabetes?",
        options: ["Peningkatan energi", "Sering merasa lapar", "Berkurangnya berat badan", "Kesehatan kulit yang membaik"],
        answer: 1 // Indeks B
    },
    {
        question: "Berapa lama waktu yang disarankan untuk berolahraga setiap minggu?",
        options: ["30 menit", "150 menit", "300 menit", "60 menit"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang merupakan risiko dari merokok?",
        options: ["Meningkatkan kesehatan paru-paru", "Meningkatkan risiko kanker", "Meningkatkan stamina", "Menurunkan tekanan darah"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang bisa membantu menjaga berat badan yang sehat?",
        options: ["Diet tinggi kalori", "Berolahraga secara teratur", "Tidur berlebihan", "Menghindari sayuran"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang bukan manfaat dari meditasi?",
        options: ["Mengurangi stres", "Meningkatkan konsentrasi", "Menambah kecemasan", "Meningkatkan kesehatan mental"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa jenis lemak yang sebaiknya dihindari untuk kesehatan jantung?",
        options: ["Lemak tak jenuh", "Lemak jenuh", "Lemak trans", "Lemak omega-3"],
        answer: 2 // Indeks C
    },
    {
        question: "Berapa jumlah serat yang disarankan untuk dikonsumsi setiap hari?",
        options: ["5 gram", "10 gram", "25 gram", "50 gram"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang dapat menyebabkan hipertensi?",
        options: ["Aktivitas fisik yang berlebihan", "Stres tinggi", "Pola tidur yang baik", "Diet tinggi serat"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa manfaat dari olahraga rutin?",
        options: ["Meningkatkan risiko penyakit", "Menurunkan berat badan", "Meningkatkan stres", "Mengurangi stamina"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa gejala umum dari flu?",
        options: ["Nyeri otot", "Meningkatkan nafsu makan", "Tidur lebih lama", "Kesehatan mental yang lebih baik"],
        answer: 0 // Indeks A
    },
    {
        question: "Manakah dari berikut ini yang bukan merupakan gejala stres?",
        options: ["Insomnia", "Peningkatan energi", "Kelelahan", "Kecemasan"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang dapat membantu meningkatkan kualitas tidur?",
        options: ["Menggunakan gadget sebelum tidur", "Mengatur rutinitas tidur", "Mengonsumsi kafein", "Makan berat sebelum tidur"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang merupakan sumber protein sehat?",
        options: ["Daging merah", "Ikan", "Makanan olahan", "Minuman bersoda"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang biasanya menjadi penyebab sakit kepala?",
        options: ["Tidur yang cukup", "Dehidrasi", "Makan buah", "Berolahraga"],
        answer: 1 // Indeks B
    },
    {
        question: "Berapa banyak buah dan sayuran yang disarankan untuk dikonsumsi setiap hari?",
        options: ["1-2 porsi", "3-5 porsi", "6-8 porsi", "9-12 porsi"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa manfaat dari vaksinasi?",
        options: ["Menyebabkan penyakit", "Meningkatkan risiko infeksi", "Melindungi dari penyakit", "Mengurangi kekebalan tubuh"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang paling baik untuk kesehatan mental?",
        options: ["Menyendiri", "Berinteraksi sosial", "Menghindari aktivitas fisik", "Stres"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang harus dihindari untuk mencegah obesitas?",
        options: ["Makan sayur", "Makanan cepat saji", "Berolahraga", "Mengonsumsi air"],
        answer: 1 // Indeks B
    },
    {
        question: "Berapa banyak tidur yang disarankan untuk orang dewasa?",
        options: ["4-5 jam", "6-7 jam", "7-9 jam", "9-10 jam"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang bisa meningkatkan risiko penyakit jantung?",
        options: ["Olahraga teratur", "Kolesterol tinggi", "Diet seimbang", "Menghindari stres"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang merupakan tanda dehidrasi?",
        options: ["Kulit lembab", "Kelelahan", "Air seni jernih", "Energi tinggi"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang dapat dilakukan untuk mencegah infeksi virus?",
        options: ["Menghindari kebersihan", "Mencuci tangan secara teratur", "Berinteraksi dengan banyak orang", "Menghindari vaksinasi"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang merupakan efek negatif dari kurang tidur?",
        options: ["Peningkatan konsentrasi", "Penurunan daya ingat", "Meningkatkan energi", "Kesehatan mental yang baik"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang menjadi sumber karbohidrat sehat?",
        options: ["Gula pasir", "Roti putih", "Nasi merah", "Makanan cepat saji"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang dapat mengurangi risiko kanker?",
        options: ["Diet tinggi lemak", "Konsumsi sayuran dan buah-buahan", "Merokok", "Konsumsi alkohol berlebihan"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang biasanya merupakan gejala alergi makanan?",
        options: ["Kelelahan", "Ruam kulit", "Peningkatan berat badan", "Peningkatan nafsu makan"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang paling penting untuk menjaga kesehatan tulang?",
        options: ["Olahraga ringan", "Kalsium", "Tidur cukup", "Konsumsi gula"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang merupakan sumber omega-3 yang baik?",
        options: ["Daging merah", "Ikan salmon", "Makanan olahan", "Gula"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang bisa menyebabkan masalah pencernaan?",
        options: ["Serat tinggi", "Makanan tinggi lemak", "Air putih", "Aktivitas fisik"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang bukan faktor risiko untuk stroke?",
        options: ["Hipertensi", "Merokok", "Diet seimbang", "Kolesterol tinggi"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang harus dilakukan untuk mengatasi stres?",
        options: ["Mengabaikannya", "Berolahraga", "Meningkatkan kafein", "Tidur lebih sedikit"],
        answer: 1 // Indeks B
    },
    {
        question: "Manakah dari berikut ini yang dapat meningkatkan risiko diabetes?",
        options: ["Diet seimbang", "Aktivitas fisik teratur", "Konsumsi gula berlebih", "Menghindari stres"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang dapat membantu memperbaiki kesehatan mental?",
        options: ["Kesepian", "Terapi", "Menghindari aktivitas", "Mengisolasi diri"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang biasanya bukan gejala serangan jantung?",
        options: ["Nyeri dada", "Kelelahan ekstrim", "Mual", "Rasa sakit pada lengan kanan"],
        answer: 3 // Indeks D
    },
    {
        question: "Apa yang dapat membantu meningkatkan daya tahan tubuh?",
        options: ["Konsumsi vitamin C", "Tidur lebih sedikit", "Mengonsumsi makanan cepat saji", "Menghindari aktivitas fisik"],
        answer: 0 // Indeks A
    },
    {
        question: "Apa yang dapat meningkatkan risiko osteoporosis?",
        options: ["Kalsium rendah", "Olahraga teratur", "Tidur cukup", "Diet seimbang"],
        answer: 0 // Indeks A
    },
    {
        question: "Manakah dari berikut ini yang dapat memperbaiki kesehatan mata?",
        options: ["Makanan cepat saji", "Menghindari cahaya alami", "Konsumsi wortel", "Mengurangi aktivitas fisik"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang biasanya merupakan penyebab dari nyeri otot?",
        options: ["Olahraga ringan", "Kurang tidur", "Dehidrasi", "Makanan tinggi serat"],
        answer: 2 // Indeks C
    },
    {
        question: "Apa yang paling baik untuk menjaga kesehatan kulit?",
        options: ["Makanan berminyak", "Tidur cukup", "Konsumsi gula berlebih", "Kurang minum"],
        answer: 1 // Indeks B
    },
    {
        question: "Apa yang menjadi sumber vitamin D yang baik?",
        options: ["Cahaya matahari", "Makanan olahan", "Daging merah", "Gula"],
        answer: 0 // Indeks A
    },
    {
        question: "Apa yang dapat menyebabkan anemia?",
        options: ["Kekurangan zat besi", "Konsumsi daging merah", "Olahraga teratur", "Tidur cukup"],
        answer: 0 // Indeks A
    },
    {
        question: "Apa yang paling penting untuk kesehatan mental?",
        options: ["Interaksi sosial", "Makanan cepat saji", "Kurang tidur", "Stres berlebihan"],
        answer: 0 // Indeks A
    },
    {
        question: "Apa yang biasanya merupakan gejala dari kekurangan vitamin C?",
        options: ["Kulit kering", "Bengkak di gusi", "Kelelahan", "Peningkatan energi"],
        answer: 1 // Indeks B
    }
];


function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function shuffleOptions(options, correctIndex) {
    const shuffled = [...options];
    const correctAnswer = shuffled[correctIndex];
    shuffled.splice(correctIndex, 1);
    const randomOptions = shuffled.sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(Math.random() * (randomOptions.length + 1));
    randomOptions.splice(randomIndex, 0, correctAnswer);
    return { shuffledOptions: randomOptions, correctIndex: randomIndex };
}

function displayQuestions() {
    const selectedQuestions = getRandomQuestions();
    const questionsContainer = document.getElementById('questions');

    selectedQuestions.forEach((q, index) => {
        const { shuffledOptions, correctIndex } = shuffleOptions(q.options, q.answer);
        
        // Simpan indeks jawaban yang benar setelah diacak
        q.shuffledAnswer = correctIndex;
        q.correctAnswer = q.options[q.answer]; // Simpan jawaban benar

        const questionHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${index + 1}. ${q.question}</h5>
                ${shuffledOptions.map((option, idx) => `
                    <div class="radio-option">
                        <input type="radio" name="question${index}" value="${idx}" id="q${index}${idx}">
                        <label class="radio-label" for="q${index}${idx}">${String.fromCharCode(65 + idx)}. ${option}</label>
                    </div>
                `).join('')}
                <p class="correct-answer" style="display: none;">Jawaban yang benar: ${q.correctAnswer}</p>
            </div>
        </div>
    `;    
        questionsContainer.innerHTML += questionHTML;
    });

    document.getElementById('submit').setAttribute('data-question-count', selectedQuestions.length);
}

function calculateScore() {
    let score = 0;
    const questionCount = document.getElementById('submit').getAttribute('data-question-count');
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.shuffledAnswer) {
            score++;
        }
    });
    return score;
}

function getScoreDescription(score, total) {
    const percentage = (score / total) * 100;
    if (percentage === 100) {
        return "Wow! Anda sempurna!";
    } else if (percentage >= 80) {
        return "Hebat! Anda sangat paham tentang kesehatan.";
    } else if (percentage >= 60) {
        return "Bagus! Anda memiliki pengetahuan yang baik.";
    } else {
        return "Cobalah lagi untuk meningkatkan pengetahuan Anda.";
    }
}

document.getElementById('submit').addEventListener('click', () => {
    const questionCount = document.getElementById('submit').getAttribute('data-question-count');
    const unanswered = [...Array(Number(questionCount)).keys()].some(index => 
        !document.querySelector(`input[name="question${index}"]:checked`)
    );

    if (unanswered) {
        document.getElementById('warning').innerHTML = `<span class="warning-message">Semua soal harus dijawab sebelum mengirim jawaban.</span>`;
        return;
    } else {
        document.getElementById('warning').textContent = ""; // Hapus pesan peringatan
    }    

    const score = calculateScore();
    const description = getScoreDescription(score, questionCount);

    // Nonaktifkan radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.disabled = true;
    });

    // Tampilkan kunci jawaban jika jawaban salah
    const correctAnswers = document.querySelectorAll('.correct-answer');
    correctAnswers.forEach((answer, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) !== questions[index].shuffledAnswer) {
            answer.style.display = 'block'; // Tampilkan kunci jawaban jika salah
        }
    });

    document.getElementById('result').innerHTML = `
    <h3 class="result-score">Skor Anda: ${score} dari ${questionCount}</h3>
    <p class="result-description">${description}</p>
`;
});

// Tampilkan soal saat halaman dimuat
displayQuestions();