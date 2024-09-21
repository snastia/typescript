// 1 lesson

// примітиви (типи даних)
// const name: string = 'John'
// let age: number = 15
// const isOnline: boolean = true
// const userProgress: null = null
// let level: undefined = undefined

// console.log(name)

// композиція (... | ...)

// type ID = string | number

// const userId: ID = 1
// const playerId: ID = 'dksfsgodfg11'

// було const userId: string | number = 1, переписали

// type UserObj = {
//   name: string,
//   lastName: string,
//   isOnline: boolean
// }

// const user: UserObj = {
//   name: 'Nastya',
//   lastName: 'Lee',
//   isOnline: false
// }

// складні типи
// readonly - не можна змінювати (юзати методи)

// const numbers: number[] = [1, 2, 3, 4]

// const users: UserObj[] = [
//   {
//     name: 'John',
//     age: '20',
//     isOnline: true,
//   },
//   {
//     name: 'Mike',
//     age: '24',
//     isOnline: false,
//   },
//   {
//     name: 'Nick',
//     age: '22',
//     isOnline: true,
//   }
// ]

// const coord: [number, number] = [31.55, 54.15]
// const entries: [string, boolean] = ['isOnline', false]
// const rgb: [number, number, number] = [255, 0, 255]

// type Alert = 'request' | 'success' | 'error'
// const alert: Alert = "success"

// function calcNumb(numbers: number[]): number {
//     return numbers
//     .reduce((acc, number) => {
//       acc + number
//       return acc
//     }, 0)
// }

// calcNumb(numbers)

// type PlayerGame = {
//   name: string,
//   game: string,
//   level: string
// }

// const objPlayer: PlayerGame = {
//   name: 'Nick',
//   game: 'Minecraft',
//   level: '1'
// }

// function greetPlayer(player: PlayerGame){
//   console.log(`Welcome ${player.name} in ${player.game}. Your level right now is ${player.level}!`)
// }

// greetPlayer(objPlayer)

// type Alert = {
//   state:'error' | 'success' | 'warning',
//   text: string
// }

// function notification(message: Alert){
//    alert(message.state)
// }

// notification({state: 'success', text: 'ok'})


// 2 lesson

// interface IStats {
//     followers: number,
//     views: number,
//     likes: number
// }

// або просто stats: {
//   followers: number,
//   views: number,
//   likes: number
// }

// dnd? - ? означає необов'язково

// interface  IProfileConfig {
//   name: string,
//   tag: string,
//   dnd?: boolean,
//   location: string,
//   avatar: string,
//   stats: IStats,
//   getName: () => string, // аналогічні способи, варіанти
//   showAvatar(): void,
//   // shoavatar: () => void
//   changeLocation: (newlocation: string) => void,
// }

// const profile: IProfileConfig = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   // dnd: false,
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//    getName(){
//     return this.name
//    },
//    showAvatar(){
//     console.log(this.avatar)
//    },
//    changeLocation(newlocation){
//      this.location = new
//    }
// };

// interface Students {
//    [name: string]: number
// }

// const students: Students = {
//   poly: 10,
//   kiwi: 9,
//   mango: 5,
//   john: 8
// }

enum Filters{
  all = 'all',
  active = 'active',
  completed = 'completed'
}

interface StatusFilters {
  all: string,
  active: string,
  completed: string
}

const statusFilters: StatusFilters = {
  all: Filters.all,
  active: Filters.active,
  completed: Filters.completed,
 };

enum PizzaSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

interface IPizza {
  size: PizzaSize,  // 'small' | 'medium' | 'large'
  toppings: string[], // додає скільки завгодно додатків
  logSize: () => void,
  getSize: () => string,
  addTopping: (topping: string) => void
}

const pizza: IPizza = {
  size: PizzaSize.large,
  toppings: ['souse', 'mushrooms', 'cheese'],
  logSize() {
      console.log(this.size);
  },
  getSize() {
      return this.size
  },
  addTopping(topping) {
      this.toppings.push(topping)
  }
}

// generics

function identity <T> (param: T): T{
  return param
}

let output1 = identity<string>('myString')
let output2 = identity<number>(100)

function reverse<T>(arr: T[]): T[] {
  return arr.reverse()
}

let numbers = reverse <number> ([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]

let strings = reverse <string> (["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]

function lengthOfObject <T extends {length: number}> (param: T): number{
  return param.length
}

interface IObj {
  name: string,
  length: number
}

lengthOfObject <IObj> ({name: 'Poly', length: 10})
lengthOfObject <number[]> ([1, 2, 3])

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.

const student = {
  name: "John",
  age: 25,
  groupNumber: 12,
};

interface PropertyObject {
  name: string,
  age: number,
  groupNumber: number
}

function getProperty <T, K extends keyof T> (obj: T, key: K) {
   return obj[key]
}
let studentName = getProperty(student, "name");
console.log(studentName); // "John"

let studentAddress = getProperty(student, "address");
console.log(studentAddress); // undefined