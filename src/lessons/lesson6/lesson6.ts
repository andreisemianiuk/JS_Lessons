console.log('Lesson 6')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).

interface IStudent {
  name: string
  lastName: string
  group: number
  academicPerformance: number[]
  averageMark: number
}

class Student implements IStudent {
  name: string
  lastName: string
  group: number
  academicPerformance: number[]
  averageMark: number

  constructor(
    name: string,
    lastName: string,
    group: number,
    academicPerformance: number[]
  ) {
    this.name = name
    this.lastName = lastName
    this.group = group
    this.academicPerformance = academicPerformance
    this.averageMark = +this.academicPerformance
      .reduce((sum, mark) => (sum + mark) / this.academicPerformance.length)
      .toFixed(2)
  }
  private static sortStudents(s1: IStudent, s2: IStudent) {
    if (s1.averageMark > s2.averageMark) {
      return 1
    } else if (s1.averageMark < s2.averageMark) {
      return -1
    } else {
      return 0
    }
  }
  static sort(arr: IStudent[]) {
    return [...arr].sort(this.sortStudents)
  }
  private static isMarksNineOrTen(arr: number[]) {
    return arr.every(m => m === 9 || m === 10)
  }
  private static filterStudents(arr: IStudent[]) {
    let res: IStudent[] = []
    arr.forEach(st => {
      if (this.isMarksNineOrTen(st.academicPerformance)) {
        res.push(st)
      }
    })
    return res
  }
  static printGoodStudents(arr: IStudent[]) {
    this.filterStudents(arr).forEach(st => {
      console.log(`Student - ${st.name}, Group - ${st.group}`)
    })
  }
}

let students: IStudent[] = []
students.push(
  new Student('Andrey', 'Semenyuk', 1, [10, 10, 10, 10, 10]),
  new Student('Ihar', 'Luschchyk', 2, [9, 10, 9, 10, 9]),
  new Student('Vika', 'Kushnerevich', 3, [8, 10, 7, 10, 9]),
  new Student('Evgen', 'Ivanuyk', 3, [8, 7, 9, 8, 8]),
  new Student('Ilya', 'Kim', 2, [4, 5, 7, 8, 9]),
  new Student('Egor', 'Krid', 2, [3, 3, 4, 4, 5]),
  new Student('Vasya', 'Vakulenko', 3, [3, 4, 8, 8, 7]),
  new Student('Sergey', 'Shnurov', 1, [2, 1, 3, 3, 2]),
  new Student('Oleg', 'Mayami', 2, [1, 2, 1, 2, 3]),
  new Student('Viktor', 'Drobysh', 1, [2, 3, 5, 3, 8])
)

console.log(students)
console.log(Student.sort(students))
Student.printGoodStudents(students)

// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {}
