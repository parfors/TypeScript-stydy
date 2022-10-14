
let age: number = 50;
let userName: string = "Dima";
let toggle: boolean = true;
let empty: null = null;
let notInitialized: undefined = undefined;
let callback: Function = (a: number) => { return 100 + a };


let anything: any = -20;
anything = "Hello";
anything = {};

let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
    str = some;
}

let person: [string, number] = ['Max', 34];

enum Enum { ENABLE, DISABLE };


let someVar: number | string;
let someVar2: 'enable' | 'disable';

function showMessage(message): void  {
    console.log(message)
}

function calk(num1: number, num2: number): number {
    return num1+num2
}

function customError(): never {
    throw new Error();
}

type MyType = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {
    createAt: string;
    updateAt: string;
    }
}

type MyType2= {
    title: string,
    likes: number,
    accounts: string[],
status: string
}

const page1: MyType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 : MyType2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}







// --------------------------FIRST LESSON------------------------------------

// const firstInput = document.querySelector("#num1")! as HTMLInputElement;
// const secondInput = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")! as HTMLButtonElement;

// button.addEventListener("click", onClick);

// function add(num1: number, num2: number) {
//   const add = num1 + num2;
//   return add
// }

// function onClick() {
//   console.log(add(+firstInput.value, +secondInput.value));
//   }
