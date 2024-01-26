class Shape{
    constructor (shape, color){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    createShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>`
    }
}

class Triangle extends Shape{
    createShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`
    }
}

class Square extends Shape{
    createShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"></rect>`
    }
}

module.exports = {Square, Circle, Triangle}