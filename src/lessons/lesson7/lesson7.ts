console.log('Lesson 7')

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
  name: string
  constructor(name = 'Animal') {
    this.name = name
  }
  walk() {
    console.log(`${this.name} walking`)
  }
  eat() {
    console.log(`${this.name} eating`)
  }
  sleep() {
    console.log(`${this.name} sleeping`)
  }
}

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
  name: string
  constructor(name = 'Monkey') {
    super()
    this.name = name
  }
  roar() {
    console.log(`${this.name} roaring`)
  }
  climb() {
    console.log(`${this.name} climbing`)
  }
}

// let monkey = new Monkey()
// monkey.eat()
// monkey.walk()
// monkey.sleep()
// monkey.roar()
// monkey.climb()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
  name: string
  constructor(name = 'Human') {
    super()
    this.name = name
  }
  speak() {
    console.log(`${this.name} speaking`)
  }
  think() {
    console.log(`${this.name} thinking`)
  }
}

let man = new Human()
man.speak()
man.think()
man.eat()

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

// just a plug
export default () => {}
