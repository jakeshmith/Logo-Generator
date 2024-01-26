const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green"></circle>';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue"></circle>';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque"></polygon>';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple"></polygon>';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue"></rect>';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red"></rect>';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.createShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
