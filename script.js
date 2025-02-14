import allQuotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  console.log('This function was called')
  const randomIndex = Math.floor(Math.random() * allQuotes.length)
  const randomQuote = allQuotes[randomIndex]
  const { quote, author } = randomQuote
  quoteElement.textContent = quote
  quoteAuthorElement.textContent = author
}

generateBtn.addEventListener('click', generateRandomQuote)
