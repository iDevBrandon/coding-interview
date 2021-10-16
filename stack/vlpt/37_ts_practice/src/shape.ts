// interface 사용해보기

// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);



const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
