import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import Base64 from 'base64-js';
import MarkdownIt from 'markdown-it';
import { maybeShowApiKeyBanner } from './gemini-api-banner';
import './style.css';

// 🔥🔥 FILL THIS OUT FIRST! 🔥🔥
// Get your Gemini API key by:
// - Selecting "Add Gemini API" in the "Project IDX" panel in the sidebar
// - Or by visiting https://g.co/ai/idxGetGeminiKey
let API_KEY = 'AIzaSyCQNmzgxz2fIhfKVafzXcvQQH7Gy3-1a7M'; // Ganti dengan API Key Anda

let form = document.querySelector('form');
let promptInput = document.querySelector('input[name="prompt"]');
let output = document.querySelector('.output');

// Call the multimodal model, and get a stream of results
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // or gemini-1.5-pro
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ],
});

const chat = model.startChat({
  history:[],
  generationConfig:{
    maxOutputTokens: 10000
  }
});

const keywords = [
  // Umum
  "kesehatan", "sehat", "medis", "dokter", "obat", "klinik", "sakit", "diagnosis",
  "gejala", "penyakit", "terapi", "konsultasi", "rawat jalan", "rawat inap", "resep",
  "operasi", "imunisasi", "anak", "lansia", "lanjut usia", "pediatri", "geriatrik",
  "kehamilan", "persalinan", "bayi", "remaja", "dewasa", "ibu", "diet", "tips",
  "penyuluhan", "vaksinasi", "pemulihan", "menstruasi", "haid", "darah", "diet", "mens",
  "datang bulan", "menopause", "luka", "stress", "kronis", "rawat", "gangguan", "radang" ,"iritasi", "rendah", "tinggi", "mental", "health", "menular", "infeksi", "berat badan", "tinggi badan" , "-",

  // Penyakit
  "diabetes", "kanker", "jantung", "hipertensi", "stroke", "tuberkulosis", "malaria", 
  "demam", "covid", "infeksi", "meningitis", "hepatitis", "ginjal", "liver", 
  "asma", "paru-paru", "bronkitis", "gagal ginjal", "lupus", "epilepsi", "autisme",
  "down syndrome", "thalasemia", "kolesterol", "asam urat", "asam lambung", "anemia", "tekanan", 
  "katarak", "glaukoma", "gangguan pencernaan", "dispepsia", "maag", "gastritis", 
  "radang usus", "iritasi usus", "hernia", "varises", "obesitas", "osteoporosis", 
  "alzheimer", "dementia", "penyakit menular", "penyakit kronis", "infeksi saluran kemih", 
  "cacar air", "tifus", "leukemia", "rabies", "psoriasis", "ekzema", "dermatitis", 
  "alergi", "infeksi jamur", "paru-paru basah", "kolitis", "migrain", "hipotiroid", 
  "hipertiroid", "gangguan makan", "bulimia", "anoreksia", "skizofrenia", "depresi", 
  "bipolar", "kecemasan", "panik", "gout", "radang sendi", "multiple sclerosis", 
  "parkinson", "sirosis", "varicella", "sinusitis", "amandel", 
  "infeksi saluran napas", "pneumonia", "disfagia", "emfisema", "fibromyalgia", 
  "endometriosis", "kista ovarium", "disfungsi ereksi", "fibroid", 
  "pneumotoraks", "radang panggul", "ulcerative colitis", "bronkitis", "darah rendah", "darah tinggi",

  // Anggota Tubuh Luar
  "mata", "telinga", "hidung", "mulut", "leher", "bahu", "dada", "perut", "lengan", 
  "kaki", "lutut", "jari", "tumit", "punggung", "wajah", "alis", "bibir", "dagu", 
  "kuku", "tulang", "sendi", "otot", "kulit", "rambut", "gigi", "lidah", "gusi", 
  "tenggorokan", "kelopak mata", "ereksi", "tulang belakang", "tangan", "bokong", "dahi", 
  "tulang belikat", "otot punggung", "tulang rusuk", "tulang panggul", "badan", 

  // Anggota Tubuh Dalam
  "jantung", "paru-paru", "hati", "ginjal", "usus besar", "usus kecil", 
  "lambung", "empedu", "pankreas", "limpa", "tiroid", "kelenjar adrenal", 
  "kantong empedu", "saraf", "arteri", "vena", "kelenjar getah bening", 
  "kandung kemih", "rahim", "ovarium", "prostat", "testis", "ureter", 
  "pankreas", "uretra", "bronkus", "diafragma", "duodenum", "kerongkongan", 
  "hipotalamus", "hipofisis", "tulang rusuk", "tulang panggul",

  // Gejala Penyakit
  "demam", "batuk", "pilek", "sesak napas", "mual", "muntah", "diare", 
  "nyeri perut", "pusing", "sakit kepala", "pegal-pegal", "gatal", 
  "merah-merah", "bengkak", "luka", "kejang", "keletihan", "keringat dingin", 
  "penglihatan kabur", "nyeri dada", "jantung berdebar", "mimisan", 
  "tremor", "sulit tidur", "gelisah", "pingsan", "sulit bicara", 
  "lumpuh", "kesemutan", "gangguan pendengaran", "sulit menelan", 
  "kembung", "mimisan", "nyeri sendi", "nyeri otot", "gigi berlubang"
];

form.onsubmit = async (ev) => {
  ev.preventDefault();
  output.textContent = 'Memproses...';

  const prompt = promptInput.value.toLowerCase();

  if (keywords.some(keyword => prompt.includes(keyword))) {
    try {
      const prompt = `Anda adalah asisten kesehatan yang memberikan informasi umum tentang kesehatan. 
                      Jangan berikan saran medis. ${promptInput.value}`;
      const result = await chat.sendMessageStream(prompt);

      // Read from the stream and interpret the output as markdown
      let buffer = [];
      let md = new MarkdownIt();
      for await (let response of result.stream) {
        buffer.push(response.text());
        output.innerHTML = md.render(buffer.join(''));
      }

      output.innerHTML += '<hr> Disclaimer: Informasi ini hanya untuk tujuan edukasi dan tidak boleh dianggap sebagai saran medis profesional.';

    } catch (e) {
      // Penanganan jika terdapat error SAFETY atau keyword yang terblokir
      if (e.message.includes('GoogleGenerativeAI Error') && e.message.includes('SAFETY')) {
        output.textContent = "Maaf, sepertinya kamu memasukkan keyword yang kurang pantas, silahkan ganti keyword tersebut dengan kata yang lebih halus, mohon maaf atas ketidaknyamanannya, terima kasih";
      } else {
        // Penanganan error umum lainnya
        output.textContent = 'Terjadi kesalahan: ' + e.message;
      }
    }
  } else {
    output.textContent = 'Maaf, saya hanya bisa menjawab pertanyaan seputar kesehatan. Atau bisa jadi anda memasukkan pertanyaan diluar keyword yang ada, silahkan coba lagi';
  }
};


// You can delete this once you've filled out an API key
maybeShowApiKeyBanner(API_KEY);
