const axios = require('axios');

async function getQuran () {
    const ayahNumber = Math.floor(Math.random() * 6237);
    const quranData = await axios.get(`https://api.alquran.cloud/ayah/${ayahNumber}/editions/quran-uthmani,en.pickthall`)
    const juz = await quranData.data.data[1].juz
    const surah_name = await quranData.data.data[1].surah.englishName
    const ayahInSurah = await quranData.data.data[1].numberInSurah
    const ayah_AR = await quranData.data.data[0].text
    const ayah_EN = await quranData.data.data[1].text
    const resultMessage = await `***Juz' ${juz}, Surah ${surah_name}, Ayah ${ayahInSurah}***\nArabic Text: "${ayah_AR}" \nEnglish Text: "${ayah_EN}"`
    return resultMessage
}

module.exports = getQuran;