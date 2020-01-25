// let isDone: boolean = false
// let decLiteral: number = 6
// let hexLiteral: number = 0xf00d
// let octalLiteral: number = 0o744

// let list: number[] = [1, 2, 3]
// let list: Array<number> = [1, 2, 3]

// let x: [string, number] = ['hello', 0]

// enum Color { Red = 1, Green = 2, Blue = 4 }
// console.log(Color)

// let notSure: any = 4
// notSure = 'maybe a string instead'
// console.log(notSure)

// let prettySure: Object = '123'

// let list: any[] = [1, true, 'free']
// list[1] = 100

// function warnUser(): void {
//   console.log('this is my waring message')
// }

// let unusable: void = undefined

// let u: number = 22

// function error(message: string): never {
//   throw new Error(message)
// }

// function fail() {
//   return Error("Something failed");
// }

// function infiniteLoop(): never {
//   while (true) { }
// }

// declare function create(o: object | null): void
// create({ prop: 0 })
// create(null)
// create([1, 2, 3])
// create(42)


// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length

// function printLabel(labelledObj: { size: any, label: string }) {
//   console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: 'size 10 object' }
// printLabel(myObj)

// interface LabelledValue {
//   label: string
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: 'team' }
// printLabel(myObj)

// interface SquareConfig {
//   color?: string
//   width?: number
// }

// function createSquare(config: SquareConfig): { color: string, area: number } {
//   let newSquare = { color: 'white', area: 100 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// interface Point {
//   readonly x: number
//   readonly y: number
// }

// let p1: Point = {
//   x: 10,
//   y: 20
// }

// ro[0] = 12
// ro.push(5)

// let a: number[] = [1, 2, 3, 4]
// let ro: ReadonlyArray<number> = a

// a = ro as number[]

// interface SquareConfig {
//   color?: string
//   width?: number
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return { color: '20', area: 30 }
// }

// // let mySquare = createSquare({ colour: "red", width: 100 })

// let SquareOptions = { colour: 'red', width: 100 }
// let mySquare = createSquare(SquareOptions)

// interface SearchFunc {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString)
//   return result > -1
// }

// mySearch = function (src: string, sub: string): boolean {
//   let result = src.search(sub)
//   return result > -1
// }

// interface StringArray {
//   [index: number]: string
// }

// let myArray: StringArray
// myArray = ['Bob', 'Fred']

// let myStr: string = myArray['ss']

// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// interface NotOkay {
//   [x: number]: Animal
//   [x: string]: Dog
// }

// interface ReadonlyStringArray {
//   readonly [index: number]: string
// }

// let myArray: ReadonlyStringArray = ['alice', 'bob']

// interface ClockInterface {
//   currentTime: Date
//   setTime(d: Date)
// }

// class clock implements ClockInterface {
//   currentTime: Date
//   hour: 20
//   setTime(d: Date) {
//     this.currentTime = d
//   }
// }

// interface ClockInterface {
//   tick(): any
// }

// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface
// }

// function createClock(stor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new stor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {

//   }
// }

// let digital = createClock(DigitalClock, 12, 17)

// interface Shape {
//   color: string
// }

// interface Square extends Shape {
//   sideLength: number
// }

// let square = <Square>{
//   color: 'blue',
//   sideLength: 10
// }

// console.log(square)

// interface Counter {
//   (start: number): string
//   interval: number
//   reset(): void
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) {
//     counter.interval = 123;
//     counter.reset = function () { }
//   }
//   return counter

// }

// let c = getCounter()
// c(10)
// c.reset()
// c.interval = 5


function identity<T>(arg: T): T {
  return arg
}

let myIdentity: <T>(arg: T) => T = identity