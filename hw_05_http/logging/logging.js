// Логирование ошибок сервера

// Создание сервера:

// Импортируйте модули `http` и `fs`.

// Создайте сервер с использованием метода `http.createServer()`.

// Обработка запросов:

// В функции обратного вызова для сервера специально вызывайте ошибку для тестирования.
// Используйте конструкцию `try-catch` для перехвата ошибок.
// Логируйте ошибки в файл `errors.log` с помощью метода `fs.appendFile()`.

// Формирование ответа:

// Установите статус ответа `500` и заголовок `Content-Type` в `text/plain`.
// Отправьте текстовый ответ с сообщением "Internal Server Error".

// Запуск сервера:

// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import http from 'http'
import fs from 'fs'

const port = 3333

const server = http.createServer((req, res) => {
  try {
    throw new Error('Test error')
  } catch (error) {
    console.log(error)
    fs.appendFile('errors.log', error.stack, 'utf-8', (err) => {
      if (err) {
        console.log(err)
      }
      console.log('File append')
    })
    res.statusCode = 500
    res.setHeader('Content-type', 'text/plain')
    res.end('Internal Server Error')
  }
})
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
