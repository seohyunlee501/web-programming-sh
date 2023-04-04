//클래스 정의
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("만나서 반갑습니다. ${this.name}입니다.");
  }
}
