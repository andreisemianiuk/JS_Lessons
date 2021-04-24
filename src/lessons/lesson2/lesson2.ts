console.log('lesson 2')

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (num: number) => (num2: number) => num + num2

// console.log(sum(3)(10))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// function makeCounter() {
//   let a = 0
//   return () => {
//     return ++a
//   }
// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// function makeCounter(num: number) {
//   return {
//     increase: () => ++num,
//     decrease: () => --num,
//     reset: () => {
//       num = 0
//       return num
//     },
//     set: (x: number) => {
//       num = x
//       return num
//     },
//   }
// }
//
// console.log(makeCounter(2).increase())
// console.log(makeCounter(2).decrease())
// console.log(makeCounter(2).reset())
// console.log(makeCounter(2).set(3))

//Task from LearnJS

// У нас есть встроенный метод arr.filter(f) для массивов.
// Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
//   Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// function inBetween(a: number, b: number) {
//   return function (x: number) {
//     return x >= a && x <= b
//   }
// }
//
// function inArray(arr: number[]) {
//   return function (x: number) {
//     return arr.includes(x)
//   }
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7]

// alert(arr.filter(inBetween(3, 6))) // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))) // 1,2

// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   {name: 'John', age: 20, surname: 'Johnson'},
//   {name: 'Pete', age: 18, surname: 'Peterson'},
//   {name: 'Ann', age: 19, surname: 'Hathaway'},
// ]
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
//   users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
//
//   Напишите функцию byField, которая может быть использована для этого.

// function byField(sortName: string) {
//   return (a: any, b: any) => a[sortName] > b[sortName] ? 1 : -1
// }

// function makeArmy() {
//   let shooters = []
//
//   let i = 0
//   while (i < 10) {
//     let x = i
//     let shooter = function () { // функция shooter
//       alert(x) // должна выводить порядковый номер
//     }
//     shooters.push(shooter)
//     i++
//   }
//   return shooters
// }
//
// let army = makeArmy()
//
// console.log(army[0]()) // у 0-го стрелка будет номер 10
// console.log(army[5]()) // и у 5-го стрелка тоже будет номер 10


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// function superSum(num: number) {
//   debugger
//   if (num === 0) return 0
//   if (num === 1) return (n: number) => n
//
//   let _arguments: number[] = []
//
//   function helper(...args: number[]): any {
//     _arguments = [..._arguments, ...args]
//
//     if (_arguments.length >= num) {
//       _arguments.length = num
//       return _arguments.reduce((acc, v) => acc + v)
//     } else {
//       return helper
//     }
//   }
//
//   return helper
// }

// console.log(superSum(0)) //0
//@ts-ignore
// console.log(superSum(1)(2)) //0
//@ts-ignore
// console.log(superSum(3)(2)(5)(3)) //10
//@ts-ignore
// console.log(superSum(3)(2, 5)(3, 7)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// для одномерного массива
// function flat(arr: any) {
//   return arr.reduce((acc: any, v: any) => acc.concat(v), [])
// }

// для многомерного массива с помощью рекурсии
// function flat(arr: any, d: number = 1) {
//   debugger
//   return d > 0 ? arr.reduce((acc: any, v: any) => acc.concat(Array.isArray(v) ? flat(v, d - 1) : v), []) : arr.slice()
// }

// не рекурсивное упрощение с использованием стека
// function flat(arr: any) {
//   const stack = [...arr]
//   const result = []
//
//   while (stack.length) {
//     const next = stack.pop()
//     if (Array.isArray(next)) {
//       stack.push(...next)
//     } else {
//       result.push(next)
//     }
//   }
//   return result.reverse()
// }

// рекурсивно упрощаем массив

function flat(arr: []) {
  let flattend: [] = []
  
  function flatted(arr: []) {
    arr.forEach((v) => {
      if (Array.isArray(v)) flatted(v)
      else flattend.push(v)
    })
  }
  
  flatted(arr)
  return flattend
}

//@ts-ignore
console.log(flat([[10, 20, [30, [8, 9, [7, [9, 8]]]]], 1, 2, [3, 4, [5, 6]]]))

// just a plug
export default () => {
};