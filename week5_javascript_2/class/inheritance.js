// 부모 클래스 정의하기
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("${this.name}이(가) 소리를 냅니다.");
  }
}

// 자식 클래스 정의하기
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }

  fetch() {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }
}

class Hamster extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 찍찍거립니다.`);
  }

  wheel() {
    console.log(`${this.name}이(가) 쳇바퀴를 돌립니다.`);
  }
}

//객체 생성하기
const dog = new Dog("우유");
dog.speak();
dog.fetch();

const hamster = new Hamster("치즈");
hamster.speak();
hamster.wheel();
