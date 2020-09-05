const axios = require('axios');

async function getQuran() {
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

async function getJoke() {
    const jokeData = await axios.get('https://official-joke-api.appspot.com/random_joke')
    const { setup, punchline } = await jokeData.data
    const resultMessage = await `***${setup}***\n${punchline}`
    return resultMessage
}

async function getLebron() {
    const searchData = await axios.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=lebron', {
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY
        }
    })
    const responseData = await searchData.data.value
    const randomImgUrl = await (responseData[Math.floor(Math.random() * responseData.length)]).contentUrl
    return randomImgUrl
}

module.exports = { getQuran, getJoke, getLebron };