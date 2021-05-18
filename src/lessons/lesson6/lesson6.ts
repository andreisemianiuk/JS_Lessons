console.log('Lesson 6')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// interface IStudent {
//   name: string
//   lastName: string
//   group: number
//   academicPerformance: number[]
//   averageMark: number
// }

// class Student implements IStudent {
//   name: string
//   lastName: string
//   group: number
//   academicPerformance: number[]
//   averageMark: number

//   constructor(
//     name: string,
//     lastName: string,
//     group: number,
//     academicPerformance: number[]
//   ) {
//     this.name = name
//     this.lastName = lastName
//     this.group = group
//     this.academicPerformance = academicPerformance
//     this.averageMark = +this.academicPerformance
//       .reduce((sum, mark) => (sum + mark) / this.academicPerformance.length)
//       .toFixed(2)
//   }
//   private static sortStudents(s1: IStudent, s2: IStudent) {
//     if (s1.averageMark > s2.averageMark) {
//       return 1
//     } else if (s1.averageMark < s2.averageMark) {
//       return -1
//     } else {
//       return 0
//     }
//   }
//   static sort(arr: IStudent[]) {
//     return [...arr].sort(this.sortStudents)
//   }
//   private static isMarksNineOrTen(arr: number[]) {
//     return arr.every(m => m === 9 || m === 10)
//   }
//   private static filterStudents(arr: IStudent[]) {
//     let res: IStudent[] = []
//     arr.forEach(st => {
//       if (this.isMarksNineOrTen(st.academicPerformance)) {
//         res.push(st)
//       }
//     })
//     return res
//   }
//   static printGoodStudents(arr: IStudent[]) {

//     this.filterStudents(arr).forEach(st => {
//       console.log(`Student - ${st.name}, Group - ${st.group}`)
//     })
//   }
// }

// let students: IStudent[] = []
// students.push(
//   new Student('Andrey', 'Semenyuk', 1, [10, 10, 10, 10, 10]),
//   new Student('Ihar', 'Luschchyk', 2, [9, 10, 9, 10, 9]),
//   new Student('Vika', 'Kushnerevich', 3, [8, 10, 7, 10, 9]),
//   new Student('Evgen', 'Ivanuyk', 3, [8, 7, 9, 8, 8]),
//   new Student('Ilya', 'Kim', 2, [4, 5, 7, 8, 9]),
//   new Student('Egor', 'Krid', 2, [3, 3, 4, 4, 5]),
//   new Student('Vasya', 'Vakulenko', 3, [3, 4, 8, 8, 7]),
//   new Student('Sergey', 'Shnurov', 1, [2, 1, 3, 3, 2]),
//   new Student('Oleg', 'Mayami', 2, [1, 2, 1, 2, 3]),
//   new Student('Viktor', 'Drobysh', 1, [2, 3, 5, 3, 8])
// )

// console.log(students)
// console.log(Student.sort(students))
// Student.printGoodStudents(students)

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// class Test {
//   a: any
//   b: any
//   constructor(a = 1, b = 0) {
//     this.a = a
//     this.b = b
//   }
// }
// class Point {
//   x = 10
//   y = 5
// }
// console.log(new Test(3, 2))

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// interface ITime {
//   _hours: string
//   _minutes: string
//   _seconds: string
//   _time: string
// }

// class Time implements ITime {
//   _hours: string
//   _minutes: string
//   _seconds: string
//   _time: string
//   constructor(hours = '00', minutes = '00', seconds = '00') {
//     this._hours = hours
//     this._minutes = minutes
//     this._seconds = seconds
//     this._time = `${this._hours}:${this._minutes}:${this._seconds}`
//   }
//   get time() {
//     return this._time
//   }
//   set time(t: string) {
//     if (/^(2[0-3]|[0-1][\d]):[0-5][\d]:[0-5][\d]$/.test(t)) {
//       this._time = t
//     } else {
//       console.warn('invalid time format')
//     }
//   }
//   get hours() {
//     return this._hours
//   }
//   set hours(hs: string) {
//     if (/^(2[0-3]|[0-1][\d])$/.test(hs)) {
//       this._hours = hs
//     } else {
//       console.warn('invalid hours format')
//     }
//   }
//   get minutes() {
//     return this._minutes
//   }
//   set minutes(ms: string) {
//     if (/^([0-5][\d])$/.test(ms)) {
//       this._minutes = ms
//     } else {
//       console.warn('invalid minutes format')
//     }
//   }
//   get seconds() {
//     return this._seconds
//   }
//   set seconds(sec: string) {
//     if (/^([0-5][\d])$/.test(sec)) {
//       this.seconds = sec
//     } else {
//       console.warn('invalid minutes format')
//     }
//   }
//   showTime() {
//     // console.log(this.time)
//     return this.time
//   }
// }

// const t = new Time('10', '10')
// console.log(t.showTime())
// t.time = '20:20:20'
// console.log(t.showTime())

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

interface IPurchaser {
  name: string
  lastName: string
  address: string
  bankAccountNumber: number
}

class Purchaser implements IPurchaser {
  private _name: string
  private _lastName: string
  private _address: string
  private _bankAccountNumber: number

  constructor(
    name: string,
    lastName: string,
    address: string,
    bankAccountNumber: number
  ) {
    this._name = name
    this._lastName = lastName
    this._address = address
    this._bankAccountNumber = bankAccountNumber
  }

  get name() {
    return this._name
  }
  set name(n) {
    this._name = n
  }
  get lastName() {
    return this._lastName
  }
  set lastName(n) {
    this._lastName = n
  }
  get address() {
    return this._address
  }
  set address(a) {
    this._address = a
  }
  get bankAccountNumber() {
    return this._bankAccountNumber
  }
  set bankAccountNumber(n) {
    this._bankAccountNumber = n
  }
  showPurchaser() {
    console.log(
      `${this.name} ${this.lastName}, ${this.address}, account: ${this.bankAccountNumber}`
    )
  }
  private static sortByName(p1: IPurchaser, p2: IPurchaser) {
    if (p1.name > p2.name) {
      return 1
    } else if (p1.name < p2.name) {
      return -1
    } else {
      return 0
    }
  }
  static showSortedPurchasers(arr: IPurchaser[]) {
    console.log([...arr].sort(this.sortByName))
  }
  private static isAccountFormat(account: number) {
    return /^[\d]{8}$/.test(account.toString())
  }
  static showPurchasersWithCorrectFormatAccontNumber(arr: IPurchaser[]) {
    const a = arr.filter(p => this.isAccountFormat(p.bankAccountNumber))
    console.log(a)
  }
}

const purchasers: IPurchaser[] = []
purchasers.push(
  new Purchaser('sergey', 'tzarikevich', 'Nemiga 3-2', 99999999),
  new Purchaser('andrey', 'semenyuk', 'Zhynovich 20-11', 77777777),
  new Purchaser('ihar', 'lushchyk', 'Chkalova 9-43', 22222222),
  new Purchaser('vika', 'kushnerevich', 'Zhynovich 20-11', 3333333333)
)
console.log(purchasers)

Purchaser.showSortedPurchasers(purchasers)
Purchaser.showPurchasersWithCorrectFormatAccontNumber(purchasers)

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {}
