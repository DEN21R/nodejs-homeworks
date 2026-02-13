// Чат-приложение

// Создайте новый файл с именем `chat_app.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.

// Напишите функцию `sendMessage`, которая принимает имя пользователя, сообщение и объект `EventEmitter`.

// Внутри функции `sendMessage` генерируйте событие `message` с именем пользователя и сообщением.

// Зарегистрируйте обработчик для события `message`, чтобы выводить сообщение в формате "User: Message".

// Вызовите функцию `sendMessage` несколько раз с разными пользователями и сообщениями.

const EventEmitter = require('events')

const emitter = new EventEmitter()

function sendMessage(name, message, emitter) {
  emitter.emit('message', name, message)
}
emitter.on('message', (name, message) => {
  console.log(`User: ${name}. Message: ${message}`)
})

sendMessage('Bob', 'Added to group', emitter)
sendMessage('Max', 'Got a new task', emitter)
sendMessage('Denys', 'Completed all tasks well', emitter)
