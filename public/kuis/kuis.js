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
    return randomOptions;
}

function displayQuestions() {
    const selectedQuestions = getRandomQuestions();
    const questionsContainer = document.getElementById('questions');

    selectedQuestions.forEach((q, index) => {
        const shuffledOptions = shuffleOptions(q.options, q.answer);
        const questionHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${index + 1}. ${q.question}</h5>
                ${shuffledOptions.map((option, idx) => `
                    <div class="radio-option"> <!-- Tambahkan kelas di sini -->
                        <input type="radio" name="question${index}" value="${idx}" id="q${index}${idx}">
                        <label class="radio-label" for="q${index}${idx}">${String.fromCharCode(65 + idx)}. ${option}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;    
        questionsContainer.innerHTML += questionHTML;
    });

    // Simpan jumlah pertanyaan yang ditampilkan
    document.getElementById('submit').setAttribute('data-question-count', selectedQuestions.length);
}

function calculateScore() {
    let score = 0;
    const questionCount = document.getElementById('submit').getAttribute('data-question-count');
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
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

    document.getElementById('result').innerHTML = `
    <h3 class="result-score">Skor Anda: ${score} dari ${questionCount}</h3>
    <p class="result-description">${description}</p>
`;

});

// Tampilkan soal saat halaman dimuat
displayQuestions();