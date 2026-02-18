// Чтение и запись файла

// Создайте новый файл для скрипта, например, `task2.js`.
// Импортируйте модуль `fs`.**
// Создайте файл с именем `info.txt` и запишите в него текст "Node.js is awesome!".
// Используйте метод `fs.writeFile` для записи текста в файл.
// В функции обратного вызова (callback) обработайте возможные ошибки и выведите сообщение о успешной записи.
// Прочитайте содержимое файла `info.txt`.
// Используйте метод `fs.readFile` для чтения содержимого файла.
// В функции обратного вызова (callback) обработайте возможные ошибки и выведите содержимое файла на консоль.

const fs = require('fs')

fs.writeFile('info.txt', 'Node.js is awesome!', 'utf-8', (err) => {
  if (err) {
    console.log('An error occurred when creating the file:', err)
    return
  }
  console.log('File was created!')
  fs.readFile('info.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('An error occurred when deleting a file:', err)
      return
    }
    console.log(data)
  })
})
