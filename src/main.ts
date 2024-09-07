// примітиви (типи даних)
const name: string = 'John'
let age: number = 15
const isOnline: boolean = true
// const userProgress: null = null
// let level: undefined = undefined

console.log(name)

// композиція (... | ...)

type ID = string | number

const userId: ID = 1
const playerId: ID = 'dksfsgodfg11'

// було const userId: string | number = 1, переписали

type UserObj = {
  name: string,
  lastName: string,
  isOnline: boolean
}

const user: UserObj = {
  name: 'Nastya',
  lastName: 'Lee',
  isOnline: false
}

// складні типи
// readonly - не можна змінювати (юзати методи)

const numbers: number[] = [1, 2, 3, 4]

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

const coord: [number, number] = [31.55, 54.15]
const entries: [string, boolean] = ['isOnline', false]
const rgb: [number, number, number] = [255, 0, 255]

// type Alert = 'request' | 'success' | 'error'
// const alert: Alert = "success"

function calcNumb(numbers: number[]): number {
    return numbers
    .reduce((acc, number) => {
      acc + number
      return acc
    }, 0)
}

calcNumb(numbers)

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

type Alert = {
  state:'error' | 'success' | 'warning',
  text: string
}

function notification(message: Alert){
   alert(message.state)
}

notification({state: 'success', text: 'ok'})