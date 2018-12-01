import model from "./model/model";
import field from "./model/field";
import { save } from "./model/operation";



/*import { App } from './app';

const app = new App();

app.deploy({
  port : 8080,
});*/


@model
class Point {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  @field()
  private x: number;

  @field()
  private y: number;
}

@model
class Point3D extends Point {
  constructor(x: number, y: number, z: number) {
    super(x, y);

    this.z = z;
  }

  @field()
  private z: number;
}

@model
class Triangle {
  constructor(p1: Point, p2: Point, P3: Point) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  @field()
  private p1: Point;

  @field()
  private p2: Point;  
  
  @field()
  private p3: Point;
}

let p1 = new Point(0, 0);
let p2 = new Point3D(0, 0, 0);
let p3 = new Point(1, 1);
let t = new Triangle(p1, p2, p3);

save(p1);
save(p2);
save(p3);
save(t);
