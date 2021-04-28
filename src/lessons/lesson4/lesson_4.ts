import { useRef } from 'react'

console.log('lesson 4')

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// new Promise((res, rej) => {
//   console.log('Promise is created')
// })

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// new Promise(res => res('Promise Data')).then(data => console.log(data))

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// new Promise((res, rej) => {
//   rej('Promise Error')
// }).catch(data => console.log(data))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// new Promise(res => {
//   setTimeout(() => {
//     res('Promise Data')
//   }, 3000)
// }).then(data => console.log(data))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type HandlePromiseType = {
  promise: null | Promise<any>
  resolve: null | Function
  reject: null | Function
  onSuccess: (param: string | unknown) => void
  onError: (param: string | unknown) => void
}

const handlePromise: HandlePromiseType = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess: (param: unknown) => {
    console.log(`Promise is resolved with data: ${param}`)
  },
  onError: (param: unknown) => {
    console.log(`Promise is rejected with data: ${param}`)
  },
}

export const createPromise = () => {
  handlePromise.promise = new Promise((res, rej) => {
    handlePromise.resolve = res
    handlePromise.reject = rej
  })
    // .then(res => handlePromise.onSuccess(res))
    .then(handlePromise.onSuccess)
    // .catch(err => handlePromise.onError(err))
    .catch(handlePromise.onError)
}
export const resolvePromise = () => {
  handlePromise.resolve && handlePromise.resolve('True')
}
export const rejectPromise = () => {
  handlePromise.reject && handlePromise.reject('False')
}

//@ts-ignore
window.handlePromise = handlePromise

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// const pr = new Promise(res => {
//   setTimeout(() => res('My name is'), 1000)
// })

// const onSuccess = (p: any) => {
//   return `${p} Andrey`
// }
// const print = (p: any) => {
//   console.log(p)
// }

// pr.then(data => onSuccess(data)).then(data => print(data))

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

// const pr1 = new Promise(res =>
//   setTimeout(() => {
//     res({ name: 'Andrey' })
//   }, 2000)
// )
// const pr2 = new Promise(res =>
//   setTimeout(() => {
//     res({ age: 33 })
//   }, 3000)
// )
// const pr3 = new Promise(res =>
//   setTimeout(() => {
//     res({ city: 'Minsk' })
//   }, 4000)
// )
// Promise.all([pr1, pr2, pr3]).then(values => {
//   console.log(...values)
// })

// just a plug
export default () => {}
