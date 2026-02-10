const fs = require('fs')

function logMessage(text) {
  fs.appendFile('log.txt', text, (err) => {
    if (err) {
      console.log('Error!', err)
    }
    console.log('File appended!')
  })
}

module.exports = { logMessage }
