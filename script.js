const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    quote:
      'Life is like riding a bicycle. To keep your balance you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'An investment in knowledge always pays the best interest.',
    author: 'Benjamin Franklin',
  },
]

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  console.log('This function was called')
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const { quote, author } = randomQuote
  quoteElement.textContent = quote
  quoteAuthorElement.textContent = author
}

generateBtn.addEventListener('click', generateRandomQuote)
