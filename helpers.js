const axios = require('axios');

async function getQuran() {
    const ayahNumber = Math.floor(Math.random() * 6237);
    const quranData = await axios.get(`https://api.alquran.cloud/ayah/${ayahNumber}/editions/quran-uthmani,en.pickthall`)
    const juz = quranData.data.data[1].juz
    const surah_name = quranData.data.data[1].surah.englishName
    const ayahInSurah = quranData.data.data[1].numberInSurah
    const ayah_AR = quranData.data.data[0].text
    const ayah_EN = quranData.data.data[1].text
    const resultMessage = `***Juz' ${juz}, Surah ${surah_name}, Ayah ${ayahInSurah}***\nArabic Text: "${ayah_AR}" \nEnglish Text: "${ayah_EN}"`
    return resultMessage
}

async function getJoke() {
    const jokeData = await axios.get('https://official-joke-api.appspot.com/random_joke')
    const { setup, punchline } = jokeData.data
    const resultMessage = `***${setup}***\n${punchline}`
    return resultMessage
}

async function getLebron() {
    const searchData = await axios.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=lebron', {
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY
        }
    })
    const responseData = searchData.data.value
    const randomImgUrl = (responseData[Math.floor(Math.random() * responseData.length)]).contentUrl
    return randomImgUrl
}

module.exports = { getQuran, getJoke, getLebron }; 