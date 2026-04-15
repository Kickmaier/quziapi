import  express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/images', express.static('public/images'))

const getBaseUrl =(req) =>
{
    return `${req.protocol}://${req.get('host')}`;
}

const questions = 
[
    {
        question: "Vilket material var förlagan till detta konstverk gjort av?",
        correct_answer: "Trä",
        incorrect_answers: ["Gips", "Sten", "Marmor"],
        image_path: "images/folet.jpg",
        lat:58.9928594,
        lng:16.2068795
    },
    {
        question: "Var i katrineholm kan du hitta ytterligare en bänk i denna stil?",
        correct_answer:"Djulö",
        incorrect_answers: ["Sveaparken", "Järnvägsparken", "Furuliden"],
        image_path: "images/banken.jpg",
        lat : 58.9929673,
        lng : 16.2072014
    },
    {
        question: "Vilket år invigdes detta verk?",
        correct_answer:"1947",
        incorrect_answers: ["1955", "1922", "1931"],
        image_path: "images/morgon.jpg",
        lat : 58.9928319,
        lng : 16.2079105
    },
    {
        question: "Vad är det nuvarande svenska namnet på detta djur?",
        correct_answer:"Öronmakier",
        incorrect_answers: ["Spökdjur", "Nattapa", "Dvärglemur"],
        image_path: "images/galago.jpg",
        lat : 58.9926266,
        lng : 16.2077103
    },
    {
        question: "Vad heter skulpturen som har sin boplats här på sommarhalvåret?",
        correct_answer:"Fru Krokodil",
        incorrect_answers: ["Mamma Krokodil", "Pappa Krokodil", "Herr Krokodil"],
        image_path: "images/krokodil.jpg",
        lat : 58.9927767,
        lng : 16.2079554
    },
    {
        question: "Vad representerar detta konstverk som tidigare fanns i en del av stadsparken?",
        correct_answer:"Boskapsmarknad",
        incorrect_answers: ["Stenåldersby", "Stenrös", "Gravfält"],
        image_path: "images/kreatur.jpg",
        lat : 58.9928181,
        lng : 16.2086716
    },
    {
        question: "Vad föreställer detta verk?",
        correct_answer:"Liten Snigel",
        incorrect_answers: ["Loch Ness Monstret", "Larv", "Midgårdsormen"],
        image_path: "images/snigel.jpg",
        lat : 58.9932972,
        lng : 16.2084261
    },
    {
        question: "Vad är namnet på denna fontän som finns här på sommarhalvåret?",
        correct_answer:"Från fall till fall",
        incorrect_answers: ["Porlande lugn", "Vattentrappa", "Kopparflöde"],
        image_path: "images/fontan.jpg",
        lat : 58.9932660,
        lng : 16.2083336
    },
    {
        question: "Vilket material är denna statyett gjuten i?",
        correct_answer:"Brons",
        incorrect_answers: ["Koppar", "Järn", "Mässing"],
        image_path: "images/helena.jpg",
        lat : 58.9934794,
        lng : 16.2079021
    },
    {
        question: "Vilken historisk byggnad bodde denna man i som senare såldes till staden?",
        correct_answer:"Gröna Kulle",
        incorrect_answers: ["Villa Sandhem", "Vita Huset", "Stora Djulö"],
        image_path: "images/robert.jpg",
        lat : 58.9933587,
        lng : 16.2070026
    }
]

app.get('/api/questions', (req, res) => {
  console.log("Anrop mottaget! Skickar data till appen.");
  const baseUrl = getBaseUrl(req)
  const questionsWithFullUrls = questions.map (q => ({
    ...q,
    image_url: `${baseUrl}/${q.image_path}`
  }))
  res.json(questionsWithFullUrls);
});

app.listen(port, () => {
  console.log(`API-servern körs! Gå till https://katrineholmgeoquiz.onrender.com/api/questions för att testa.`);
});