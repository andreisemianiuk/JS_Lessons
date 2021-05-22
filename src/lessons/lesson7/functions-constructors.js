console.log('lesson 7, functions-constructors')

// function Animal(name = 'Animal') {
//   this.name = name
// }

// Animal.prototype.walk = function () {
//   console.log(`${this.name} walking`)
// }
// Animal.prototype.eat = function () {
//   console.log(`${this.name} eating`)
// }
// Animal.prototype.sleep = function () {
//   console.log(`${this.name} sleeping`)
// }

// let bear = new Animal('Bear')
// bear.eat()
// bear.walk()
// bear.sleep()

// function Monkey(name = 'Monkey') {
//   Animal.call(this)
//   this.name = name
// }

// Monkey.prototype = Object.create(Animal.prototype)
// Object.defineProperty(Monkey.prototype, 'constructor', {
//   value: Monkey,
//   enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
//   writable: true,
// })
// Monkey.prototype.roar = function () {
//   console.log(`${this.name} roaring`)
// }
// Monkey.prototype.climb = function () {
//   console.log(`${this.name} climbing`)
// }
// console.dir(Animal)
// console.dir(Monkey)
// console.log('Monkey.prototype.constructor', Monkey.prototype.constructor)

// let monkey = new Monkey()

// monkey.climb()
// monkey.roar()
// monkey.eat()

// function Human(name = 'Human') {
//   Monkey.call(this)
//   this.name = name
// }

// Human.prototype = Object.create(Monkey.prototype)
// Object.defineProperty(Human.prototype, 'constructor', {
//   value: Human,
//   enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
//   writable: true,
// })

// Human.prototype.speak = function () {
//   console.log(`${this.name} speaking`)
// }
// Human.prototype.think = function () {
//   console.log(`${this.name} thinking`)
// }

// let man = new Human()
// console.log(man)
// man.climb()
// man.roar()
// man.eat()
// man.sleep()
// man.think()
// man.speak()

export default () => {}
