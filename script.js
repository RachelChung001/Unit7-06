let age = Math.floor(Math.random() * 30 + 1)
let guess = 0

do {
  guess = parseInt(prompt('guess my age!'))
  if (guess > age) {
    alert('number too high')
  } else if (guess < age) {
    alert ('number too low')
  } else if (guess === age) {
    alert ('correct')
    const ans = prompt('Play again?')
    if (ans === 'y') {
      age = Math.floor(Math.random() * 30 + 1)
      guess = 0
    } else {
      alert('invalid')
    }
  }
} while (age !== guess)
