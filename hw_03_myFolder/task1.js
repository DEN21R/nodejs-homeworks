// Создание и удаление каталога
// Создайте новый файл для скрипта, например, `task1.js`.
// Импортируйте модуль `fs`.
// Создайте каталог с именем `myFolder` в текущей директории.
// Используйте метод `fs.mkdir` для создания каталога.
// В функции обратного вызова (callback) обработайте возможные ошибки и выведите сообщение о успешном создании.
// Удалите каталог `myFolder`.
// Используйте метод `fs.rmdir` для удаления каталога.
// В функции обратного вызова (callback) обработайте возможные ошибки и выведите сообщение о успешном удалении.

const fs = require('fs')

fs.mkdir('myFolder', (err) => {
  if (err) {
    console.log('An error occurred when creating the folder:', err)
    return
  }
  console.log('Folder was created!')
  fs.rmdir('myFolder', (err) => {
    if (err) {
      console.log('An error occurred when deleting a folder:', err)
      return
    }
    console.log('Folder was deleted!')
  })
})
