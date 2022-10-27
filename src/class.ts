class Key {
  public signature: number;
  constructor(maxNub:number, minNum:number) {
    const randNumb = Math.floor(Math.random() * (maxNub - minNum) + minNum);
    this.signature = randNumb;
  }
  
  getSignature(): number {
    return this.signature
  }
}

class Person {
  constructor(public key: Key) { };
  getKey(): Key {
    return this.key
  }
}

abstract class House {
  protected isDoorOpen: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) { }
  
  comeIn(person:Person): void {
    if (!this.isDoorOpen) {
      throw new Error ('The door is closed')
    }
    this.tenants.push(person);
    console.log("The person is in the house :)")
  }

  abstract openDoor(key:Key): void 
}

class MyHome extends House {
  openDoor(key: Key): void {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('The key does not math');
    }
    this.isDoorOpen = true;
    console.log('The door is open')
  }
}
  
const key1 = new Key(1, 3);
const key2 = new Key(1, 3);
console.log(key1, key2);

const person1 = new Person(key1);
const myHome = new MyHome(key2);

myHome.openDoor(person1.getKey());
myHome.comeIn(person1);







// class Key {
//   public signature: number;
//   constructor(maxNum: number, minNum: number) {
//       const randomNumber: number = Math.floor(Math.random() * (maxNum - minNum) + minNum);
//       this.signature = randomNumber;
//   }

//   getSignature(): number {
//     return this.signature
//   }
// }

// class Person {
//   constructor(private key: Key) { }
//   getKey(): Key {
//     return this.key
//   }
// }

// abstract class House {
//   protected isDoorOpen: boolean = false;
//   protected tenants: Person[] = [];

//   constructor(protected key: Key) {}
  
//   comeIn(person: Person) {
//     if (!this.isDoorOpen) {
//       throw new Error('The door is closed');
//     }

//     this.tenants.push(person);
//     console.log('Person is in the House')
//   }

//   abstract openDoor(key: Key): void;
// }

// class MyHouse extends House {
// public openDoor(key: Key) : void {
//   if (key.getSignature() !== this.key.getSignature()) {
//     throw new Error('Wrong key');
//   }
//   this.isDoorOpen = true;
// }
// }

// const key = new Key(1, 3);
// const key2 = new Key(1, 3)
// console.log(key);
// console.log(key2);

// const person1 = new Person(key2);
// console.log(person1);

// const myHouse = new MyHouse(key);
// console.log(myHouse);

// myHouse.openDoor(person1.getKey());

// myHouse.comeIn(person1);




